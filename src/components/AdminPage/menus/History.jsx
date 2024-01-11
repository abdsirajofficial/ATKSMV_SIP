import React, { useEffect, useState } from "react";
import { gethistory } from "../../../server/app";
import { Pagination } from "../../pagination";

export const AdminHistory = () => {
  const [history, setHistory] = useState([]);
  const [Acitve, setAcitve] = useState(1)
  const [Total, setTotal] = useState()

  useEffect(() => {
    gethistory(`admin/history?page=${Acitve}&maxResults=9`, setTotal, setHistory);
  }, [Acitve]);


  return (
    <div className=" sm:px-8 py-5 w-full h-full flex flex-col">
      <div className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3 text-[12px]  sm:text-[14px] bg-white mb-5">
        <p className=" flex justify-center items-center">SI No</p>
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Status</p>
      </div>
      <div className=" w-full grow  flex flex-col justify-between">
        <div>
            {history.length === 0 ? (
              <div className="text-center py-4 text-gray-600">
                No history available
              </div>
            ) : (
              history.map((his, index) => (
                <div
                  className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center text-[12px] sm:text-[14px] rounded py-3 hover:bg-gray-100 bg-white border-b-2 "
                  key={index}
                >
                  <p className=" flex justify-center items-center">{index + 1}</p>
                  <p className=" flex justify-center items-center">{his.userId}</p>
                  <p className=" flex justify-center items-center">{his.amount}</p>
                  <p className=" flex justify-center items-center">
                    {his.createdOn.slice(0, 10)}
                  </p>
                  <p className=" flex justify-center items-center">
                    <p className="bg-green-300 px-1 sm:px-4 rounded-full border-2 border-green-600 cursor-pointer ">
                      {his.status}
                    </p>
                  </p>
                </div>
              ))
            )}
        </div>
        {Total > 1 && (<div className=" w-full mt-5 justify-end items-end">
          <Pagination active={Acitve} setActive={setAcitve} total={Total}/>
        </div>)}   
      </div>
    </div>
  );
};
