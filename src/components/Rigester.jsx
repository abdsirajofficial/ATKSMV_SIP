import React from "react";
import img3 from "../assets/img7.svg";
import logo from "../assets/logo1.svg";

import { useNavigate } from "react-router-dom";

const Rigester = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#3777FA]">
      <div className=" w-1/2 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] ">
        <img className=" w-56 pb-10 pt-8 pl-5" src={logo} alt="" />
        <div className="flex flex-col space-y-10 justify-center items-center">
          <img className="" src={img3} alt="" />
        </div>
        <div className=" flex flex-col justify-center items-center text-white space-y-3">
          <h1 className=" text-[16px]">Expert in stock recommendation</h1>
          <h1 className="text-[14px] text-gray-200">
            Trade hassle-free in Stocks, Futures & Options and Currencies of
            NSE, BSE & MCX
          </h1>
        </div>
      </div>
      <div className=" w-1/2 h-screen bg-white p-10 overflow-hidden overflow-y-scroll">
        <h1 className="text-[20px] font-semibold pb-4 text-center">
          Welcome to<span className=" text-[#3777fa]"> AKTSMV TRADERS</span>
        </h1>
        <form className=" flex flex-col mt-5">
          <div className=" w-full flex justify-between items-center space-x-5 ">
            <div className=" w-full ">
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Primary number
                </label>
                <input
                  type="number"
                  id="pnumber"
                  name="pnumber"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Primary number"
                />
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Date of birth"
                />
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Account holder name
                </label>
                <input
                  type="text"
                  id="aname"
                  name="aname"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upi"
                  name="upi"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="UPI ID "
                />
              </div>
            </div>
            <div className=" w-full">
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Email id
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Email id"
                />
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                 Secondary number
                </label>
                <input
                  type="number"
                  id="snumber"
                  name="snumber"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Seconday number"
                />
              </div>
              <div className=" mb-4">
              <label className="block text-sm font-medium text-gray-600">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  IFSC code
                </label>
                <input
                  type="text"
                  id="ifsc"
                  name="ifsc"
                  className="mt-1 p-3 w-full border-2 rounded-md uppercase"
                  placeholder="IFSC CODE"
                />
              </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Account Number
                </label>
                <input
                  type="number"
                  id="account no"
                  name="account no"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Account number"
                />
              </div>
            </div>
          </div>
              <div className=" mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="mt-1 p-3 w-full border-2 rounded-md"
                  placeholder="Address"
                ></textarea>
              </div>
          <button
            type="submit"
            className="bg-[#3777FA] text-white p-3 rounded-md hover:bg-[#334e8e] w-full shadow-md"
          >
            Sign up
          </button>
          <h1 className="text-sm font-medium text-gray-600 mt-8 text-center">
            Already have a account?{" "}
            <span
              className=" text-[#3777fa] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Rigester;
