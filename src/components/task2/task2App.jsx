import React, { useState, useRef } from "react";

export default function Task2App() {
  const [currency, setCurrency] = useState(0);
  const selectRef = useRef();
  const inputRef = useRef();

  const handleInput = () => {
    const inputValue = inputRef.current.value;
    const currencyValue = selectRef.current.value;
    if (inputValue) {
      const calculatedValue =
        parseFloat(inputValue) * parseFloat(currencyValue);
      setCurrency(calculatedValue);
    } else {
      setCurrency(0);
    }
  };

  const handleCurrency = () => {
    handleInput();
  };

  const formattedCurrency = currency.toLocaleString("en-US", {
    style: "currency",
    currency: "ILS",
  });

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="my-5">Task 2.1</h1>

        <div className="text-center ">
          <h3>Enter the currency you want to exchange:</h3>
          <select
            onChange={handleCurrency}
            ref={selectRef}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={0.0} defaultValue>
              Select currency
            </option>
            <option value={3.62}>USD</option>
            <option value={3.86}>EURO</option>
            <option value={0.048}>RUB</option>
          </select>
          <h3>Enter the amount you want:</h3>
          <input onInput={handleInput} ref={inputRef} type="number" />
          <p>It will cost you {formattedCurrency} NIS</p>
        </div>
      </div>
    </div>
  );
}
