import React from "react";
import { Carousel } from "react-carousel-minimal";
export default function BigImg() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },

    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    },
  ];

  return (
    <div className="row big-img-section">
      
      <div className="right-content">
        <Carousel
          data={data}
          time={2000}
          width="100%"
          height="80vh"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnailWidth="100px"
          thumbnailHeight="0"
          style={{
            textAlign: "center",
            maxWidth: "100%",
            maxHeight: "80vh",
          }}
        />
      </div>
      <div className="left-content">
        <img src="./asset/logo.svg" alt="" />

        <ul>
          <li>
            <p className="heading-4 font-bold text-color-3">Modern Design</p>
          </li>
          <li>
            <p className="heading-4 font-bold text-color-3">Luxury Interiors</p>
          </li>
          <li>
            <p className="heading-4 font-bold text-color-3">Our Awards</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
