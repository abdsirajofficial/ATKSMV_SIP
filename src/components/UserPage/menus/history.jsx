import React, { useEffect, useState } from "react";
import { getWithdrawal, gettransactionApi } from "../../../server/app";
import { Pagination } from "../../pagination";

export const History = () => {
  const [transaction, settransaction] = useState([]);
  const [Acitve, setAcitve] = useState(1)
  const [Total, setTotal] = useState()

  useEffect(() => {
    gettransactionApi(
      `user/transaction?userId=${localStorage.getItem("userid")}&page=${Acitve}&maxResults=8`, setTotal,
      settransaction
    );
  }, [Acitve]);

  return (
    <div className=" sm:px-8 py-5 w-full h-full flex flex-col">
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-white mb-5">
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Quantity</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Status</p>
      </div>
      <div className=" w-full grow  flex flex-col justify-between">
        <div>
            {transaction && transaction.length > 0 ? (
              transaction.map((data, index) => (
                <div
                  className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[12px] sm:text-[14px] bg-white border-b-2"
                  key={index}
                >
                  <p className="flex justify-center items-center">{data.userId}</p>
                  <p className="flex justify-center items-center">{data.name}</p>
                  <p className="flex justify-center items-center">{data.amount}</p>
                  <p className="flex justify-center items-center">{data.count}</p>
                  <p className="flex justify-center items-center">
                    {data.updatedOn.slice(0, 10)}
                  </p>
                  <p className="flex justify-center items-center">
                    <p
                      className={`${
                        data.status === "Success"
                          ? "bg-green-50 border-green-200"
                          : "bg-yellow-200 border-yellow-500"
                      } px- sm:px-3.5 rounded-full border-2 py-0.5`}
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
        {Total > 1 && (<div className=" w-full mt-5 justify-end items-end">
          <Pagination active={Acitve} setActive={setAcitve} total={Total}/>
        </div>)}   
      </div>
    </div>
  );
};
