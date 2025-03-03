import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  const dispatch = useDispatch();
  //const subscriber = useSelector((state) => console.log("state", state.count));
  const subscriber = useSelector((state) => state.count);
  console.log("subscriber", subscriber);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Calculation</h1>
        <div className="pt-5">
          <label className="label text-bold">Value: {subscriber}</label>
        </div>
        <button
          className="btn btn-primary btn-lg mt-3"
          type="button"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btn btn-danger btn-lg mt-3 ms-3"
          type="button"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Calculator;
