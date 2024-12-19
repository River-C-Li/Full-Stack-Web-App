import { useState } from "react";
import { carouselData } from "../data/carouselData.ts";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  function nextIndex() {
    if (index == carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function nextNextIndex() {
    if (index == 0) {
      setIndex(carouselData.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let picture = carouselData[index];
  return (
    <div >
      <h2 className="carouselTitle" style={{
        position: "relative",
        left: "200px",
        top: "100px",
        fontSize: "48px",
        width:"50%"
      }}>
        {picture.name}
        | {picture.trim}
      </h2>
      <div className="carouselPic" style={{  display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={nextNextIndex} style={{ backgroundColor: "black", border: "none" }}>
          <svg fill="white" width="35px" height="35px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 14.5c-.004.276-.224.504-.5.5h-26c-.66 0-.664-1 0-1h26c.282-.004.504.218.5.5zm-15 14c0 .45-.554.663-.854.354l-14-14c-.195-.196-.195-.512 0-.708l14-14c.426-.442 1.167.248.708.708L1.207 14.5l13.647 13.646c.097.095.146.22.146.354z" />
          </svg>
        </button>
        <img src={picture.imgUrl} />
        {/* <h3>
        ({index + 1} of {carouselData.length})
      </h3> */}
        <button onClick={nextIndex} style={{ backgroundColor: "black", border: "none" }}>
          <svg fill="white" width="35px" height="35px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 15.5c.004.276.224.504.5.5h26c.66 0 .664-1 0-1H.5c-.282-.004-.504.218-.5.5zm15 14c0 .45.554.663.854.354l14-14c.195-.195.195-.51 0-.707l-14-14c-.426-.443-1.167.248-.707.707L28.793 15.5 15.147 29.148c-.098.095-.147.218-.147.353z" />
          </svg>
        </button>
      </div>
      <p className="carouselDescript" style={{
        fontSize: "30px",
        color: "#919191"
      }}>{picture.description}</p>
    </div>
  );
}
