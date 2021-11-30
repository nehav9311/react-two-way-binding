import { useState } from "react";
import React from "react";

const TwoWay = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      number: enteredNumber
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add name"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <input
          type="number"
          placeholder="Add number"
          value={enteredNumber}
          onChange={numberChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TwoWay;
