import React, { useState } from "react";

const Home = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div>
      <h1 className="text-5xl">さあ、旅先を探してみよう！</h1>
    </div>
  );
};

export default Home;
