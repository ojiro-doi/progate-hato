import React, { useState } from "react";
import { Link } from "react-router-dom";
import piza from "./piza.png";

const InputFormBudget = () => {
  const [amount, setAmount] = useState("");
  const [option, setOption] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div className="container flex items-center flex-col">
      <img src={piza} className="absolute" />
      <div className="relative">
        <h1 className="text-5xl text-center mt-40 mb-4 margr">
          行き先は
          <select value={option} onChange={e => setOption(e.target.value)}>
            <option value="ランダム" className="text-center">ランダム</option>
            <option value="リスト" className="text-center">リスト</option>
            <option value="質問">質問</option>
          </select>
          で決める！
        </h1>
        <div></div>
        <h1 className="text-5xl text-center mt-20 mb-4 margr">君の旅先は！？</h1>
        <div className="flex justify-center">
        </div>
      </div>
    </div>
  );
};

export default InputFormBudget;
