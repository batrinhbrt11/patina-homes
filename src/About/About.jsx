import React from 'react'
import { useSelector } from "react-redux";
import patinaContent from "../LangConfig";
export default function About() {
  const lang = useSelector((state) => state.language);
  return (
    <div>{patinaContent[lang].navMenuAbout}</div>
  )
}
