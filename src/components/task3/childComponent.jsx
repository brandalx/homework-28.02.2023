import React, { useState } from "react";

export default function ChildComponent(props) {
  const [color, setColor] = useState("red");

  const handleClick = (color) => {
    setColor(color);
    props.onColorChange(color);
  };
  return (
    <div className="conatiner">
      <div className="text-center ">
        <h3>Child component</h3>
        <div className="row justify-content-center ">
          <div className="col-3 ">
            <button
              onClick={() => handleClick("red")}
              className="btn btn-danger "
            >
              Red
            </button>
          </div>
          <div className="col-3">
            <button
              onClick={() => handleClick("blue")}
              className="btn btn-primary"
            >
              Blue
            </button>
          </div>
          <div className="col-3">
            <button
              onClick={() => handleClick("green")}
              className="btn btn-success"
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
