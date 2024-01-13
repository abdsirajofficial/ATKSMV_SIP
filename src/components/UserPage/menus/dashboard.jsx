import React, { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaArrowRightLong, FaLeaf } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoCashSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import img10 from "../../../assets/img10.svg";
import {
  getAnnualPackageApi,
  getMonPackageApi,
  getProfileApi,
  getTotalPackageApi,
  getadminApi,
  getnomineeApi,
  makeWithdrawApi,
  monPackApi,
} from "../../../server/app";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";

export const Dashboard = () => {
  const [withdrawalReq, setwithrawalReq] = useState(false);
  const [PackageInvestment, setPackageInvestment] = useState(false);
  const [yearInvestment, setyearInvestment] = useState(false);
  const [IsChecked, setIsChecked] = useState(false);
  const [profile, setprofile] = useState([]);
  const [nominee, setnominee] = useState([]);
  const userId = {
    userId: localStorage.getItem("userid"),
  };
  const [InvestmentDtls, setInvestmentDtls] = useState({
    packId: "",
    type: "",
  });

  const [senderAccName, setsenderAccName] = useState("");
  const [senderAmt, setsenderAmt] = useState();
  const [senderTransId, setsenderTransId] = useState("");
  const [admin, setadmin] = useState([]);
  const [monPackages, setmonPackages] = useState([]);
  const [annPackages, setannPackages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [currentMonPackId, setcurrentMonPackId] = useState();

  const [selectPack, setselectPack] = useState([]);
  const [MonPackDetails, setMonPackDetails] = useState(false);
  const [packAmount, setpackAmount] = useState();

  useEffect(() => {
    getProfileApi("user/profile", userId, setprofile);
    getnomineeApi("user/getNominee", userId, setnominee);
    getadminApi("user/admin", setadmin);
    getTotalPackageApi(
      "admin/totalPackages",
      { userId: userId.userId },
      setmonPackages,
      setannPackages,
      setcurrentMonPackId
    );
    setInvestmentDtls({
      packId: "",
      type: "",
    });
    setIsChecked();
    setsenderAccName("");
    setsenderTransId("");
    setQuantity(1);
  }, []);

  const combinedPackages = [...monPackages, ...annPackages];

  useEffect(() => {
    const foundMonPackage = combinedPackages.find(
      (packageItem) => packageItem.packId === currentMonPackId
    );
    if (foundMonPackage) {
      setselectPack(foundMonPackage);
    }
  }, [currentMonPackId]);

  const makeWithraqBtn = () => {
    const data = {
      userId: profile.userId,
      name: profile.name,
      amount: profile.amount + profile.return,
    };

    if (IsChecked === true) {
      makeWithdrawApi("user/withdrawal", data).then((res) => {
        if (res.status === 200) {
          if (res.data.msg === "WithDrawal request already Exist") {
            toast.success(res.data.msg, { duration: 1500 });
            setIsChecked();
          } else {
            toast.success(res.data.success, { duration: 1500 });
            setIsChecked();
          }
        } else {
          toast.error(res.data.err, { duration: 1500 });
          setIsChecked();
        }
        setIsChecked();
        setwithrawalReq(false);
      });
    } else {
      setIsChecked();
      toast.error("Please check the checkBox", { duration: 1500 });
    }
  };

  const makewithraw = () => {
    setwithrawalReq(true);
  };

  const handleCancelBtn = () => {
    setIsChecked();
    setsenderAccName("");
    setsenderTransId("");
    setQuantity(1);
    setPackageInvestment(false);
  };

  const handlePackage = () => {
    if (
      !userId.userId ||
      !senderAccName ||
      !senderAmt ||
      !InvestmentDtls.packId ||
      !quantity
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const data = {
      userId: userId.userId,
      name: senderAccName,
      amount: senderAmt * quantity,
      transId: senderTransId,
      packId: InvestmentDtls.packId,
      count: quantity,
    };

    if (IsChecked === true) {
      if (InvestmentDtls.type === "monthly") {
        monPackApi("user/transaction", data)
          .then((res) => {
            if (res.status === 200) {
              toast.success(res.data.msg);
              setIsChecked();
              setsenderAccName("");
              setsenderTransId("");
              setQuantity(1);
              setPackageInvestment(false);
              setTimeout(() => {
                window.open("https://wa.me/8148867881", "_blank");
              }, 2000);
            }
          })
          .catch((error) => {
            toast.error("Failed to process the transaction. Please try again.");
          });
      } else {
        monPackApi("user/transaction", data)
          .then((res) => {
            if (res.status === 200) {
              toast.success(res.data.msg);
              
              setIsChecked();
              setsenderAccName("");
              setsenderTransId("");
              setQuantity(1);
              setPackageInvestment(false);
              window.open("https://wa.me/8148867881", "_blank");
            }
          })
          .catch((error) => {
            setIsChecked();
            setsenderAccName("");
            setsenderTransId("");
            setQuantity(1);
            toast.error("Failed to process the transaction. Please try again.");
          });
      }
    } else {
      toast.error("Please check the CheckBox", { duration: 1500 });
    }
  };

  const handleInvestbtn = (id, amount, type) => {
    setInvestmentDtls({
      packId: id,
      type: type,
    });
    setsenderAmt(amount);
    setIsChecked();
    setsenderAccName("");
    setsenderTransId("");
    setQuantity(1);
    setPackageInvestment(true);
  };

  const sipPackageCalc = (values, year, returns) => {
    const p = values;
    const t = year;
    const r = returns;
    const n = 12;
    const sip =
      p *
      (((Math.pow(1 + r / (100 * n), n * t) - 1) / (r / (100 * n))) *
        (1 + r / (100 * n)));
    return Math.round(sip);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      // Ensure quantity doesn't go below 1
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const PackageMoreDtls = (amount) => {
    setMonPackDetails(true);
    setpackAmount(amount);
  };

  const sipCalculator = (values, year) => {
    const p = values;
    const t = year;
    const r = 20;
    const n = 12;
    const sip =
      p *
      (((Math.pow(1 + r / (100 * n), n * t) - 1) / (r / (100 * n))) *
        (1 + r / (100 * n)));
    return Math.round(sip - p * n * t);
  };

  function copyToClipboard(inputId) {
    const inputElement = document.getElementById(inputId); // Get the input element by its ID
    if (inputElement) {
      inputElement.select(); // Select the value inside the input
      document.execCommand("copy"); // Copy the selected value to clipboard
      // Optionally, you can provide some feedback to the user if needed
      // alert('Copied to clipboard!');
    } else {
      // console.error("Input element not found!"); // Log an error if the input element is not found
    }
  }

  return (
    <div className=" px-8 py-5">
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className=" w-full md:w-[250px] 2xl:w-[300px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
          <div className=" flex flex-col justify-center items-center space-y-3">
            <h1 className=" text-[#031635] font-semibold text-[22px]">
              {profile.amount ? profile.amount : 0}
            </h1>
            <h1 className=" text-[#031635] font-semibold">Total investment</h1>
          </div>
          <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-red-">
            <BsCashCoin />
          </div>
        </div>
        <div className=" w-full md:w-[250px] 2xl:w-[300px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
          <div className=" flex flex-col justify-center items-center space-y-3">
            <h1 className=" text-[#031635] font-semibold text-[22px]">
              {profile.return ? profile.return : 0}
            </h1>
            <h1 className=" text-[#031635] font-semibold">Total returns</h1>
          </div>
          <div className=" shadow-lg rounded-full text-[20px] p-4 text-[#000000] bg-blue-500">
            <BsCashCoin />
          </div>
        </div>
        <div className="w-full md:w-[250px] 2xl:w-[300px] px-4 pb-2 pt-8 shadow-md rounded-xl flex flex-col justify-between items-start bg-gradient-to-r from-blue-200 to-blue-500">
          <div className="flex flex-col justify-center items-center space-y-3">
            <h1 className="text-[#031635] font-semibold text-[22px]">
              {profile.amount
                ? parseInt(profile.amount) +
                  (profile.return ? parseInt(profile.return) : 0)
                : 0}
            </h1>
            <h1 className="text-[#031635] font-semibold">Total amount</h1>
          </div>

          {/* Conditional rendering for the withdrawal option */}
          {(profile.amount ? parseInt(profile.amount) : 0) +
            (profile.return ? parseInt(profile.return) : 0) >
            0 && (
            <div
              className="w-full flex justify-end items-center space-x-2"
              onClick={() => makewithraw()}
            >
              <h1 className="font-semibold text-[14px] text-[#031635] cursor-pointer">
                Withdraw
              </h1>
              <FaArrowRightLong className="text-[#031635]" />
            </div>
          )}
        </div>
      </div>
      <h1 className=" w-full font-semibold py-5">Monthly Package</h1>
      <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {combinedPackages.length === 0 ? (
          <div className="text-center py-4 text-gray-600">
            No packages available
          </div>
        ) : (
          combinedPackages.map(
            (data, index) =>
              data.packId.slice(0, 3) === "MON" && (
                <div
                  className={`w-full shadow-md flex flex-col justify-between items-start rounded-md
                  ${selectPack.sno >= data.sno ? "cursor-not-allowed" : ""}
                  ${
                    currentMonPackId === data.packId
                      ? "bg-[#002c9b] text-white border-[6px]  border-spacing-8 border-[#00ccff]"
                      : `bg-gray-50`
                  }`}
                  key={index}
                >
                  <div
                    className={`w-full flex justify-between items-center ${
                      currentMonPackId === data.packId
                        ? " border-b-2 border-gray-500 "
                        : "bg-gradient-to-l from-blue-700 via-blue-800 to-blue-900"
                    } rounded-t-md`}
                  >
                    {console.log(currentMonPackId)}
                    <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
                      {data.amount}{" "}
                      <span className=" text-[12px]">Per Month</span>
                    </h1>
                    <div>
                      {currentMonPackId === data.packId && (
                        <div className=" bg-[#ff0000] text-white py-1 px-4 rounded-md  mr-3">
                          Active Plan{" "}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" w-full flex justify-start items-center">
                    <div className=" w-1/2 flex flex-col justify-start items-start pl-3 py-3 space-y-2">
                      <div className=" flex justify-center items-center space-x-3">
                        <h1 className=" text-green-500 ">
                          <FaMoneyBill1Wave />
                        </h1>
                        <h1
                          className={`${
                            currentMonPackId === data.packId
                              ? ""
                              : "text-gray-800"
                          }`}
                        >
                          {" "}
                          Returns up-to {data.returns}%
                        </h1>
                      </div>
                      <div className=" flex justify-center items-center space-x-3">
                        <h1 className=" text-gray-00 ">
                          <IoMdLock />
                        </h1>
                        <h1
                          className={`${
                            currentMonPackId === data.packId
                              ? ""
                              : "text-gray-800"
                          }`}
                        >
                          {" "}
                          Tenure: {data.years} years
                        </h1>
                      </div>
                      <div className=" flex justify-center items-center space-x-3">
                        <h1 className=" text-[#ffc200] ">
                          <IoCashSharp />
                        </h1>
                        <h1
                          className={`${
                            currentMonPackId === data.packId
                              ? ""
                              : "text-gray-800"
                          }`}
                        >
                          {" "}
                          Total Amount :{" "}
                          <span className=" font-semibold">
                            {sipPackageCalc(
                              data.amount,
                              data.years,
                              data.returns
                            )}
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className=" w-1/2 flex flex-col justify-center items-center pl-3 py-3 space-y-2">
                      <img src={img10} alt="" className=" w-32" />
                    </div>
                  </div>
                  <div className=" w-full flex justify-between items-center p-3">
                    <p
                      className={`${
                        currentMonPackId === data.packId
                          ? " text-white cursor-pointer hover:font-semibold"
                          : "text-light-blue-800 cursor-pointer hover:font-semibold"
                      } `}
                      onClick={() => PackageMoreDtls(data.amount)}
                    >
                      More details
                    </p>
                    {currentMonPackId === data.packId ? (
                      <button
                        className="bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105 animate-pulse"
                        onClick={() =>
                          handleInvestbtn(data.packId, data.amount, "monthly")
                        }
                      >
                        <h1>Current Plan</h1>
                      </button>
                    ) : (
                      <button
                        className={`bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105 animate-pulse ${
                          selectPack.sno >= data.sno
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        onClick={
                          () =>
                            handleInvestbtn(data.packId, data.amount, "monthly") // Check the condition before invoking the handler
                          // selectPack.sno < data.sno &&
                        }
                        disabled={selectPack.sno >= data.sno} // Add disabled attribute conditionally
                      >
                        <h1>Upgrade Now</h1>
                      </button>
                    )}
                  </div>
                </div>
              )
          )
        )}
      </div>
      <h1 className=" font-semibold py-5">Annual Package</h1>
      <div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {combinedPackages.length === 0 ? (
          <div className="text-center py-4 text-gray-600">
            No packages available
          </div>
        ) : (
          combinedPackages.map(
            (data, index) =>
              data.packId.slice(0, 3) === "ANL" && (
                <div
                  className={`w-full shadow-md flex flex-col justify-between items-start rounded-md 
                  ${selectPack.sno >= data.sno ? "cursor-not-allowed" : ""}
                  ${
                    currentMonPackId === data.packId
                      ? "bg-[#002c9b] text-white border-[6px]  border-spacing-8 border-[#00ccff]"
                      : `bg-gray-50`
                  }`}
                  key={index}
                >
                  <div
                    className={`w-full flex justify-between items-center ${
                      currentMonPackId === data.packId
                        ? " border-b-2 border-gray-500 "
                        : "bg-gradient-to-l from-blue-700 via-blue-800 to-blue-900"
                    } rounded-t-md`}
                  >
                    <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
                      {data.amount} <span className=" text-[12px]"></span>
                    </h1>
                    <div>
                      {currentMonPackId === data.packId && (
                        <div className=" bg-[#ff0000] text-white py-1 px-4 rounded-md  mr-3">
                          Active Plan{" "}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" w-full flex justify-start items-center">
                    <div className=" w-1/2 flex flex-col justify-start items-start pl-3 py-3 space-y-2">
                      <div className=" flex justify-center items-center space-x-3">
                        <h1 className=" text-green-500 ">
                          <FaMoneyBill1Wave />
                        </h1>
                        <h1
                          className={`${
                            currentMonPackId === data.packId
                              ? ""
                              : "text-gray-800"
                          }`}
                        >
                          {" "}
                          Returns up-to {data.returns}%
                        </h1>
                      </div>
                      <div className=" flex justify-center items-center space-x-3">
                        <h1 className=" text-gray-00 ">
                          <IoMdLock />
                        </h1>
                        <h1
                          className={`${
                            currentMonPackId === data.packId
                              ? ""
                              : "text-gray-800"
                          }`}
                        >
                          {" "}
                          Tenure: {data.years} years
                        </h1>
                      </div>
                      <div className=" flex justify-center items-center space-x-3">
                        <h1 className=" text-[#ffc200] ">
                          <IoCashSharp />
                        </h1>
                        <h1
                          className={`${
                            currentMonPackId === data.packId
                              ? ""
                              : "text-gray-800"
                          }`}
                        >
                          {" "}
                          Total Amount :{" "}
                          <span className=" font-semibold">
                            {sipPackageCalc(
                              data.amount,
                              data.years,
                              data.returns
                            )}
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className=" w-1/2 flex flex-col justify-center items-center pl-3 py-3 space-y-2">
                      <img src={img10} alt="" className=" w-32" />
                    </div>
                  </div>
                  <div className=" w-full flex justify-between items-center p-3">
                    <p
                      className={`${
                        currentMonPackId === data.packId
                          ? " text-white cursor-pointer hover:font-semibold"
                          : "text-light-blue-800 cursor-pointer hover:font-semibold"
                      } `}
                      onClick={() => PackageMoreDtls(data.amount)}
                    >
                      More details
                    </p>
                    {currentMonPackId === data.packId ? (
                      <button
                        className="bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105 animate-pulse"
                        onClick={() =>
                          handleInvestbtn(data.packId, data.amount, "monthly")
                        }
                      >
                        <h1>Current Plan</h1>
                      </button>
                    ) : (
                      <button
                        className={`bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105 animate-pulse ${
                          selectPack.sno >= data.sno
                            ? "cursor-not-allowed opacity-50"
                            : ""
                        }`}
                        onClick={
                          () =>
                            handleInvestbtn(data.packId, data.amount, "monthly") // Check the condition before invoking the handler
                        }
                        disabled={selectPack.sno >= data.sno} // Add disabled attribute conditionally
                      >
                        <h1>Upgrade Now</h1>
                      </button>
                    )}
                  </div>
                </div>
              )
          )
        )}
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
        <h1 className=" mt-5 font-medium text-[14px] text-red-400">
          For issues related to cyber attacks. Call us at <b> +91 8148867881</b>{" "}
          or Email us at <b>atksmvtraders@gmail.com</b>
        </h1>
      </div>
      {withdrawalReq && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold pb-5">
              Check Your Account Destails :-
            </h1>
            <div className="">
              <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                    value={profile.account_holder}
                    className=" w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    readOnly
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
                    value={profile.account_no}
                    className="w-full lg:w-[250px]  px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    readOnly
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
                    value={profile.IFSC}
                    className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    readOnly
                  />
                </div>
                <div>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      UPI ID
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="text"
                    value={profile.upi_id}
                    className=" w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    readOnly
                  />
                </div>
              </div>
              {nominee ? (
                <div>
                  <div className="text-neutral-400 text-base font-semibold tracking-wide mt-8">
                    Nominee Details :-
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                        value={nominee.name}
                        className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                        readOnly
                      />
                    </div>
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
                        value={nominee.account_holder}
                        className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                        readOnly
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
                        value={nominee.account_no}
                        className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                        readOnly
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
                        value={nominee.IFSC}
                        className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              <div className=" pt-5 space-x-2">
                <input
                  type="checkbox"
                  id="checkBoxForm"
                  name="checkBoxForm"
                  value="checkBoxForm"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label for="checkBoxForm">
                  Make sure above the details are correct
                </label>
              </div>

              <div className=" flex justify-start items-center space-x-5 mt-5">
                <button
                  className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => setwithrawalReq(false)}
                >
                  <h1>Cancel</h1>
                </button>
                <button
                  className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => makeWithraqBtn()}
                >
                  <h1>Send</h1>
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
                <h1 className=" mt-5 font-medium text-[14px] text-red-400">
                  For issues related to cyber attacks. Call us at{" "}
                  <b> +91 8148867881</b> or Email us at{" "}
                  <b>atksmvtraders@gmail.com</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {PackageInvestment && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold pb-5">
              Make Payment From This Account :-
            </h1>
            <div className="">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div>
                  <div className="flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      Account Holder Name
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[250px] mt-3">
                    <input
                      type="text"
                      value={admin.account_holder}
                      id="accountHolderInput" // Added id for easy selection
                      className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      readOnly
                    />
                    <IoCopyOutline
                      onClick={() => copyToClipboard("accountHolderInput")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      Account Number
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[250px] mt-3">
                    <input
                      type="number"
                      value={admin.account_no}
                      id="accountNumberInput" // Added id for easy selection
                      className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      readOnly
                    />
                    <IoCopyOutline
                      onClick={() => copyToClipboard("accountNumberInput")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      IFSC Code
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[250px] mt-3">
                    <input
                      type="text"
                      value={admin.IFSC}
                      id="ifscCodeInput" // Added id for easy selection
                      className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      readOnly
                    />
                    <IoCopyOutline
                      onClick={() => copyToClipboard("ifscCodeInput")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      UPI id
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <div className="relative w-full lg:w-[250px] mt-3">
                    <input
                      type="text"
                      value={admin.upi_id}
                      id="upiIdInput" // Added id for easy selection
                      className="w-full px-3 py-2 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      readOnly
                    />
                    <IoCopyOutline
                      onClick={() => copyToClipboard("upiIdInput")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="text-neutral-400 text-base font-semibold tracking-wide text-gray-700 pt-10 pb-3">
                Fill The Transaction Details
              </div>
              <p className=" text-gray-700">
                Please provide your payment sender account details at your
                earliest convenience. Once we receive them, we will process your
                payment within the next 24 hours.
              </p>
              <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      Sender Account Name
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="text"
                    value={senderAccName}
                    className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) => setsenderAccName(e.target.value)}
                  />
                </div>
                <div>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      Enter The Amount
                    </div>
                    <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div>
                  </div>
                  <input
                    type="number"
                    value={senderAmt * quantity}
                    className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    // onChange={(e) => setsenderAmt(parseInt(e.target.value, 10))}
                    readOnly
                  />
                </div>
                <div>
                  <div className=" flex space-x-2 mt-5">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      Transaction id
                    </div>
                    {/* <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                      *
                    </div> */}
                  </div>
                  <input
                    type="text"
                    value={senderTransId}
                    className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) => setsenderTransId(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-4 mt-5 ">
                  <div className=" flex space-x-2">
                    <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                      Add Your Quantity
                    </div>
                    {/* <div className="text-red-500 text-lg font-medium">*</div> */}
                  </div>
                  <div className=" flex space-x-2">
                    {/* Minus Button */}
                    <button
                      className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
                      onClick={handleDecrement}
                    >
                      -
                    </button>

                    {/* Quantity Input */}
                    <input
                      type="number"
                      value={quantity}
                      className="w-[80px] px-3 py-2 rounded-md border-t border-b border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300 text-center"
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value, 10))
                      }
                    />

                    {/* Plus Button */}
                    <button
                      className="px-4 py-2 rounded-md border border-blue-300 bg-blue-400 text-white hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className=" pt-10 pb-5 space-x-2 ">
                <input
                  type="checkbox"
                  id="checkBoxForm"
                  name="checkBoxForm"
                  value="checkBoxForm"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label for="checkBoxForm">
                  Make sure above the details are correct
                </label>
              </div>
              <div className=" flex justify-start items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => handleCancelBtn()}
                >
                  <h1>Cancel</h1>
                </button>
                <button
                  className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => handlePackage()}
                >
                  <h1>Invest Now</h1>
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
                <h1 className=" mt-5 font-medium text-[14px] text-red-400">
                  For issues related to cyber attacks. Call us at{" "}
                  <b> +91 8148867881</b> or Email us at{" "}
                  <b>atksmvtraders@gmail.com</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {MonPackDetails && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10 overflow-y-auto">
          <div className=" w-full bg-white rounded-lg p-10">
            <div className=" flex justify-between items-center">
              <h1 className=" font-medium text-[22px]">
                Start your SIP Monthly {packAmount}
              </h1>
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => {
                  setMonPackDetails(false), setpackAmount();
                }}
              >
                <h1>Cancel</h1>
              </button>
            </div>
            <div className="container mx-auto mt-5 p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-auto">
              <div className="flex flex-wrap justify-between bg-blue-500 text-white p-2 rounded-t-lg">
                <div className="w-full sm:w-1/5">Year</div>
                <div className="w-full sm:w-1/5">Yearly Invested Amount</div>
                <div className="w-full sm:w-1/5">Total Invested</div>
                <div className="w-full sm:w-1/5">Wealth Gained</div>
                <div className="w-full sm:w-1/5">Expected Amount</div>
              </div>

              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-wrap justify-between items-center p-2 border-b"
                >
                  <div className="w-full sm:w-1/5">{2024 + index}</div>
                  <div className="w-full sm:w-1/5">{packAmount * 12}</div>
                  <div className="w-full sm:w-1/5">
                    {packAmount * 12 * (index + 1)}
                  </div>
                  <div className="w-full sm:w-1/5">
                    {sipCalculator(packAmount, index + 1)}
                  </div>
                  <div className="w-full sm:w-1/5 flex items-center">
                    <span className="mr-1">
                      <BiRupee />
                    </span>
                    {packAmount * 12 * (index + 1) +
                      sipCalculator(packAmount, index + 1)}
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap justify-between bg-blue-500 text-white p-2 rounded-b-lg">
                <div className="w-full sm:w-1/5"></div>
                <div className="w-full sm:w-1/5"></div>
                <div className="w-full sm:w-1/5"></div>
                <div className="w-full sm:w-1/5"></div>
                <div className="w-full sm:w-1/5 flex items-center font-bold">
                  <span className="mr-1">
                    <BiRupee />
                  </span>
                  {[...Array(5)]
                    .map(
                      (_, index) =>
                        packAmount * 12 * (index + 1) +
                        sipCalculator(packAmount, index + 1)
                    )
                    .reduce((a, b) => a + b, 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
