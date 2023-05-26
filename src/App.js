import { Routes,Route } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Service from "./component/pages/Service";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/pages/Footer";
function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App;