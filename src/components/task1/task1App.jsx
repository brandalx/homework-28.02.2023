import React, { useState } from "react";

export default function Task1App() {
  let [counter, setCounter] = useState(0);
  let [pathIndex, setPath] = useState(0);
  let path = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Task 1 - counter</h1>

        <div className="text-center ">
          <h4 className="my-4">
            Counter is: <span className="fw-bold text-success"> {counter}</span>
          </h4>

          <button
            onClick={() => {
              counter <= 0
                ? setCounter((counter = 5))
                : setCounter(counter - 1);
            }}
            className="btn btn-outline-primary"
          >
            {" "}
            -
          </button>
          <button
            onClick={() => {
              counter >= 5
                ? setCounter((counter = 0))
                : setCounter(counter + 1);
            }}
            className="ms-4 btn btn-primary"
          >
            +
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className="my-5">Task 2 - images list</h1>
        <div className="text-center ">
          <img className="w-100 rounded-4" src={path[pathIndex]} alt="fffff" />
          <div className="mt-4">
            <button
              onClick={() => {
                const nextIndex = pathIndex === 0 ? 3 : pathIndex - 1;
                setPath(nextIndex);
                console.log(nextIndex);
              }}
              className="btn btn-outline-primary"
            >
              Back
            </button>
            <button
              onClick={() => {
                const nextIndex = pathIndex === 3 ? 0 : pathIndex + 1;
                setPath(nextIndex);
                console.log(nextIndex);
              }}
              className="ms-4 btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
