import React, { useState } from "react";
import { Link } from "react-router-dom";
import piza from "../assets/piza.png";

const InputFormBudget = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div className="container">
      <h1 className="text-5xl font-mono mt-20 ml-20">
        行き先は
        <span>
          <select
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="border-2 border-gray-300 rounded-md p-2 mx-5 mb-20 flex-grow text-center"
            placeholder="ランダム"
          >
            <option>ランダム</option>
            <option>自分の運命は自分で決めるものだ</option>
            <option>質問</option>
          </select>
        </span>
        で決める！
      </h1>
      <h1 className="text-8xl font-mono mt-20 mb-10 text-center">
        君の旅行先は！？
      </h1>
      <div className="ml-20 mb-10 flex justify-center">
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className="border-2 border-gray-200 text-5xl rounded-md p-2 mx-auto flex-grow text-center"
          placeholder="ランダム"
        />
      </div>
      <div className="ml-20 flex justify-center">
        <div className="bg-amber-500 hover:bg-green-700 text-5xl text-white text-center px-10 py-5 mx-20 my-10 inline-block rounded-full">
          <button>Start / Stop</button>
        </div>
      </div>
    </div>
  );
};

export default InputFormBudget;
