import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div>
      <h1 className="flex justify-center mt-20 mb-20 text-5xl">
        さあ、旅先を探してみよう！
      </h1>
      <div className="flex justify-center">
        <button className="h-20 w-50 m-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-lg text-sm text-emerald-950 md:font-bold px-5 py-1 text-center me-2 mb-2">
          <Link to="/Search">
            <span className="p-10">Search</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
