import React, { useState } from "react";
import SelectList from "./SelectList";
import RouletteDisplay from "./RouletteDisplay";
import ChatSearch from "./ChatSearch";
import { motion } from "framer-motion";

const InputFormBudget = () => {
  const [option, setOption] = useState("ランダム");

  const words = "君の旅行先は！？";
  const word = words.split("");

  //文字モーション
  const textanimate = word.map((word, index) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.05 }}
        key={index}
      >
        {word}
      </motion.div>
    );
  });

  return (
    <div className="container_search">
      <div>
        <h1 className="text-5xl font-mono ml-20 my-20">
          行き先は
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)} // e.target.valueを使用して選択された値を更新
            className="text-4xl border-2 border-gray-300 rounded-md mx-5 p-2"
          >
            <option value="ランダム">ランダム</option>
            <option value="自分の運命は自分で決めるものだ">
              自分の運命は自分で決めるものだ
            </option>
            <option value="question">質問</option>
          </select>
          で決める！
        </h1>
        <div className="flex justify-center text-7xl font-mono mt-10 mb-10">
          {textanimate}
        </div>
      </div>
      <div className="mb-10 flex justify-center">
        {option === "ランダム" && <RouletteDisplay />}
        {option === "自分の運命は自分で決めるものだ" && <SelectList />}
        {option === "question" && <ChatSearch />}
      </div>
    </div>
  );
};

export default InputFormBudget;
