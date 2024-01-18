import React, { useState } from "react";
import img3 from "../assets/img7.svg";
import logo from "../assets/logo1.svg";

import { useNavigate } from "react-router-dom";
import { registerApi } from "../server/app";
import toast from "react-hot-toast";
import loadingIcon from "../assets/loading.svg";

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
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false)

  //signUp api call
  const onSubmit = () => {
    setLoading(true);

    if(ConfirmPassword !== Password){
      setLoading(false);
      toast.error('Both password not same')
      return
     
    }

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
      PrimaryNUmber.length < 9 ||
      Account === "" ||
      AccHOlderName === "" ||
      IFSC_code === "" ||
      ConfirmPassword === ""
    ) {
      toast.error("Please fill all required fields", { duration: 1500 });
      setLoading(false);
    } else {
      registerApi("user/signUp", data, setLoading).then((res) => {
        if (res?.status === 200) {
          toast.success(res.data.message, { duration: 1500 });
          setLoading(false);
          setOpenPopup(true)
        } else {
          setLoading(false);
          toast.error("Try agian later", { duration: 1500 });
        }
      });
    }
  };

  return (
    <div className=" w-full h-screen bg-black flex flex-col justify-end items-center">
      <div className="w-full h-full overflow-y-auto flex flex-col  md:flex-row relative justify-start md:justify-center items-center bg-gradient-to-b from-blue-500 to-[#3777FA]">
        <div className=" w-full md:w-1/2 pb-10 sm:p-0 sm:h-full bg-gradient-to-b from-blue-500 to-[#3777FA] ">
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
        <div className="w-full grow md:w-1/2 md:h-screen bg-white p-10 md:overflow-hidden md:overflow-y-scroll">
          <h1 className="text-[20px] font-semibold pb-4 text-center">
            Welcome to<span className=" text-[#3777fa]"> AKTSMV TRADERS</span>
          </h1>
          <div className=" flex flex-col">
            <h1 className=" mb-4">Personal details</h1>
            <div className=" w-full h-full grid grid-cols-1 sm:grid-cols-2  gap-5">
              <div className="">
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Name
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
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
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Email id
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
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
                <label className="text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Primary number
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </label>
                <input
                  type="number"
                  id="pnumber"
                  name="pnumber"
                  className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                  placeholder="Primary number"
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, "");
                    setPrimaryNUmber(newValue.slice(0, 10));
                    e.target.value = newValue.slice(0, 10);
                  }}
                />
              </div>
              <div className="">
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Date of birth
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
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
                <label className="text-sm font-medium text-gray-600">
                  Pan number
                </label>
                <input
                  type="text"
                  id="pan"
                  name="Pan"
                  pattern="[A-Za-z0-9]{10}" // Regular expression for 10 alphanumeric characters
                  maxLength="10" // Limit the maximum length to 10 characters
                  className="mt-1 p-3 w-full border-2 rounded-md uppercase"
                  placeholder="Pan Number"
                  onChange={(e) => {
                    const value = e.target.value.toUpperCase(); // Convert input to uppercase
                    setPan(value);
                  }}
                  title="Please enter 10 alphanumeric characters." // Display a tooltip for invalid input
                />
              </div>

              <div className="">
                <label className="text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Aadhar number
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </label>
                <input
                  type="text" // Change type to text
                  id="aadhar"
                  name="aadhar"
                  className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                  placeholder="Aadhar number"
                  onChange={(e) => {
                    // Remove all non-numeric characters
                    const newValue = e.target.value.replace(/[^0-9]/g, "");

                    // Get the first 12 digits and set them as the formatted value
                    const formattedValue = newValue.slice(0, 12);

                    // Update the state with the formatted value
                    setAadhar(formattedValue);

                    // Update the input's value to display the formatted value
                    e.target.value = formattedValue;
                  }}
                />
              </div>
              <div className="">
                <label className="text-sm font-medium text-gray-600">
                  Secondary number
                </label>
                <input
                  type="number"
                  id="snumber"
                  name="snumber"
                  className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                  placeholder="Secondary number"
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, "");
                    setSecondaryNumber(newValue.slice(0, 10));
                    e.target.value = newValue.slice(0, 10);
                  }}
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
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
            <h1 className=" my-4">Account details</h1>
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="">
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Account holder name
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
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
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Account Number
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </label>
                <input
                  type="number"
                  id="account no"
                  name="account no"
                  className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                  placeholder="Account number"
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>
              <div className="">
                <label className="text-sm font-medium text-gray-600 flex gap-1 items-center">
                  IFSC code
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </label>
                <input
                  type="text"
                  id="ifsc"
                  name="ifsc"
                  pattern="[A-Za-z0-9]{11}" // Regular expression for 11 alphanumeric characters
                  maxLength="11" // Limit the maximum length to 11 characters
                  className="mt-1 p-3 w-full border-2 rounded-md uppercase"
                  placeholder="IFSC CODE"
                  onChange={(e) => {
                    const value = e.target.value.toUpperCase(); // Convert input to uppercase
                    setIFSC_code(value);
                  }}
                  title="Please enter 11 alphanumeric characters." // Tooltip for invalid input
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
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Password
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
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
                <label className=" text-sm font-medium text-gray-600 flex gap-1 items-center">
                  Confirm Password
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </label>
                <input
                  type="password"
                  id="Confirm_password"
                  name="Confirm_password"
                  className="mt-1 p-3 w-full border-2 rounded-md shadow-sm"
                  placeholder="Confirm Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#3777FA] text-white p-3 rounded-md flex justify-center space-x-3 items-center hover:bg-[#334e8e] w-full shadow-md mt-10"
              onClick={() => onSubmit()}
            >
              <p>Sign up</p>
              {loading && <img src={loadingIcon} alt="no img" className=" w-5" />}
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

      {
        openPopup && <div className={` border-1 w-full h-full border shadow-md bg-black bg-opacity-30 pt-10 pb-5 backdrop-blur-sm rounded-md absolute bottom-0 flex justify-start items-center flex-col `}>
          <div className={` border-1 w-[95%] h-[50%] md:w-[30%] border shadow-md bg-white pt-10 pb-5 rounded-md absolute bottom-0 flex justify-start items-center flex-col `}>
            <p className=" font-bold text-xl">Please take a screenshot</p>
            <div className=" w-full grow flex flex-col space-y-4 py-10 px-5">
              <div className=" w-full flex">
                <p className=" w-[30%] font-semibold">Email :</p>
                <p className=" w-[70%] font-medium h-14 overflow-y-hidden truncate flex items-start">{Email}</p>
              </div>
              <div className=" w-full flex">
                <p className=" w-[35%] font-semibold">Password :</p>
                <p className=" w-[70%]  font-medium">{Password}</p>
              </div>
            </div>
            <div className=" w-full flex justify-center">
              <div onClick={() => navigate("/login")} className=" bg-[#3777FA] w-[70%] h-12 rounded-lg flex justify-center items-center text-white text-lg font-medium">
                Back to login!
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Register;
