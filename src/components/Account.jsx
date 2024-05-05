import React, { useContext } from "react";
import { ValuesContext } from "../Context/ValuesProvider";

const Account = () => {
  // useContext からオブジェクトをそのまま受け取る
  const context = useContext(ValuesContext);

  // 分割代入を使用して values と setValues を取り出す
  const { values, setValues } = context;

  const handleAmountChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      amount: event.target.value,
    }));
  };

  const handleDaysChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      days: event.target.value,
    }));
  };

  const handlePeopleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      people: event.target.value,
    }));
  };

  return (
    <div className="account_compornents">
      <div className="account_input w-1/2 mt-20 ml-20 my-5">
        <h1 className="text-5xl border-b border-blue-400 font-mono pb-1 my-5">
          予算
        </h1>
        <select
          name="amount"
          value={values.amount}
          onChange={handleAmountChange}
          className="border-2 border-gray-300 rounded-md p-2 mt-2 my-10 flex-grow text-center"
        >
          <option>¥100,000（ドミノピザ 10枚分）</option>
          <option>¥200,000（ドミノピザ 20枚分）</option>
          <option>¥300,000（ドミノピザ 30枚分）</option>
          <option>¥400,000（ドミノピザ 40枚分）</option>
          <option>¥500,000（ドミノピザ 50枚分）</option>
          <option>¥600,000（ドミノピザ 60枚分）</option>
          <option>¥700,000以上（ドミノピザ 70枚分以上）</option>
        </select>
        <h1 className="text-5xl border-b border-blue-400 font-mono pb-1 my-5">
          宿泊日数
        </h1>
        <select
          name="days"
          value={values.days}
          onChange={handleDaysChange}
          className="border-2 border-gray-300 rounded-md p-2 mt-2 mb-10 flex-grow text-center"
        >
          <option>1泊</option>
          <option>2泊</option>
          <option>3泊</option>
          <option>4泊</option>
          <option>5泊</option>
          <option>6泊</option>
          <option>7泊以上</option>
        </select>
        <h1 className="text-5xl border-b border-blue-400 font-mono pb-1 my-5">
          人数
        </h1>
        <select
          name="people"
          value={values.people}
          onChange={handlePeopleChange}
          className="border-2 border-gray-300 rounded-md p-2 flex-grow text-center"
        >
          <option>1人</option>
          <option>2人</option>
          <option>3人</option>
          <option>4人</option>
          <option>5人</option>
          <option>6人</option>
          <option>7人以上</option>
        </select>
      </div>
    </div>
  );
};

export default Account;
