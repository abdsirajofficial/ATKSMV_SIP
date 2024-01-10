import React, { useState } from "react";
import img3 from "../assets/img7.svg";
import logo from "../assets/logo1.svg";

import { useNavigate } from "react-router-dom";
import { rigesterApi } from "../server/app";
import toast from "react-hot-toast";

const Register = () => {

  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [Aadhar, setAadhar] = useState("");
  const [Pan, setPan] = useState("");
  const [PrimaryNUmber, setPrimaryNUmber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Account, setAccount] = useState("");
  const [UPI_id, setUPI_id] = useState("");
  const [AccHOlderName, setAccHOlderName] = useState("");
  const [IFSC_code, setIFSC_code] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");


  //signUp api call
  const onSubmit = () => {

    const data = {
      name: Name,
      email: Email,
      password: Password,
      DOB: DOB,
      aadhar: Aadhar,
      pan: Pan,
      mobile: PrimaryNUmber,
      secondary_mobile: secondaryNumber,
      address: Address,
      account_no: Account,
      upi_id: UPI_id,
      account_holder: AccHOlderName,
      IFSC: IFSC_code,
    };

    if (
      Name === "" ||
      Email === "" ||
      Password === "" ||
      DOB === "" ||
      Aadhar === "" ||
      Pan === "" ||
      PrimaryNUmber === "" ||
      secondaryNumber === "" ||
      Address === "" ||
      Account === "" ||
      UPI_id === "" ||
      AccHOlderName === "" ||
      IFSC_code === "" ||
      ConfirmPassword === ""
    ) {
      toast.error("Please fill all required fields", {duration: 1500})
    } else {
      rigesterApi("user/signUp", data).then((res) => {
        if(res.status === 200) {
          toast.success(res.data.message, {duration: 1500})
          navigate("/login")
        }else{
          toast.error("Try agian later", {duration: 1500})
        }
      });
    }
  };

  return (
    <div className="w-full h-full md:flex justify-center items-center bg-[#3777FA]">
      <div className=" w-full md:w-1/2 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] ">
        <img className=" w-56 pb-10 pt-8 pl-5" src={logo} alt="" />
        <div className="flex flex-col space-y-10 justify-center items-center">
          <img className="" src={img3} alt="" />
        </div>
        <div className=" flex flex-col justify-center items-center text-white space-y-3">
          <h1 className=" text-[16px]">Expert in stock recommendation</h1>
          <h1 className="hidden sm:block sm:text-[10px] md:text-[14px] text-gray-200 ">
            Trade hassle-free in Stocks, Futures & Options and Currencies of
            NSE, BSE & MCX
          </h1>
        </div>
      </div>
      <div className="w-full h-full md:w-1/2 md:h-screen bg-white p-10 md:overflow-hidden md:overflow-y-scroll">
        <h1 className="text-[20px] font-semibold pb-4 text-center">
          Welcome to<span className=" text-[#3777fa]"> AKTSMV TRADERS</span>
        </h1>
        <div className=" flex flex-col" >
          <h1 className=" mb-4">Personal details</h1>
          <div className=" w-full h-full grid grid-cols-1 sm:grid-cols-2  gap-5">
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Email id
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Email id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Primary number
              </label>
              <input
                type="number"
                id="pnumber"
                name="pnumber"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Primary number"
                onChange={(e) => setPrimaryNUmber(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Date of birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Date of birth"
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Pan number
              </label>
              <input
                type="text"
                id="pan"
                name="Pan"
                className="mt-1 p-3 w-full border-2 rounded-md uppercase"
                placeholder="Pan Number"
                onChange={(e) => setPan(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Aadhar number
              </label>
              <input
                type="number"
                id="aadhar"
                name="aadhar"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Aadhar number"
                onChange={(e) => setAadhar(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Secondary number
              </label>
              <input
                type="number"
                id="snumber"
                name="snumber"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Seconday number"
                onChange={(e) => setSecondaryNumber(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Address"
                onChange={(e)=>setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>
          <h1 className=" my-4">Account details</h1>
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Account holder name
              </label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Name"
                onChange={(e) => setAccHOlderName(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Account Number
              </label>
              <input
                type="number"
                id="account no"
                name="account no"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Account number"
                onChange={(e)=>setAccount(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                IFSC code
              </label>
              <input
                type="text"
                id="ifsc"
                name="ifsc"
                className="mt-1 p-3 w-full border-2 rounded-md uppercase"
                placeholder="IFSC CODE"
                onChange={(e)=>setIFSC_code(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                UPI ID
              </label>
              <input
                type="text"
                id="upi"
                name="upi"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="UPI ID "
                onChange={(e) => setUPI_id(e.target.value)}
              />
            </div>
          </div>

          <h1 className=" my-4">Set Password</h1>
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="Confirm_password"
                name="Confirm_password"
                className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                placeholder="Confirm Password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onSubmit();
                  }
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#3777FA] text-white p-3 rounded-md hover:bg-[#334e8e] w-full shadow-md mt-10"
            onClick={()=>onSubmit()}
          >
            Sign up
          </button>
          <h1 className="text-sm font-medium text-gray-600 mt-8 text-center mb-[15px]">
            Already have a account?{" "}
            <span
              className=" text-[#3777fa] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;