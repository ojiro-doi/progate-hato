import { Link } from "react-router-dom";
import { useState } from "react";
import "../Tailwind.css";

function Home() {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-3xl text-center mb-4">
          旅行の予算を入力してください
        </h1>
        <form className="text-center mb-4">
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
        </form>
        <div className="flex justify-center">
          <div className="bg-blue-500 hover:bg-blue-700 text-white text-center my-1.5 inline-block rounded-lg">
            <Link to={"/result"}>旅行先を探す</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
