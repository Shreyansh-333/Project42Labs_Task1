import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Carousel1 from "./components/Carousel1/carousel1";
import Carousel from "./components/Carousel/carousel";
import ImageSlider from "./components/Slider/slider";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer"
function App() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="sliderStyles">
      <ImageSlider slides={slides}/>
      </div>
      
      <Carousel />
      <div className="contentStyles">
        <Content/>
      </div>
      
      <Carousel1/>
      <Footer/>
    </div>
    
    

    // <>

    // {/* //   <Routes>
    // //     <Route path="/" element={<About />} />

    // //     <Route path="/home" element={<Home />} />
    // //   </Routes> */}
    // </>
  );
}

export default App;
