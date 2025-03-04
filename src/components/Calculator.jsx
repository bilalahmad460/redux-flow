import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  const inputElemntRef = useRef(null);
  const dispatch = useDispatch();
  //const subscriber = useSelector((state) => console.log("state", state.count));
  const subscriber = useSelector((state) => state.count);
  console.log("subscriber", subscriber);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleAddtion = () => {
    dispatch({ type: "addition", payload: inputElemntRef.current.value });
    inputElemntRef.current.value = "";
  };
  console.log("inputElemntRef", inputElemntRef?.current?.value);
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Calculation</h1>
        <div className="pt-5">
          <label className="label text-bold">Value: {subscriber}</label>
        </div>
        <div className="row">
          <button
            className="btn btn-primary btn-lg mt-3 col-md-2"
            type="button"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="btn btn-danger btn-lg mt-3 ms-3 col-md-2"
            type="button"
          >
            -
          </button>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control mt-3"
              ref={inputElemntRef}
            />
          </div>
          <button
            className="btn btn-success btn-lg col-md-2"
            type="button"
            onClick={handleAddtion}
          >
            addition
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
