import React, { useEffect, useState } from "react";
import { getWithdrawal } from "../../../server/app";

export const UserWithdrawal = () => {
  const [withdrawal, setwithdrawal] = useState([]);

  useEffect(() => {
    getWithdrawal(
      `user/withdrawRequest?userId=${localStorage.getItem("userid")}`,
      setwithdrawal
    );
  }, []);

  return (
    <div className=" px-8 py-5">
      <div className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3  text-[14px] bg-white mb-5">
        {/* <p className=" flex justify-center items-center">SI No</p> */}
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Status</p>
      </div>
      {withdrawal && withdrawal.length > 0 ? (
        withdrawal.map((withdraw, index) => (
          <div
            className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3 border-b-2 text-[14px] bg-white"
            key={index}
          >
            {/* <p className="flex justify-center items-center">{index + 1}</p> */}
            <p className="flex justify-center items-center">
              {withdraw.userId}
            </p>
            <p className="flex justify-center items-center">{withdraw.name}</p>
            <p className="flex justify-center items-center">
              {withdraw.amount}
            </p>
            <p className="flex justify-center items-center">
              {withdraw.updatedOn.slice(0, 10)}
            </p>
            <p className="flex justify-center items-center">
              <p className="bg-yellow-300 px-3.5 rounded-full border-2 border-yellow-600 py-1">
                {withdraw.status}
              </p>
            </p>
          </div>
        ))
      ) : (
        <div className="text-center py-4 text-gray-600">
          No withdrawal requests available
        </div>
      )}
    </div>
  );
};
