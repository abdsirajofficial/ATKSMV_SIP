import React, { useEffect, useState } from "react";
import { delUserApi, delWithrawalReq, gettransactionApi } from "../../../server/app";
import { MdDelete } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import toast from "react-hot-toast";
import { IoWarning } from "react-icons/io5";
import { Pagination } from "../../pagination";

export const Payment = () => {
  const [transaction, settransaction] = useState([]);
  const [delConfirnMsg, setdelConfirnMsg] = useState(false);
  const [delUser, setdelUser] = useState({
    userId: "",
    id: "",
    userName: "",
    amount: "."
  });
  const [Acitve, setAcitve] = useState(1)
  const [Total, setTotal] = useState()

  useEffect(() => {
    gettransactionApi(`admin/transaction?page=${Acitve}&maxResults=7`, setTotal, settransaction);
  }, []);

    const deleteUser = (id) => {
      delUserApi(`admin/deleteTransaction?id=${parseInt(id)}`,).then((res)=>{
        if(res.status === 200){
          toast.success(res.data.msg, {duration: 1500})
          setdelConfirnMsg(false)
          gettransactionApi(`admin/transaction?page=${Acitve}&maxResults=7`, setTotal, settransaction);;
        }
      })
    }

    const deleteUserConfirm = (userId, id, name, amount) => {
      setdelUser({ userId: userId, id: id, userName: name, amount: amount });
      setdelConfirnMsg(true);
    };

  const accepReq = (id) => {
    delWithrawalReq("admin/editTransaction", { id: id }).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.msg, { duration: 1500 });
        gettransactionApi(`admin/transaction?page=${Acitve}&maxResults=7`, setTotal, settransaction);;
      }
    });
  };

  return (
    <div className=" sm:px-8 py-5 w-full h-full flex flex-col">
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[12px]  sm:text-[14px] bg-white mb-5">
        {/* <p className=" flex justify-center items-center">SI No</p> */}
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Status</p>
        <p className=" flex justify-center items-center">Action</p>
      </div>
      <div className=" w-full grow  flex flex-col justify-between">
        <div>
          {transaction.length === 0 ? (
            <div className="text-center py-4 text-gray-600">
              No Transactions are available
            </div>
          ) : (
            transaction.map((data, index) => (
              <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[10px]  sm:text-[14px] bg-white border-b-2">
                {/* <p className=" flex justify-center items-center">{index +1}</p> */}
                <p className=" flex justify-center items-center">{data.userId}</p>
                <p className=" flex justify-center items-center">{data.name}</p>
                <p className=" flex justify-center items-center">{data.amount}</p>
                <p className=" flex justify-center items-center">
                  {data.updatedOn.slice(0, 10)}
                </p>
                <p className=" flex justify-center items-center ">
                  <p
                    className={`sm:px-3.5 px-1 rounded-full border-2 py-0.5 ${
                      data.status === "Success"
                        ? "bg-green-50 border-green-200"
                        : "bg-yellow-50 border-yellow-200"
                    }`}
                  >
                    {data.status}
                  </p>
                </p>
                {data.status === "Pending" && (
                  <p className=" flex justify-center items-center md:space-x-5 space-x-1">
                    <button
                      className=" flex  justify-center items-center space-x-2 md:bg-red-600 md:px-2 py-1.5 rounded-lg md:text-white hover:scale-110 hover:text-red-600 md:hover:text-white"
                        // onClick={() => deleteUser(user.userId)}
                        onClick={() => deleteUserConfirm(data.userId, data.id, data.name, data.amount)}
                    >
                      <p className=" text-[20px]">
                        <MdDelete />
                      </p>
                      <p className="hidden md:block">Delete</p>
                    </button>
                    <button
                      className=" flex  justify-center items-center space-x-2 md:bg-green-600 md:px-3 py-1.5 rounded-lg md:text-white hover:scale-110 hover:text-green-600 md:hover:text-white"
                      onClick={() => accepReq(data.id)}
                    >
                      <p className=" text-[20px]">
                        <VscWorkspaceTrusted />
                      </p>
                      <p className="hidden md:block">Accept</p>
                    </button>
                  </p>
                )}
              </div>
            ))
          )}
        </div>
        {Total > 1 && (<div className=" w-full mt-5 justify-end items-end">
          <Pagination active={Acitve} setActive={setAcitve} total={Total}/>
        </div>)}   
      </div>
      {delConfirnMsg && (
        <div className=" fixed z-20 w-screen h-screen  top-0 right-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
          <div className="rounded-lg bg-white p-10 shadow-2xl antialiased flex flex-col justify-center items-center">
            <p className=" text-center text-[40px] text-red-500">
              <IoWarning></IoWarning>
            </p>
            <p className=" pt-2 font-[700px] text-[18px]">
              Delete {delUser.userName}
            </p>
            <p className=" text-gray-800  flex space-x-2 pt-5">
              <p>Are you sure you want to delete </p>
              <p className=" tracking text-black font-medium">
                {delUser.userId} {delUser.userName} {delUser.amount} ?
              </p>
            </p>
            <p>
              All the transaction records and withdrawal records will be deleted
              and{" "}
            </p>
            <p> It cannot be undone.</p>

            <div className=" w-full space-x-4 flex justify-center font-medium pt-5">
              <button
                className=" px-2 py-2 rounded-md bg-[#a2baf7] text-white hover:shadow-lg hover:shadow-[#a2baf7] transition-all duration-700"
                onClick={() => setdelConfirnMsg(false)}
              >
                CANCEL, KEEP MEMBER
              </button>
              <button
                className=" px-5 py-2 rounded-md text-white bg-red-700 hover:shadow-lg hover:shadow-red-200 transition-all duration-700"
                onClick={() => deleteUser(delUser.id)}
              >
                YES, DELETE USER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};
