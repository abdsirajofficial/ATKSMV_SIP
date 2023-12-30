import React, { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaArrowRightLong, FaLeaf } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoCashSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import img10 from "../../../assets/img10.svg";

export const Dashboard = () => {

  const [withdrawalReq, setwithrawalReq] = useState(false);
  const [monInvestment, setmonInvestment] = useState(false);
  const [yearInvestment, setyearInvestment] = useState(false);

  return (
    <div className=" px-8 py-5">
      <div className=" flex space-x-16 justify-start items-center">
        <div className=" w-[350px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
          {/* <div className=" w-[350px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gray-50"> */}
          <div className=" flex flex-col justify-center items-center space-y-3">
            <h1 className=" text-[#031635] font-semibold text-[22px]">305</h1>
            <h1 className=" text-[#031635] font-semibold">Total investment</h1>
          </div>
          <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-red-">
            <BsCashCoin />
          </div>
        </div>
        <div className=" w-[350px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
          <div className=" flex flex-col justify-center items-center space-y-3">
            <h1 className=" text-[#031635] font-semibold text-[22px]">305</h1>
            <h1 className=" text-[#031635] font-semibold">Total returns</h1>
          </div>
          <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-blue-500">
            <BsCashCoin />
          </div>
        </div>
        <div className=" w-[350px] px-4 pb-2 pt-8 shadow-md  rounded-xl flex flex-col justify-between items-start bg-gradient-to-r from-blue-200 to-blue-500">
          <div className=" flex flex-col justify-center items-center space-y-3">
            <h1 className=" text-[#031635] font-semibold text-[22px]">305</h1>
            <h1 className=" text-[#031635] font-semibold">Total amount</h1>
          </div>
          <div className=" w-full flex justify-end items-center space-x-2" onClick={() => setwithrawalReq(true)}>
            {/* <div className=" w-3 h-3 bg-green-500 rounded-full"></div> */}
            <h1
              className=" font-semibold text-[14px] text-[#031635] cursor-pointer">
              Withdraw
            </h1>
            <FaArrowRightLong className=" text-[#031635]" />
          </div>
        </div>
      </div>
      <h1 className=" font-semibold py-5">Monthly Package</h1>
      <div className=" grid grid-cols-3 gap-10">
        <div className=" w-full shadow-md flex flex-col justify-between items-start bg-gray-50 rounded-md">
          <div className=" w-full bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900  rounded-t-md">
            <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
              305/<span className=" text-[12px]">Per Month</span>
            </h1>
          </div>
          <div className=" w-full flex justify-start items-center">
            <div className=" w-1/2 flex flex-col justify-start items-start pl-3 py-3 space-y-2">
              <div className=" flex justify-center items-center space-x-3">
                <h1 className=" text-green-500 ">
                  <FaMoneyBill1Wave />
                </h1>
                <h1 className=" text-gray-800"> Returns up-to 13%</h1>
              </div>
              <div className=" flex justify-center items-center space-x-3">
                <h1 className=" text-gray-00 ">
                  <IoMdLock />
                </h1>
                <h1 className=" text-gray-800"> Tenure: 3 years</h1>
              </div>
              <div className=" flex justify-center items-center space-x-3">
                <h1 className=" text-[#ffc200] ">
                  <IoCashSharp />
                </h1>
                <h1 className=" text-gray-800">
                  {" "}
                  Total Amount : <span className=" font-semibold">10002</span>
                </h1>
              </div>
            </div>
            <div className=" w-1/2 flex flex-col justify-center items-center pl-3 py-3 space-y-2">
              <img src={img10} alt="" className=" w-32" />
            </div>
          </div>
          <div className=" w-full flex justify-between items-center space-x-3 p-3">
            <p className=" text-light-blue-800 cursor-pointer">More details</p>
            <button className=" bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105" onClick={()=>setyearInvestment(true)}>
              <h1>Invest Now</h1>
            </button>
          </div>
        </div> 
      </div>

      <h1 className=" font-semibold py-5">Annual Package</h1>
      <div className=" grid grid-cols-3 gap-10">
        <div className=" w-full shadow-md flex flex-col justify-between items-start bg-gray-50 rounded-md">
          <div className=" w-full bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900  rounded-t-md">
            <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
              305
            </h1>
          </div>
          <div className=" w-full flex justify-start items-center">
            <div className=" w-1/2 flex flex-col justify-start items-start pl-3 py-3 space-y-2">
              <div className=" flex justify-center items-center space-x-3">
                <h1 className=" text-green-500 ">
                  <FaMoneyBill1Wave />
                </h1>
                <h1 className=" text-gray-800"> Returns up-to 13%</h1>
              </div>
              <div className=" flex justify-center items-center space-x-3">
                <h1 className=" text-gray-00 ">
                  <IoMdLock />
                </h1>
                <h1 className=" text-gray-800"> Tenure: 3 years</h1>
              </div>
              <div className=" flex justify-center items-center space-x-3">
                <h1 className=" text-[#ffc200] ">
                  <IoCashSharp />
                </h1>
                <h1 className=" text-gray-800">
                  {" "}
                  Total Amount : <span className=" font-semibold">10002</span>
                </h1>
              </div>
            </div>
            <div className=" w-1/2 flex flex-col justify-center items-center pl-3 py-3 space-y-2">
              <img src={img10} alt="" className=" w-32" />
            </div>
          </div>
          <div className=" w-full flex justify-between items-center space-x-3 p-3">
            <p className=" text-light-blue-800 cursor-pointer">More details</p>
            <button className=" bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105" onClick={()=>setyearInvestment(true)}>
              <h1>Invest Now</h1>
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-5 rounded-xl border-2 p-4 bg-[#f8f2f2]">
        <h1 className=" font-bold text-gray-600 uppercase text-[15px]">
          Disclaimer :-
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          Investments in securities market are subject to markecct risk, read
          all the documents care fully before investing. we collect retain and
          use your control information for logitimate. Business purpos only to
          contact you and to provide you information & latest our products &
          services.
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          ARQ is not an exchange approved product and any dispute related to
          this will not be dealt on the exchange platform.
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          We do not sell or rent your contact information to third parties.
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          Please note that by submitting the above. Mentioned details, you are
          authoringing us to call ISMS you even though you may be registered
          under DND. we shall call ISMS for a period of to months
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          For issues related to cyber attacks. Call us at{" "}
          <span className=" font-semibold">+91 8144228909</span> or Email us at{" "}
          <span className=" font-semibold">sirajcsc2000@gmail.com</span>
        </h1>
      </div>
      {withdrawalReq && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold pb-5">
              Check Your Account Destails :-
            </h1>
            <div className="">
              <div className="text-neutral-400 text-base font-semibold tracking-wide text-gray-700">
                Profile Details
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
              <div className=" py-5 space-x-2">
                <input
                  type="checkbox"
                  id="checkBoxForm"
                  name="checkBoxForm"
                  value="checkBoxForm"
                />
                <label for="checkBoxForm">
                  Make sure above the details are correct
                </label>
              </div>
              <div className=" flex justify-start items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => setwithrawalReq(false)}
                >
                  <h1>Cancel</h1>
                </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                  <h1>Save</h1>
                </button>
              </div>
              <div className=" mt-5 rounded-xl border-2 p-4 bg-[#f8f2f2]">
                <h1 className=" font-bold text-gray-600 uppercase text-[15px]">
                  Disclaimer :-
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  Investments in securities market are subject to markecct risk,
                  read all the documents care fully before investing. we collect
                  retain and use your control information for logitimate.
                  Business purpos only to contact you and to provide you
                  information & latest our products & services.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  ARQ is not an exchange approved product and any dispute
                  related to this will not be dealt on the exchange platform.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  We do not sell or rent your contact information to third
                  parties.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  Please note that by submitting the above. Mentioned details,
                  you are authoringing us to call ISMS you even though you may
                  be registered under DND. we shall call ISMS for a period of to
                  months
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  For issues related to cyber attacks. Call us at{" "}
                  <span className=" font-semibold">+91 8144228909</span> or
                  Email us at{" "}
                  <span className=" font-semibold">sirajcsc2000@gmail.com</span>
                </h1>
                <h1 className=" text-gray-600 mt-5">
                  Above the details any changes contact or call us at{" "}
                  <span className=" font-semibold">+91 8144228909</span> or
                  Email us at{" "}
                  <span className=" font-semibold">sirajcsc2000@gmail.com</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {monInvestment && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold pb-5">
              Check Your Account Destails :-
            </h1>
            <div className="">
              <div className="text-neutral-400 text-base font-semibold tracking-wide text-gray-700">
                Make Payment From This Account
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
                <div>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      UPI id
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="text"
                    value="8144228909@apl"
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div className="text-neutral-400 text-base font-semibold tracking-wide text-gray-700 pt-10 pb-3">
                Fill The Transaction Details
              </div>
              <p className=" text-gray-700">Please fill the payment sender account details after submit the details. we will process the your payment within 24 hours</p>
              <div className=" grid grid-cols-3 pt-5">
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
                      Transaction id
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
                
                <div>
                <h1 className=" pt-5">(or)</h1>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      UPI id
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="text"
                    value="8144228909@apl"
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div className=" pt-10 pb-5 space-x-2 ">
                <input
                  type="checkbox"
                  id="checkBoxForm"
                  name="checkBoxForm"
                  value="checkBoxForm"
                />
                <label for="checkBoxForm">
                  Make sure above the details are correct
                </label>
              </div>
              <div className=" flex justify-start items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => setmonInvestment(false)}
                >
                  <h1>Cancel</h1>
                </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                  <h1>Save</h1>
                </button>
              </div>
              <div className=" mt-5 rounded-xl border-2 p-4 bg-[#f8f2f2]">
                <h1 className=" font-bold text-gray-600 uppercase text-[15px]">
                  Disclaimer :-
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  Investments in securities market are subject to markecct risk,
                  read all the documents care fully before investing. we collect
                  retain and use your control information for logitimate.
                  Business purpos only to contact you and to provide you
                  information & latest our products & services.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  ARQ is not an exchange approved product and any dispute
                  related to this will not be dealt on the exchange platform.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  We do not sell or rent your contact information to third
                  parties.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  Please note that by submitting the above. Mentioned details,
                  you are authoringing us to call ISMS you even though you may
                  be registered under DND. we shall call ISMS for a period of to
                  months
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  For issues related to cyber attacks. Call us at{" "}
                  <span className=" font-semibold">+91 8144228909</span> or
                  Email us at{" "}
                  <span className=" font-semibold">sirajcsc2000@gmail.com</span>
                </h1>
                <h1 className=" text-gray-600 mt-5">
                  Above the details any changes contact or call us at{" "}
                  <span className=" font-semibold">+91 8144228909</span> or
                  Email us at{" "}
                  <span className=" font-semibold">sirajcsc2000@gmail.com</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {yearInvestment && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold pb-5">
              Check Your Account Destails :-
            </h1>
            <div className="">
              <div className="text-neutral-400 text-base font-semibold tracking-wide text-gray-700">
                Make Payment From This Account
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
                <div>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      UPI id
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="text"
                    value="8144228909@apl"
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div className="text-neutral-400 text-base font-semibold tracking-wide text-gray-700 pt-10 pb-3">
                Fill The Transaction Details
              </div>
              <p className=" text-gray-700">Please fill the payment sender account details after submit the details. we will process the your payment within 24 hours</p>
              <div className=" grid grid-cols-3 pt-5">
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
                      Transaction id
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
                
                <div>
                <h1 className=" pt-5">(or)</h1>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      UPI id
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="text"
                    value="8144228909@apl"
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
              <div className=" pt-10 pb-5 space-x-2 ">
                <input
                  type="checkbox"
                  id="checkBoxForm"
                  name="checkBoxForm"
                  value="checkBoxForm"
                />
                <label for="checkBoxForm">
                  Make sure above the details are correct
                </label>
              </div>
              <div className=" flex justify-start items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => setyearInvestment(false)}
                >
                  <h1>Cancel</h1>
                </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                  <h1>Save</h1>
                </button>
              </div>
              <div className=" mt-5 rounded-xl border-2 p-4 bg-[#f8f2f2]">
                <h1 className=" font-bold text-gray-600 uppercase text-[15px]">
                  Disclaimer :-
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  Investments in securities market are subject to markecct risk,
                  read all the documents care fully before investing. we collect
                  retain and use your control information for logitimate.
                  Business purpos only to contact you and to provide you
                  information & latest our products & services.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  ARQ is not an exchange approved product and any dispute
                  related to this will not be dealt on the exchange platform.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  We do not sell or rent your contact information to third
                  parties.
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  Please note that by submitting the above. Mentioned details,
                  you are authoringing us to call ISMS you even though you may
                  be registered under DND. we shall call ISMS for a period of to
                  months
                </h1>
                <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
                  <h1 className=" text-[18px]">
                    <RiArrowRightDoubleLine />
                  </h1>
                  For issues related to cyber attacks. Call us at{" "}
                  <span className=" font-semibold">+91 8144228909</span> or
                  Email us at{" "}
                  <span className=" font-semibold">sirajcsc2000@gmail.com</span>
                </h1>
                <h1 className=" text-gray-600 mt-5">
                  Above the details any changes contact or call us at{" "}
                  <span className=" font-semibold">+91 8144228909</span> or
                  Email us at{" "}
                  <span className=" font-semibold">sirajcsc2000@gmail.com</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
