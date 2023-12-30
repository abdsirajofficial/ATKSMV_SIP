import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export const Withdrawal = () => {
  const [approved, setapproved] = useState(false);
  return (
    <div className=" px-8 py-5">
      <div className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3  text-[14px] bg-white">
        <p className=" flex justify-center items-center">SI No</p>
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Action</p>
      </div>
      <div className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3  text-[14px] bg-white mt-5">
        <p className=" flex justify-center items-center">1</p>
        <p className=" flex justify-center items-center">1001</p>
        <p className=" flex justify-center items-center">1000</p>
        <p className=" flex justify-center items-center">27/12/2023</p>
        <p className=" flex justify-center items-center ">
          <p
            className=" bg-green-300 px-3.5 rounded-full border-2 border-green-600 cursor-pointer"
            onClick={() => setapproved(true)}
          >
            Approved
          </p>
        </p>
      </div>
      {approved && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold flex justify-start items-center">
              User <IoIosArrowForward />{" "}
              <sapn className="text-gray-600">1001</sapn>
            </h1>
            <div className="">
              <div className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3  text-[14px] bg-gray-100 my-10">
                <p className=" flex justify-center items-center">Name</p>
                <p className=" flex justify-center items-center">Amount</p>
                <p className=" flex justify-center items-center">UPI ID</p>
                <p className=" flex justify-center items-center">Account No</p>
                <p className=" flex justify-center items-center">IFSC Code</p>
              </div>
              <div className=" flex justify-start items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-3 border-2 border-red-500  text-red-500 rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                >
                  <h1>Cancel the request</h1>
                </button>
                <button
                  className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => setapproved(false)}
                >
                  <h1>Cancel</h1>
                </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                  <h1>Save</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
