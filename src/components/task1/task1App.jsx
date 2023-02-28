import React, { useState } from "react";

export default function Task1App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Task 1</h1>

        <div className="text-center ">
          <h4 className="my-4">
            Counter is: <span className="fw-bold text-success"> {counter}</span>
          </h4>

          <button className="btn btn-outline-primary"> +</button>
          <button className="ms-4 btn btn-primary"> -</button>
        </div>
      </div>
    </div>
  );
}
