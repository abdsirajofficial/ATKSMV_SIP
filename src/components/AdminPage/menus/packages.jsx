import React, { useEffect, useState } from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoCashSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import img10 from "../../../assets/img10.svg";
import {
  addPackageApi,
  delPackageApi,
  eidtPackageApi,
  getAnnualPackageApi,
  getMonPackageApi,
} from "../../../server/app";
import toast from "react-hot-toast";
// import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { IoWarning } from "react-icons/io5";

export const Package = () => {
  const [addMonPackage, setaddMonPackage] = useState(false);
  const [MonPackDetails, setMonPackDetails] = useState(false);
  const [addYearPackage, setaddYearPackage] = useState(false);
  const [packAmount, setpackAmount] = useState();
  const userId = {
    userId: localStorage.getItem("userid"),
  };

  const [delConfirnMsg, setdelConfirnMsg] = useState(false);
  const [currentPackId, setcurrentPackId] = useState();
  const [delPack, setdelPack] = useState({
    id: "",
    amount: "",
    type: "",
  });
  const [packages, setPackages] = useState({
    amount: "",
    years: "",
    returns: "",
  });

  const [monPackages, setmonPackages] = useState([]);
  const [annPackages, setannPackages] = useState([]);
  const [eidtPackages, seteidtPackages] = useState(false);
  const [EditPackData, setEditPackData] = useState([]);

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

  useEffect(() => {
    getMonPackageApi(
      "admin/monthPackages",
      { userId: userId.userId },
      setmonPackages,
      setcurrentPackId
    );
    getAnnualPackageApi(
      "user/annualPackages",
      userId,
      setannPackages,
      setcurrentPackId
    );
    setPackages({
      amount: "",
      years: "",
      returns: "",
    });
  }, []);

  const addmonPackage = (type) => {
    const data = {
      amount: parseInt(packages.amount),
      years: parseInt(packages.years),
      returns: parseInt(packages.returns),
    };
    if (type === "monthly") {
      addPackageApi("admin/monthPackage", data).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getMonPackageApi(
            "admin/monthPackages",
            { userId: userId.userId },
            setmonPackages,
            setcurrentPackId
          );
          setPackages({
            amount: "",
            years: "",
            returns: "",
          });
          setaddMonPackage(false);
        }
      });
    } else {
      addPackageApi("admin/annualPackages", data).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getAnnualPackageApi(
            "admin/annualPackages",
            userId,
            setannPackages,
            setcurrentPackId
          );
          setPackages({
            amount: "",
            years: "",
            returns: "",
          });
          setaddYearPackage(false);
        }
      });
    }
  };

  const deletePackage = (id, type) => {
    if (type === "monthly") {
      delPackageApi(`admin/monthPackages?packId=${id}`).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getMonPackageApi(
            "user/monthPackages",
            { userId: userId.userId },
            setmonPackages,
            setcurrentPackId
          );
        }
      });
      setdelConfirnMsg(false);
    } else {
      delPackageApi(`admin/annualPackages?packId=${id}`).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getAnnualPackageApi(
            "user/annualPackages",
            userId,
            setannPackages,
            setcurrentPackId
          );
        }
      });
      setdelConfirnMsg(false);
    }
  };

  const delConfirmMsg = (id, amount, type) => {
    setdelPack({ id: id, amount: amount, type: type });
    setdelConfirnMsg(true);
  };

  const handlePackcancelBtn = () => {
    setaddMonPackage(false);
    setaddYearPackage(false);
    setPackages({
      amount: "",
      years: "",
      returns: "",
    });
    setEditPackData([]);
    seteidtPackages(false);
  };

  const handleEditPackage = (id, type) => {
    seteidtPackages(true);

    if (type === "monthly") {
      const foundPackage = monPackages.find(
        (packageItem) => packageItem.packId === id
      );

      if (foundPackage) {
        setEditPackData(foundPackage);
      }
    } else {
      const foundPackage = annPackages.find(
        (packageItem) => packageItem.packId === id
      );

      if (foundPackage) {
        setEditPackData(foundPackage);
      }
    }
  };

  const updatePackages = (type) => {
    const PackaType = type.slice(0, 3);

    const data = {
      packId: EditPackData.packId,
      amount: parseInt(EditPackData.amount),
      years: parseInt(EditPackData.years),
      returns: parseInt(EditPackData.returns),
    };

    if (PackaType === "MON") {
      eidtPackageApi("admin/editMonthPackages", data).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getMonPackageApi(
            "admin/monthPackages",
            { userId: userId.userId },
            setmonPackages,
            setcurrentPackId
          );
          setEditPackData([]);
          seteidtPackages(false);
          setaddMonPackage(false);
        }
      });
    } else {
      eidtPackageApi("admin/editAnnualPackages", data).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getAnnualPackageApi(
            "admin/annualPackages",
            userId,
            setannPackages,
            setcurrentPackId
          );
          setEditPackData([]);
          seteidtPackages(false);
          setaddYearPackage(false);
        }
      });
    }
  };

  const PackageMoreDtls = (amount) => {
    setMonPackDetails(true)
    setpackAmount(amount)
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
      <div className=" grid grid-cols-3 gap-10 mt-5">
        {monPackages.length === 0 ? (
          <div className="text-center py-4 text-gray-600">
            Please add Monthly package
          </div>
        ) : (
          monPackages.map((data, index) => (
            <div
              className=" w-full shadow-md flex flex-col justify-between items-start bg-gray-50 rounded-md"
              key={index}
            >
              <div className=" w-full flex justify-between items-center bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900  rounded-t-md">
                <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
                  {data.amount} <span className=" text-[12px]">Per Month</span>
                </h1>
                <h1
                  className="p-3 rounded-fullfont-semibold text-[28px] text-white hover:text-red-500 cursor-pointer transform transition duration-300 hover:scale-125"
                  onClick={() =>
                    delConfirmMsg(data.packId, data.amount, "monthly")
                  }
                >
                  <MdDelete />
                </h1>
              </div>
              <div className=" w-full flex justify-start items-center">
                <div className=" w-1/2 flex flex-col justify-start items-start pl-3 py-3 space-y-2">
                  <div className=" flex justify-center items-center space-x-3">
                    <h1 className=" text-green-500 ">
                      <FaMoneyBill1Wave />
                    </h1>
                    <h1 className=" text-gray-800">
                      {" "}
                      Returns up-to {data.returns}%
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center space-x-3">
                    <h1 className=" text-gray-00 ">
                      <IoMdLock />
                    </h1>
                    <h1 className=" text-gray-800">
                      {" "}
                      Tenure: {data.years} years
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center space-x-3">
                    <h1 className=" text-[#ffc200] ">
                      <IoCashSharp />
                    </h1>
                    <h1 className=" text-gray-800">
                      {" "}
                      Total Amount :{" "}
                      <span className=" font-semibold">
                        {sipPackageCalc(data.amount, data.years, data.returns)}
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
                  className=" text-light-blue-800 cursor-pointer hover:font-semibold"
                  onClick={() => PackageMoreDtls( data.amount)}
                >
                  More details
                </p>
                <button
                  className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => handleEditPackage(data.packId, "monthly")}
                >
                  <h1>
                    <MdModeEditOutline />
                  </h1>
                  <h1>Edit Now</h1>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className=" flex justify-between items-center mt-10">
        <h1 className=" font-semibold py-5">Annual Package</h1>
        <button
          className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
          onClick={() => setaddYearPackage(true)}
        >
          <h1>
            <FaPlus />
          </h1>
          <h1>Add Package</h1>
        </button>
      </div>
      <div className=" grid grid-cols-3 gap-10 mt-5">
        {annPackages.length === 0 ? (
          <div className="text-center py-4 text-gray-600">
            Please add Annual Package
          </div>
        ) : (
          annPackages.map((data, index) => (
            <div
              key={index}
              className=" w-full shadow-md flex flex-col justify-between items-start bg-gray-50 rounded-md"
            >
              <div className=" w-full flex justify-between items-center bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900  rounded-t-md">
                <h1 className="p-3 rounded-fullfont-semibold text-[20px] text-white">
                  {data.amount} <span className=" text-[12px]"></span>
                </h1>
                <h1
                  className="p-3 rounded-fullfont-semibold text-[28px] text-white hover:text-red-500 cursor-pointer transform transition duration-300 hover:scale-125"
                  onClick={() =>
                    delConfirmMsg(data.packId, data.amount, "annual")
                  }
                >
                  <MdDelete />
                </h1>
              </div>
              <div className=" w-full flex justify-start items-center">
                <div className=" w-1/2 flex flex-col justify-start items-start pl-3 py-3 space-y-2">
                  <div className=" flex justify-center items-center space-x-3">
                    <h1 className=" text-green-500 ">
                      <FaMoneyBill1Wave />
                    </h1>
                    <h1 className=" text-gray-800">
                      {" "}
                      Returns up-to {data.returns}%
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center space-x-3">
                    <h1 className=" text-gray-00 ">
                      <IoMdLock />
                    </h1>
                    <h1 className=" text-gray-800">
                      {" "}
                      Tenure: {data.years} years
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center space-x-3">
                    <h1 className=" text-[#ffc200] ">
                      <IoCashSharp />
                    </h1>
                    <h1 className=" text-gray-800">
                      {" "}
                      Total Amount :{" "}
                      <span className=" font-semibold">
                        {sipPackageCalc(data.amount, data.years, data.returns)}
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
                  className=" text-light-blue-800 cursor-pointer hover:font-semibold"
                  onClick={() => setMonPackDetails(true)}
                >
                  More details
                </p>
                <button
                  className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                  onClick={() => handleEditPackage(data.packId, "annual")}
                >
                  <h1>
                    <MdModeEditOutline />
                  </h1>
                  <h1>Edit Now</h1>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {eidtPackages && (
        <div className=" w-full fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-min bg-white rounded-lg p-10">
            <h1 className=" font-semibold">Edit Monthly Package</h1>
            <div className=" flex space-x-5">
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Amount
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={EditPackData.amount}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Amount"
                  onChange={(e) =>
                    setEditPackData({ ...EditPackData, amount: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    No of years
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={EditPackData.years}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Years"
                  onChange={(e) =>
                    setEditPackData({ ...EditPackData, years: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Returns %
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={EditPackData.returns}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="returns"
                  onChange={(e) =>
                    setEditPackData({
                      ...EditPackData,
                      returns: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className=" flex justify-end items-end space-x-5 mt-8">
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handlePackcancelBtn()}
              >
                <h1>Cancel</h1>
              </button>
              <button
                className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => updatePackages(EditPackData.packId)}
              >
                <h1>Update</h1>
              </button>
            </div>
          </div>
        </div>
      )}
      {delConfirnMsg && (
        <div className=" fixed z-20 w-screen h-screen  top-0 right-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
          <div className="rounded-lg bg-white p-10 shadow-2xl antialiased flex flex-col justify-center items-center">
            <p className=" text-center text-[40px] text-red-500">
              <IoWarning></IoWarning>
            </p>
            <p className=" pt-2 font-[700px] text-[18px]">
              Delete Rs: {delPack.amount} {delPack.type} Package
            </p>
            <p className=" text-gray-800  flex space-x-2 pt-5">
              <p>Are you sure you want to delete </p>
              <p className=" tracking text-black font-medium">
                {delPack.amount} {delPack.type} ?
              </p>
            </p>
            <p>All the Monthly Package records will be deleted and </p>
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
                onClick={() => deletePackage(delPack.id, delPack.type)}
              >
                YES, DELETE USER
              </button>
            </div>
          </div>
        </div>
      )}

      {addMonPackage && (
        <div className=" w-full fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-min bg-white rounded-lg p-10">
            <h1 className=" font-semibold">Add Monthly Package</h1>
            <div className=" flex space-x-5">
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Amount
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={packages.amount}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Amount"
                  onChange={(e) =>
                    setPackages({ ...packages, amount: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    No of years
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={packages.years}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Years"
                  onChange={(e) =>
                    setPackages({ ...packages, years: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Returns %
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={packages.returns}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="returns"
                  onChange={(e) =>
                    setPackages({ ...packages, returns: e.target.value })
                  }
                />
              </div>
            </div>
            <div className=" flex justify-end items-end space-x-5 mt-8">
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handlePackcancelBtn()}
              >
                <h1>Cancel</h1>
              </button>
              <button
                className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => addmonPackage("monthly")}
              >
                <h1>Save</h1>
              </button>
            </div>
          </div>
        </div>
      )}

      {addYearPackage && (
        <div className=" w-full h-full fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <h1 className=" font-semibold">Add Year Package</h1>
            <div className=" flex space-x-5">
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Amount
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={packages.amount}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Amount"
                  onChange={(e) =>
                    setPackages({ ...packages, amount: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    No of years
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={packages.years}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Years"
                  onChange={(e) =>
                    setPackages({ ...packages, years: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Returns %
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={packages.returns}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="returns"
                  onChange={(e) =>
                    setPackages({ ...packages, returns: e.target.value })
                  }
                />
              </div>
            </div>
            <div className=" flex justify-end items-end space-x-5 mt-8">
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handlePackcancelBtn()}
              >
                <h1>Cancel</h1>
              </button>
              <button
                className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => addmonPackage("annual")}
              >
                <h1>Save</h1>
              </button>
            </div>
          </div>
        </div>
      )}

      {MonPackDetails && (
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm px-10 pt-10">
          <div className=" w-full bg-white rounded-lg p-10">
            <div className=" flex justify-between items-center">
              <h1 className=" font-medium text-[22px]">
                Start your SIP Monthly {packAmount}
              </h1>
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() =>{setMonPackDetails(false), setpackAmount()} }
              >
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
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td>{2024 + index}</td>
                  <td>{packAmount * 12}</td>
                  <td>{packAmount * 12 * (index + 1)}</td>
                  <td>{sipCalculator(packAmount, index + 1)}</td>
                  <td className=" flex justify-center items-center">
                    <BiRupee />
                    {packAmount * 12 * (index + 1) + sipCalculator(packAmount, index + 1)}
                  </td>
                </tr>
              ))}
              {/* </tbody> */}
              {/* <tfoot> */}
              <tr>
                <th>Footer 1</th>
                <th>Footer 2</th>
                <th>Footer 3</th>
                <th>Footer 4</th>
                <th>
                  {[...Array(5)]
                    .map(
                      (_, index) =>
                      packAmount * 12 * (index + 1) + sipCalculator(packAmount, index + 1)
                    )
                    .reduce((a, b) => a + b, 0)}
                </th>
              </tr>
              {/* </tfoot> */}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
