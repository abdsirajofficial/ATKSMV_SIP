import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDelete, MdModeEditOutline } from "react-icons/md";

export const Users = () => {
  const [editUser, seteditUser] = useState(false);

  return (
    <div className=" px-8 py-5">
      <div className=" flex justify-between items-center">
        <h1 className=" text-[22px] font-medium">31 Users</h1>
        <div className=" flex justify-center items-center space-x-5">
          <div className="bg-white rounded-md border ">
            <div className="pl-3.5 py-2.5 flex justify-start items-center space-x-3 bg-white rounded-md border">
              <IoIosSearch className="text-gray-400" />
              <input type="text" placeholder="Search by name" />
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-400 to-blue-700 px-5 py-2 rounded-md font-medium text-white transform transition duration-300 hover:scale-105">
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3 bg-white mt-5">
        <p className=" flex justify-center items-center">SI No</p>
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Date of Birth</p>
        <p className=" flex justify-center items-center">Sex</p>
        <p className=" flex justify-center items-center">Action</p>
      </div>
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3  text-[14px] bg-white mt-5">
        <p className=" flex justify-center items-center">01</p>
        <p className=" flex justify-center items-center">1001</p>
        <p className=" flex justify-center items-center">siraj</p>
        <p className=" flex justify-center items-center">21/10/2001</p>
        <p className=" flex justify-center items-center">Male</p>
        <p className=" flex justify-center items-center space-x-5">
          <h1
            className=" text-[20px] hover:text-blue-500 cursor-pointer"
            onClick={() => seteditUser(true)}
          >
            <MdModeEditOutline />
          </h1>
          <h1 className=" text-[20px] hover:text-red-500 cursor-pointer">
            <MdDelete />
          </h1>
        </p>
      </div>
      {editUser && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <div className="text-neutral-400 text-base font-semibold tracking-wide pb-5">
              Investment Amount :-
            </div>
            <div className=" flex space-x-16 justify-start items-center">
            <div className=" w-[350px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
                <div className=" flex flex-col justify-start items-start space-y-3">
                  <input
                    type="number"
                    value="305"
                    className="text-[#031635] font-semibold text-[22px] bg-transparent"
                  />
                  <h1 className=" text-[#031635] font-semibold">
                    Total Investment
                  </h1>
                </div>
                <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-blue-500">
                  <BsCashCoin />
                </div>
              </div>
              <div className=" w-[350px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
                <div className=" flex flex-col justify-start items-start space-y-3">
                  <input
                    type="number"
                    value="305"
                    className="text-[#031635] font-semibold text-[22px] bg-transparent"
                  />
                  <h1 className=" text-[#031635] font-semibold">
                    Total returns
                  </h1>
                </div>
                <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-blue-500">
                  <BsCashCoin />
                </div>
              </div>
              <div className=" w-[350px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
                <div className=" flex flex-col justify-center items-center space-y-3">
                  <h1 className=" text-[#031635] font-semibold text-[22px]">
                    305
                  </h1>
                  <h1 className=" text-[#031635] font-semibold">
                    Total Amount
                  </h1>
                </div>
                <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-blue-500">
                  <BsCashCoin />
                </div>
              </div>
              {/* <div className=" w-[350px] px-4 pb-2 pt-8 shadow-md  rounded-xl flex flex-col justify-between items-start bg-gradient-to-r from-blue-200 to-blue-500">
                <div className=" flex flex-col justify-center items-center space-y-3">
                  <h1 className=" text-[#031635] font-semibold text-[22px]">
                    305
                  </h1>
                  <h1 className=" text-[#031635] font-semibold">
                    Total amount
                  </h1>
                </div>
                <div className=" w-full flex justify-end items-center space-x-2">
                  <h1 className=" font-semibold text-[14px] text-[#031635]">
                    Withdraw
                  </h1>
                  <FaArrowRightLong className=" text-[#031635]" />
                </div>
              </div> */}
            </div>
            <div className="text-neutral-400 text-base font-semibold tracking-wide pt-10">
              Profile Details :-
            </div>
            <div className=" grid grid-cols-3 gap-5">
              <div>
                <div className="text-zinc-600 mt-5">User Id</div>
                <input
                  type="text"
                  value="10001"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Name
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value="siraj"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Email id
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="email"
                  value="sirajcsc2000@gmail.com"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Email id
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="email"
                  value="sirajcsc2000@gmail.com"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Primary Number
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value="8144228909"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Secondary Number
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value="7848751156"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Address
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <textarea
                  value="92/100, pallivasal street, elavanasur, tamilnadu, 607202"
                  className="w-[300px] h-[100px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Date of Birth
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <div>
                  <input
                    type="date"
                    value="2022-01-01"
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Sex
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <div>
                  <select
                    value="male"
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-neutral-400 text-base font-semibold tracking-wide mt-8">
              Account Details :-
            </div>
            <div className=" grid grid-cols-3">
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Account Holder Name
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value="siraj"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Account Number
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value="7848751156"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    IFSC Code
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value="7848751156"
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            <div className=" flex justify-start items-start space-x-5 py-10">
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => seteditUser(false)}
              >
                <h1>Cancel</h1>
              </button>
              <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                <h1>Save</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
