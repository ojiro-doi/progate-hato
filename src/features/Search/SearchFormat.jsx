import React, { useState } from "react";
import RandomDisplay from "./RouletteDisplay";
import SelectList from "./SelectList";
import  RouletteDisplay  from "./RouletteDisplay";

const InputFormBudget = () => {
  const [option, setOption] = useState("");

  return (
    <div className="container">
      <h1 className="text-4xl font-mono mt-20 ml-20">
        行き先は
        <span>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
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
      <h1 className="text-7xl font-mono mt-10 mb-10 text-center">
        君の旅行先は！？
      </h1>
      <div className="ml-20 mb-10 flex justify-center"></div>
        {option === "ランダム" && <RouletteDisplay />}
        {option === "自分の運命は自分で決めるものだ" && <SelectList></SelectList>}
    </div>
  );
};

export default InputFormBudget;
