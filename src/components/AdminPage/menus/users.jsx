import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import {
  delUserApi,
  editApi,
  getProfileApi,
  getUserApi,
  getnomineeApi,
} from "../../../server/app";
import toast from "react-hot-toast";
import { Pagination } from "../../pagination";

export const Users = () => {
  const [editUser, seteditUser] = useState(false);
  const [userData, setuserData] = useState([]);
  const [totalUsers, settotalUsers] = useState();
  const [profile, setprofile] = useState([]);
  const [nominee, setnominee] = useState([]);
  const [delConfirnMsg, setdelConfirnMsg] = useState(false);
  const [delUser, setdelUser] = useState({
    userId: "",
    userName: "",
  });
  const [Acitve, setAcitve] = useState(1)
  const [Total, setTotal] = useState()
  const [search, setsearch] = useState()

  useEffect(() => {
    setprofile([]);
    setnominee([]);
    getUserApi(`admin/users?page=${Acitve}&maxResults=7`, setTotal, setuserData, settotalUsers);
  }, [Acitve]);

  const handleEditUser = (id) => {
    seteditUser(true);
    getProfileApi("admin/profile", { userId: id }, setprofile);
    getnomineeApi("admin/getNominee", { userId: id }, setnominee);
  };

  const deleteUser = (id) => {
    delUserApi(`admin/deleteUser?userId=${id}`).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.msg, { duration: 1500 });
        getUserApi(`admin/users?page=${Acitve}&maxResults=7`, setTotal, setuserData, settotalUsers);
      }
    });
    setdelConfirnMsg(false);
  };

  const deleteUserConfirm = (id, name) => {
    setdelUser({ userId: id, userName: name });
    setdelConfirnMsg(true);
  };

  const handleCancelBtn = () => {
    setprofile([]);
    setnominee([]);
    seteditUser(false);
  };

  const handleUpdateUser = () => {
    const profileData = {
      userId: profile.userId,
      email: profile.email,
      mobile: profile.mobile,
      name: profile.name,
      pan: profile.pan,
      return: profile.returns ? parseInt(profile.return) : 0,
      secondary_mobile: profile.secondary_mobile,
      upi_id: profile.upi_id,
      DOB: profile.DOB,
      IFSC: profile.IFSC,
      aadhar: profile.aadhar,
      account_holder: profile.account_holder,
      account_no: profile.account_no,
      address: profile.address,
      amount: profile.amount ? parseInt(profile.amount) : 0
    };

    const nomineeData = {
      name: nominee?.name || "",
      email: nominee?.email || "",
      aadhar: nominee?.aadhar || "",
      pan: nominee?.pan || "",
      mobile: nominee?.mobile || "",
      account_no: nominee?.account_no || "",
      upi_id: nominee?.upi_id || "",
      account_holder: nominee?.account_holder || "",
      IFSC: nominee?.IFSC || "",
      userId: profile.userId,
    };

    if (nomineeData.name === "") {
      editApi("admin/editUser", profileData).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getUserApi(`admin/users?page=${Acitve}&maxResults=7`, setTotal, setuserData, settotalUsers);
        } else {
          toast.error(res.data.error, { duration: 1500 });
        }
      });
      seteditUser(false);
    } else {
      editApi("admin/editNominee", nomineeData).then((res) => {
        if (res.status === 200) {
        } else {
          toast.error(res.data.error, { duration: 1500 });
        }
      });
      editApi("admin/editUser", profileData).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getUserApi("admin/users", setuserData, settotalUsers);
        } else {
          toast.error(res.data.error, { duration: 1500 });
        }
      });
      seteditUser(false);
    }
  };

  const searchApi = () => {
    getUserApi(`admin/users?name=${search}&page=${Acitve}&maxResults=6`, setTotal, setuserData, settotalUsers);
  }


  return (
    <div className=" px-2 sm:px-4 md:px-8 py-5 w-full h-full flex flex-col">
      <div className=" sm:flex justify-between items-center">
        <h1 className=" text-[16px] sm:text-[18px]  md:text-[22px] font-medium">{totalUsers} Users</h1>
        <div className=" flex sm:justify-center justify-end items-center space-x-2 sm:space-x-5">
          <div className="bg-white rounded-md border ">
            <div className="pl-3.5 py-2.5 flex justify-start items-center space-x-3 bg-white rounded-md border">
              <IoIosSearch className="text-gray-400" />
              <input type="text" placeholder="Search by name" className=" sm:w-[300px] w-full" onChange={(e)=>setsearch(e.target.value)}/>
            </div>
          </div>
          <button className=" bg-gradient-to-r from-blue-400 to-blue-700 px-3 sm:px-5 py-2 rounded-md font-medium text-white transform transition duration-300 hover:scale-105"
          onClick={()=> searchApi()}
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-auto shadow-sm grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[12px] sm:text-[14px] bg-[white] my-5">
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Name</p>
        <p className=" flex justify-center items-center">Role</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Status</p>
        <p className=" flex justify-center items-center">Action</p>
      </div>
      <div className=" w-full grow  flex flex-col justify-between">
        <div>
          {userData.length === 0 ? (
            <div className="text-center py-4 text-gray-600">No users found</div>
          ) : (
            userData.map((user, index) => (
              <div
                key={index}
                className={`w-full h-auto grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[12px]  sm:text-[14px] bg-white shadow border-b border-neutral-400 ${
                  index % 2 === 0 ? " bg-gray-100" : " bg-[#dbedfe]"
                }`}
              >
                <p className=" flex justify-center items-center">{user.userId}</p>
                <p className=" flex justify-center items-center">{user.name}</p>
                <p className=" flex justify-center items-center">{user.role}</p>
                <p className=" flex justify-center items-center">
                  {(user.amount ? user.amount : 0) +
                    (user.return ? user.return : 0)}
                </p>
                <p className=" flex justify-center items-center">
                  <p
                    className={`sm:px-3.5 px-1 rounded-full border-2 py-0.5 ${
                      user.status === "Active"
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    {user.status}
                  </p>
                </p>
                {user.role === "User" ? (
                  <p className=" flex justify-center items-center sm:space-x-5">
                    <button
                      className="flex justify-center items-center space-x-1 sm:space-x-2 text-red-600 md:bg-red-600 md:px-2 py-1.5 rounded-lg md:text-white hover:scale-110"
                      onClick={() => deleteUserConfirm(user.userId, user.name)}
                    >
                      <p className="text-[20px]">
                        <MdDelete />
                      </p>
                      <p className=" hidden md:block">Delete</p>
                    </button>
                    <button
                      className="flex justify-center items-center space-x-1 md:space-x-2  text-blue-600 md:bg-blue-600 md:px-3 py-1.5 rounded-lg md:text-white hover:scale-110"
                      onClick={() => handleEditUser(user.userId)}
                    >
                      <p className=" text-[18px]">
                        <MdModeEditOutline />
                      </p>
                      <p className=" hidden md:block" >Edit</p>
                    </button>
                  </p>
                ): (<p className="flex justify-center items-center space-x-5">
                <button
                  className=" flex justify-center items-center space-x-1 sm:space-x-2   text-blue-600 md:bg-blue-600 px-3 py-1.5 rounded-lg md:text-white hover:scale-110"
                  onClick={() => handleEditUser(user.userId)}
                >
                  <p className=" text-[18px]">
                    <MdModeEditOutline />
                  </p>
                  <p className=" hidden md:block">Edit</p>
                </button>
              </p>)}
              </div>
            ))
          )}
        </div>
        {Total > 1 && (<div className=" w-full mt-5 justify-end items-end">
          <Pagination active={Acitve} setActive={setAcitve} total={Total}/>
        </div>)}   
      </div>
      {delConfirnMsg && (
        <div className=" fixed z-20 w-screen h-screen  top-0 right-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
          <div className="rounded-lg bg-white p-10 shadow-2xl antialiased flex flex-col justify-center items-center">
            <p className=" text-center text-[40px] text-red-500">
              <IoWarning></IoWarning>
            </p>
            <p className=" pt-2 font-[700px] text-[18px]">
              Delete {delUser.userName}
            </p>
            <p className=" text-gray-800  flex space-x-2 pt-5">
              <p>Are you sure you want to delete </p>
              <p className=" tracking text-black font-medium">
                {delUser.userId} {delUser.userName}?
              </p>
            </p>
            <p>
              All the transaction records and withdrawal records will be deleted
              and{" "}
            </p>
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
                onClick={() => deleteUser(delUser.userId)}
              >
                YES, DELETE USER
              </button>
            </div>
          </div>
        </div>
      )}
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
                    value={profile.amount}
                    className="text-[#031635] w-[200px] font-semibold text-[22px] bg-transparent border-2 p-4 rounded-xl border-purple-900"
                    onChange={(e) =>
                      setprofile({ ...profile, amount: e.target.value })
                    }
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
                    value={profile.return}
                    className="text-[#031635] w-[200px] font-semibold text-[22px] bg-transparent border-2 p-4 rounded-xl border-purple-900"
                    onChange={(e) =>
                      setprofile({ ...profile, return: e.target.value })
                    }
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
                  <h1 className="text-[#031635] w-[200px] font-semibold text-[22px] bg-transparent p-4">
                    {profile.amount
                      ? parseInt(profile.amount) +
                        (profile.return ? parseInt(profile.return) : 0)
                      : 0}
                  </h1>
                  <h1 className=" text-[#031635] font-semibold">
                    Total Amount
                  </h1>
                </div>
                <div className=" shadow-lg  rounded-full text-[20px] p-4 text-[#000000] bg-blue-500">
                  <BsCashCoin />
                </div>
              </div>
            </div>
            <div className="text-neutral-400 text-base font-semibold tracking-wide pt-10">
              Profile Details :-
            </div>
            <div className=" grid grid-cols-3 gap-5">
              <div>
                <div className="text-zinc-600 mt-5">User Id</div>
                <input
                  type="text"
                  value={profile.userId}
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
                  value={profile.name}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, name: e.target.value })
                  }
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
                  value={profile.email}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, email: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Aadhar Number
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={profile.aadhar}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, aadhar: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                    Pan Number
                  </div>
                  <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.pan}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, pan: e.target.value })
                  }
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
                  value={profile.mobile}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, mobile: e.target.value })
                  }
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
                  value={profile.secondary_mobile}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, secondary_mobile: e.target.value })
                  }
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
                    value={profile.DOB}
                    className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) =>
                      setprofile({ ...profile, DOB: e.target.value })
                    }
                  />
                </div>
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
                  value={profile.address}
                  className="w-[300px] h-[100px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, address: e.target.value })
                  }
                />
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
                  value={profile.account_holder}
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, account_holder: e.target.value })
                  }
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
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, account_no: e.target.value })
                  }
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
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, IFSC: e.target.value })
                  }
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
                  className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, upi_id: e.target.value })
                  }
                />
              </div>
            </div>
            {nominee ? (
              <div>
                <div className="text-neutral-400 text-base font-semibold tracking-wide mt-16">
                  Nominee Details :-
                </div>
                <div className=" grid grid-cols-3">
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
                      value={nominee ? nominee.name : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                        Email Id
                      </div>
                      <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.email : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, email: e.target.value })
                      }
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
                      value={nominee ? nominee.mobile : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, mobile: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                        Pan Number
                      </div>
                      <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.pan : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, pan: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal font-['Sarabun'] leading-tight">
                        Aadhar Number
                      </div>
                      <div className="text-red-500 text-base font-normal font-['Sarabun'] leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="number"
                      value={nominee ? nominee.aadhar : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, aadhar: e.target.value })
                      }
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
                      value={nominee ? nominee.account_holder : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({
                          ...nominee,
                          account_holder: e.target.value,
                        })
                      }
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
                      value={nominee ? nominee.account_no : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, account_no: e.target.value })
                      }
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
                      value={nominee ? nominee.IFSC : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, IFSC: e.target.value })
                      }
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
                      value={nominee ? nominee.upi_id : ""}
                      className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, upi_id: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            ) : null}

            <div className=" flex justify-start items-start space-x-5 py-10">
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handleCancelBtn()}
              >
                <h1>Cancel</h1>
              </button>
              <button
                className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handleUpdateUser()}
              >
                <h1>Update</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
