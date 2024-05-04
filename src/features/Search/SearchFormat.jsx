import React, { useState } from "react";
import SelectList from "./SelectList";
import  RouletteDisplay  from "./RouletteDisplay";
import  ChatSearch  from "./ChatSearch";

const InputFormBudget = () => {
  const [option, setOption] = useState("ランダム");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl md:text-3xl font-mono my-4 text-center">
        行き先は
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)} // e.target.valueを使用して選択された値を更新
          className="border-2 border-gray-300 rounded-md mx-2 p-2"
        >
          <option value="ランダム">ランダム</option>
          <option value="自分の運命は自分で決めるものだ">自分の運命は自分で決めるものだ</option>
          <option value="question">質問</option>
        </select>
        で決める！
      </h1>
      <h2 className="text-2xl md:text-5xl font-mono my-4 text-center">
        君の旅行先は！？
      </h2>
      <div className="ml-20 mb-10 flex justify-center"></div>
        {option === "ランダム" && <RouletteDisplay />}
        {option === "自分の運命は自分で決めるものだ" && <SelectList/>}
        {option === "question" && <ChatSearch />}
    </div>
  );
};

export default InputFormBudget;
