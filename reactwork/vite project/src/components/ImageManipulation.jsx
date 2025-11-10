import { useState } from "react";
import img from "./cat.jpg";

function Imagemanipulation() {
  const [imgHeight, setImgHeight] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [imgAngle, setImgAngle] = useState(0);

  function imgRotate() {
    setImgAngle(imgAngle + 30);
  }

  function setColor() {
    setRed(Math.random() * 255);
    setGreen(Math.random() * 255);
    setBlue(Math.random() * 255);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Image Manipulation</h2>

      <div
        style={{
          margin: "20px auto",
          border: "2px solid black",
          width: "450px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'rgb(${red}, ${green}, ${blue})',
        }}
      >
        <img
          src={img}
          height={imgHeight}
          alt="sample"
          style={{
            transform: 'rotate(${imgAngle}deg)',
            transition: "all 0.5s ease",
          }}/>
      </div>

      <div>
        <button onClick={() => setImgHeight(imgHeight + 20)}>Increase Height</button>
        <button onClick={setColor}>Change Background Color</button>
        <button onClick={imgRotate}>Rotate Image</button>
      </div>
    </div>
  );
}

export default Imagemanipulation;