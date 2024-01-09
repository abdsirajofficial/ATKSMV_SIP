import React, { useEffect, useState } from "react";
import { getWithdrawal, gettransactionApi } from "../../../server/app";

export const History = () => {
  const [transaction, settransaction] = useState([]);

  useEffect(() => {
    gettransactionApi(
      `user/transaction?userId=${localStorage.getItem("userid")}`,
      settransaction
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
      {transaction && transaction.length > 0 ? (
        transaction.map((data, index) => (
          <div
            className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3 text-[14px] bg-white border-b-2"
            key={index}
          >
            {/* <p className="flex justify-center items-center">{index + 1}</p> */}
            <p className="flex justify-center items-center">{data.userId}</p>
            <p className="flex justify-center items-center">{data.name}</p>
            <p className="flex justify-center items-center">{data.amount}</p>
            <p className="flex justify-center items-center">
              {data.updatedOn.slice(0, 10)}
            </p>
            <p className="flex justify-center items-center">
              <p
                className={`${
                  data.status === "Success"
                    ? "bg-green-50 border-green-200"
                    : "bg-yellow-200 border-yellow-500"
                } px-3.5 rounded-full border-2 py-0.5`}
              >
                {data.status}
              </p>
            </p>
          </div>
        ))
      ) : (
        <div className="text-center py-4 text-gray-600">
          No transactions history available
        </div>
      )}
    </div>
  );
};
