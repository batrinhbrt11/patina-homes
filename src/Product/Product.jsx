import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getContent } from "../actions/language";
import imgSrc from "../ImgSrc";
import { categories, ProductSrc } from "../ProductSrc";

export default function Product() {
  const lang = useSelector((state) => state.language);
  const listCategory = categories;
  const [chooseCategory, setChooseCategory] = useState("Chairs");
  const handleFilter = (category) => {
    setChooseCategory(category.name);
  };
  const listProduct = ProductSrc;

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="product-page margin-top">
      <div
        className="bg-title"
        style={{ backgroundImage: `url(${imgSrc.Home.Service.img1})` }}
      >
        <div>
          <h1 className="heading-1 main-font font-bold">Collection</h1>
        </div>
      </div>
      <div className="section product-section">
        <div className="product-list">
          <Box sx={{ minHeight: 600 }}>
            <Masonry
              columns={{ xs: 1, md: 3, xl: 4 }}
              spacing={2}
              sx={{ margin: "0" }}
            >
              {listProduct
                .filter((item) => item.category === chooseCategory)
                .map((item) => (
                  <div key={item.id}>
                    <img
                      src={`${item.imgsrc}?w=162&auto=format`}
                      srcSet={`${item.imgsrc}?w=162&auto=format&dpr=2 2x`}
                      alt=""
                      loading="lazy"
                      style={{
                        borderRadius: 10,
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
            </Masonry>
          </Box>
        </div>
        <div className="category-list">
          <div className="category-container">
            <h2 className="heading-4 main-font font-semiBold">Category</h2>
            <div>
              {listCategory.map((category) => (
                <button
                  key={category.key}
                  className={
                    category.name === chooseCategory
                      ? "heading-5 main-font font-medium btn-active"
                      : "heading-5 main-font font-medium"
                  }
                  onClick={(e) => handleFilter(category)}
                >
                  {getContent(lang, category.key)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
