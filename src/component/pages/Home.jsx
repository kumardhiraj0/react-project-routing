import React from "react";
import Common from "./common/Common";
import img from "../../images/home2.jpeg";
const Home = ()=>{
    return (
        <>
        <Common
        name="Grow your Business with" 
        imgsrc={img} 
        visit="/service"
        btname="Get Started"
        />
        </>
    )
}
export default Home;