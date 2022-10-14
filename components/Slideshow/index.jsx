import React from "react";
import { Slide } from "react-slideshow-image";

export function SlideShowImage() {
  const images = ["/logo.svg", "/logo.svg", "/logo.svg"];
  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: false,
    scale: false,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    width: "20%",
    prevArrow: (
      <div
        style={{
          display: "none",
        }}
      ></div>
    ),
    nextArrow: (
      <div
        style={{
          display: "none",
        }}
      ></div>
    ),
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", marginBottom: "200px" ,marginTop:"50px"}}>
      <Slide {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={style.image} className="flex">
            <img style={style.imageChild} src={each} />
            <img style={style.imageChild} src={each} />
            <img style={style.imageChild} src={each} />
            <img style={style.imageChild} src={each} />
            <img style={style.imageChild} src={each} />
          </div>
        ))}
      </Slide>
    </div>
  );
}
const style = {
  image: {
    width: "20%",
  },
  imageChild: {
    width: "100%",
  },
};
