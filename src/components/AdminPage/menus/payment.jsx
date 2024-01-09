import React, { useEffect, useState } from "react";
import { delWithrawalReq, gettransactionApi } from "../../../server/app";
import { MdDelete } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import toast from "react-hot-toast";

export const Payment = () => {
  const [transaction, settransaction] = useState([]);

  useEffect(() => {
    gettransactionApi("admin/transaction", settransaction);
  }, []);

  //   const deleteUser = (id) => {
  //     delUserApi(`admin/deleteUser?userId=${id}`,).then((res)=>{
  //       if(res.status === 200){
  //         toast.success(res.data.msg, {duration: 1500})
  //       }
  //     })
  //   }

  const accepReq = (id) => {
    delWithrawalReq("admin/editTransaction", { id: id }).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.msg, { duration: 1500 });
        gettransactionApi("admin/transaction", settransaction);
      }
    });
  };

  return (
    <div className=" px-8 py-5">
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-white mb-5">
        {/* <p className=" flex justify-center items-center">SI No</p> */}
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Status</p>
        <p className=" flex justify-center items-center">Action</p>
      </div>
      {transaction.length === 0 ? (
        <div className="text-center py-4 text-gray-600">
          No Transactions are available
        </div>
      ) : (
        transaction.map((data, index) => (
          <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-white border-b-2">
            {/* <p className=" flex justify-center items-center">{index +1}</p> */}
            <p className=" flex justify-center items-center">{data.userId}</p>
            <p className=" flex justify-center items-center">{data.name}</p>
            <p className=" flex justify-center items-center">{data.amount}</p>
            <p className=" flex justify-center items-center">
              {data.updatedOn.slice(0, 10)}
            </p>
            <p className=" flex justify-center items-center ">
              <p
                className={`px-3.5 rounded-full border-2 py-0.5 ${
                  data.status === "Success"
                    ? "bg-green-50 border-green-200"
                    : "bg-yellow-50 border-yellow-200"
                }`}
              >
                {data.status}
              </p>
            </p>
            {data.status === "Pending" && (
              <p className=" flex justify-center items-center space-x-5">
                <button
                  className=" flex  justify-center items-center space-x-2 bg-red-600 px-2 py-1.5 rounded-lg text-white hover:scale-110"
                  //   onClick={() => deleteUser(user.userId)}
                >
                  <p className=" text-[20px]">
                    <MdDelete />
                  </p>
                  <p>Delete</p>
                </button>
                <button
                  className=" flex  justify-center items-center space-x-2 bg-green-600 px-3 py-1.5 rounded-lg text-white hover:scale-110"
                  onClick={() => accepReq(data.id)}
                >
                  <p className=" text-[20px]">
                    <VscWorkspaceTrusted />
                  </p>
                  <p>Accept</p>
                </button>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};
