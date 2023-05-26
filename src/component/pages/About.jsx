import React from "react";
import Common from "./common/Common";
import img from "../../images/about1.avif";
const About = () => {
  return (
    <>
      <Common
       name="Welcome to About page" 
       imgsrc={img} 
       visit="/contact"
       btname="Contact Now"
       /> 
    </>
  );
};
export default About;
