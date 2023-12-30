import React, { useState } from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoCashSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import img10 from "../../../assets/img10.svg";

export const Package = () => {
  const [addMonPackage, setaddMonPackage] = useState(false);
  const [MonPackDetails, setMonPackDetails] = useState(false);
  const [addYearPackage, setaddYearPackage] = useState(false);
  const [YearPackDetails, setYearPackDetails] = useState(false);

  const myArrowFunction = ( values, year ) => {
    const p = values;
    const t = year;
    const r = 20;
    const n = 12;
    const sip =
      p *
      (((Math.pow(1 + r / (100 * n), n * t) - 1) / (r / (100 * n))) *
        (1 + r / (100 * n)));
        return Math.round(sip - p * n * t);
  }


  return (
    <div className=" px-8 py-5">
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold py-5">Monthly Package</h1>
        <button
          className=" flex justify-center items-center space-x-3 bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
          onClick={() => setaddMonPackage(true)}
        >
          <h1>
            <FaPlus />
          </h1>
          <h1>Add Package</h1>
        </button>
      </div>
      <div className=" grid grid-cols-3 gap-10">
        <div className=" w-full shadow-md flex flex-col justify-between items-start bg-gray-50 rounded-md">
          <div className=" w-full flex justify-between items-center bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900  rounded-t-md">
            <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
              305/<span className=" text-[12px]">Per Month</span>
            </h1>
            <h1 className="p-3 rounded-fullfont-semibold text-[28px] text-white hover:text-red-500 cursor-pointer transform transition duration-300 hover:scale-125">
              <MdDelete />
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
          <div className=" w-full flex justify-between items-center p-3">
          <p className=" text-light-blue-800 cursor-pointer hover:font-semibold" onClick={()=>setMonPackDetails(true)}>More details</p>
            <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
              <h1>
                <MdModeEditOutline />
              </h1>
              <h1>Edit Now</h1>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold py-5">Annual Package</h1>
        <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
        onClick={()=>setaddYearPackage(true)}
        >
          <h1>
            <FaPlus />
          </h1>
          <h1>Add Package</h1>
        </button>
      </div>
      <div className=" grid grid-cols-3 gap-10">
        <div className=" w-full shadow-md flex flex-col justify-between items-start bg-gray-50 rounded-md">
          <div className=" w-full flex justify-between items-center bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 rounded-t-md">
            <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
              305
            </h1>
            <h1 className="p-3 rounded-fullfont-semibold text-[28px] text-white hover:text-red-500 cursor-pointer transform transition duration-300 hover:scale-125">
              <MdDelete />
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
          <div className=" w-full flex justify-between items-center p-3">
          <p className=" text-light-blue-800 cursor-pointer hover:font-semibold" >More details</p>
            <button className=" flex justify-center items-center space-x-3   bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
              <h1>
                <MdModeEditOutline />
              </h1>
              <h1>Edit Now</h1>
            </button>
          </div>
        </div>
      </div>
      {addMonPackage && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold">Add Monthly Package</h1>
            <form className="">
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
              <div className=" flex justify-center items-center space-x-5">
                <button className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105" onClick={()=>setaddMonPackage(false)}>
                <h1>Cancel</h1>
              </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                <h1>Save</h1>
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {addYearPackage && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold">Add Year Package</h1>
            <form className="">
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
              <div className=" flex justify-center items-center space-x-5">
                <button className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105" onClick={()=>setaddYearPackage(false)}>
                <h1>Cancel</h1>
              </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                <h1>Save</h1>
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {MonPackDetails && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <div className=" flex justify-between items-center">
              <h1 className=" font-medium text-[22px]">Start your SIP Monthly 500</h1>
              <button className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105" onClick={()=>setMonPackDetails(false)}>
                  <h1>Cancel</h1>
                </button>
            </div>
              <table className=" w-full text-center mt-5 ">
                {/* <thead className=" bg-[#1871cd] text-white"> */}
                  <tr className=" bg-[#1871cd] text-white py-4">
                    <th>Year</th>
                    <th>Yearly Invested Amount</th>
                    <th>Total Invested</th>
                    <th>Wealth Gained</th>
                    <th>Expected Amount</th>
                  </tr>
                {/* </thead> */}
                {/* <tbody className=""> */}
                  {[...Array(15)].map((_, index) => (
                      <tr key={index}>
                        <td>{2024 + index}</td>
                        <td>{500 * 12}</td>
                        <td>{500 * 12 * (index + 1 )}</td>
                        <td>{ myArrowFunction(500, (index + 1))}</td> 
                        <td className=" flex justify-center items-center"><BiRupee />{((500 * 12 * (index + 1 ))+(myArrowFunction(500, (index + 1))))}</td>
                      </tr>
                    ))}
                {/* </tbody> */}
                {/* <tfoot> */}
                  <tr>
                    <th>Footer 1</th>
                    <th>Footer 2</th>
                    <th>Footer 3</th>
                    <th>Footer 4</th>
                    <th>{[...Array(15)].map((_, index) => (500 * 12 * (index + 1 ) + myArrowFunction(500, (index + 1)))).reduce((a, b) => a + b, 0)}</th>
                  </tr>
                {/* </tfoot> */}
              </table>
          </div>
        </div>
      )}
    </div>
  );
};
