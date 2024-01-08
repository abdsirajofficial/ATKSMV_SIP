import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { acceptWithrawalReqApi, delWithrawalReq, getProfileApi, getWithdrawal } from "../../../server/app";

export const Withdrawal = () => {
  const [approved, setapproved] = useState(false);
  const [delId, setdelId] = useState();

  const [withdrawal , setwithdrawal] = useState([])
  const [profile, setprofile] = useState([])

  

  useEffect(() => {
    getWithdrawal("admin/withdrawRequest", setwithdrawal)
  },[])

 const acceptRequest = (userId, id) => {
  setapproved(true)
  setdelId(id)
  getProfileApi("admin/profile", {userId: userId}, setprofile);
}

const acceptReqData = ( userId, name, amount) => { 
  const data = {
    name: name,
    userId: userId,
    amount: amount
  }
  acceptWithrawalReqApi("admin/requestChange", data)
}

 const delWithrawReq = (id) => {
  delWithrawalReq("admin/deleteRequest",{userId:id})
 }  


  return (
    <div className=" px-8 py-5">
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-white mb-5">
        <p className=" flex justify-center items-center">SI No</p>
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Action</p>
      </div>
      {withdrawal.map((withdraw, index)=> (
      <div  className={`w-full h-auto grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-white shadow border-b border-neutral-400 ${index % 2 === 0 ? ' bg-gray-100' : ' bg-[#dbedfe]'}`}>
        <p className=" flex justify-center items-center">{index +1}</p>
        <p className=" flex justify-center items-center">{withdraw.userId}</p>
        <p className=" flex justify-center items-center">{withdraw.name}</p>
        <p className=" flex justify-center items-center">{withdraw.amount}</p>
        <p className=" flex justify-center items-center">{withdraw.updatedOn.slice(0, 10)}</p>
        <p className=" flex justify-center items-center ">
          <p
            className=" bg-green-300 px-3.5 rounded-full border-2 border-green-600 cursor-pointer"
            onClick={() => acceptRequest(withdraw.userId, withdraw.id)}
          >
            {withdraw.status}
          </p>
        </p>
      </div>
      ))}
      {approved && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold flex justify-start items-center">
              User <IoIosArrowForward />{" "}
              <sapn className="text-gray-600">{profile.userId}</sapn>
            </h1>
            <div className="">
              <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-gray-100 my-10">
                <p className=" flex justify-center items-center">Name</p>
                <p className=" flex justify-center items-center">Amount</p>
                <p className=" flex justify-center items-center">UPI ID</p>
                <p className=" flex justify-center items-center">Account Holder Name</p>
                <p className=" flex justify-center items-center">Account No</p>
                <p className=" flex justify-center items-center">IFSC Code</p>
              </div>
              <div className="w-full h-auto grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] my-10">
                <p className=" flex justify-center items-center">{profile.name}</p>
                <p className=" flex justify-center items-center">{profile.amount}</p>
                <p className=" flex justify-center items-center">{profile.upi_id}</p>
                <p className=" flex justify-center items-center">{profile.account_holder}</p>
                <p className=" flex justify-center items-center">{profile.account_no}</p>
                <p className=" flex justify-center items-center">{profile.IFSC}</p>
              </div>
              <div className=" flex justify-between items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-3 border-2 border-red-500  text-red-500 rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={()=>delWithrawReq(profile.userId)}
                >
                  <h1>Cancel the request</h1>
                </button>
                <div className=" flex justify-center items-center space-x-10">
                  <button
                    className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                    onClick={() => setapproved(false)}
                  >
                    <h1>Close</h1>
                  </button>
                  <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={()=>acceptReqData(profile.userId, profile.name, profile.amount)}
                  >
                    <h1>Save</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
