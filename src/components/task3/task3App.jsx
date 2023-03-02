import React, { useState } from "react";
import ChildComponent from "./childComponent";
export default function Task3App() {
  const [color, setColor] = useState("blue");

  const handleColorChange = (color) => {
    setColor(color);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Task 3</h1>

        <h1
          style={{ backgroundColor: color }}
          className="text-center py-2 rounded-5 text-white"
        >
          Welcome to custom color
        </h1>
        <ChildComponent onColorChange={handleColorChange} />
      </div>
    </div>
  );
}
