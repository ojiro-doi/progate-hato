import React, { useState } from "react";
import { Link } from "react-router-dom";
import piza from "./piza.png";

const InputFormBudget = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div className="container flex items-center flex-col">
      <img src={piza} className="absolute" />
      <div className="relative">
        <h1 className="text-5xl text-center mt-60 mb-4 margr">
          行き先は
          <span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="border-2 border-gray-300 rounded-md p-2 flex-grow text-center"
              placeholder="ランダム"
            />
          </span>
          で決める！
        </h1>
        {/*<form className="text-center mb-4">
          <div className="flex justify-between items-center w-64 mx-auto">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="border-2 border-gray-300 rounded-md p-2 flex-grow text-center"
              placeholder="予算を入力してください"
            />
            <span>円</span>
          </div>
  </form>*/}
        <h1 className="text-5xl text-center mt-20 mb-4 margr">
          場所は
          <span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="border-2 border-gray-200 rounded-md p-2 flex-grow text-center"
              placeholder="ランダム"
            />
          </span>
          です！
        </h1>
        <div className="flex justify-center">
          <div className="bg-red-500 hover:bg-green-700 text-5xl text-white text-center px-10 py-5 mx-20 my-10 inline-block rounded-lg">
            <button>Start</button>
          </div>
          <div className="bg-red-500 hover:bg-green-700 text-5xl text-white text-center px-10 py-5 mx-20 my-10 inline-block rounded-lg">
            <button>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFormBudget;
