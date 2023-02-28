import React, { useState } from "react";

export default function Task1App() {
  let [counter, setCounter] = useState(0);

  const handleAdd = () => {
    if (counter > 4) {
      counter = -1;
    }
    setCounter(counter + 1);
  };
  const handleMinus = () => {
    if (counter < 1) {
      counter = 6;
    }
    setCounter(counter - 1);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Task 1</h1>

        <div className="text-center ">
          <h4 className="my-4">
            Counter is: <span className="fw-bold text-success"> {counter}</span>
          </h4>

          <button onClick={handleMinus} className="btn btn-outline-primary">
            {" "}
            -
          </button>
          <button onClick={handleAdd} className="ms-4 btn btn-primary">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
