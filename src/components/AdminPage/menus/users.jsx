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
  getUserInActiveApi,
  getnomineeApi,
} from "../../../server/app";
import toast from "react-hot-toast";
import { Pagination } from "../../pagination";
import FormateCurrency from "../../formateCurrency";

export const Users = () => {
  const [editUser, seteditUser] = useState(false);
  const [userData, setuserData] = useState([]);
  const [userInActiveData, setuserInActiveData] = useState([]);
  const [totalUsers, settotalUsers] = useState();
  const [InActivetotalUsers, setInActivetotalUsers] = useState();
  const [profile, setprofile] = useState([]);
  const [nominee, setnominee] = useState([]);
  const [delConfirnMsg, setdelConfirnMsg] = useState(false);
  const [delUser, setdelUser] = useState({
    userId: "",
    userName: "",
  });
  const [Active, setActive] = useState(1);
  const [InActive, setInActive] = useState(1);
  const [Total, setTotal] = useState();
  // const [InacitveTotal, setInacitveTotal] = useState();
  const [InActiveTotal, setInActiveTotal] = useState();
  const [search, setsearch] = useState();
  const [showUsers, setshowUsers] = useState(true);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    setprofile([]);
    setnominee([]);
    getUserApi(
      `admin/users?page=${Active}&maxResults=7&status=Active`,
      setTotal,
      setuserData,
      settotalUsers
    );
    getUserInActiveApi(
      `admin/users?page=${InActive}&maxResults=7&status=Inactive`,
      setInActivetotalUsers,
      setInActiveTotal,
      setuserInActiveData
    );
  }, [Active, InActive]);

  const handleEditUser = (id) => {
    seteditUser(true);
    getProfileApi("admin/profile", { userId: id }, setprofile);
    getnomineeApi("admin/getNominee", { userId: id }, setnominee);
  };

  const deleteUser = (id) => {
    delUserApi(`admin/deleteUser?userId=${id}`).then((res) => {
      if (res?.status === 200) {
        toast.success(res.data.msg, { duration: 1500 });
        getUserApi(
          `admin/users?page=${Active}&maxResults=7&status=Active`,
          setTotal,
          setuserData,
          settotalUsers
        );
        getUserInActiveApi(
          `admin/users?page=${InActive}&maxResults=7&status=Inactive`,
          setInActivetotalUsers,
          setInActiveTotal,
          setuserInActiveData
        );
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
      return: profile.return ? parseInt(profile.return) : 0,
      secondary_mobile: profile.secondary_mobile,
      upi_id: profile.upi_id,
      DOB: profile.DOB,
      IFSC: profile.IFSC,
      aadhar: profile.aadhar,
      account_holder: profile.account_holder,
      account_no: profile.account_no,
      address: profile.address,
      amount: profile.amount ? parseInt(profile.amount) : 0,
      password: newPassword.length > 0 ? newPassword : ''
    };

    if (newPassword.length > 0 && newPassword.length < 8) {
      toast.error('Password length should be minimum 8')
    }

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

    if (newPassword.length > 0 && newPassword.length < 8) {
      toast.error('Password length should be minimum 8')
    }

    if (nomineeData.name === "") {
      editApi("admin/editUser", profileData).then((res) => {
        if (res?.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getUserApi(
            `admin/users?page=${Active}&maxResults=7&status=Active`,
            setTotal,
            setuserData,
            settotalUsers
          );
          getUserInActiveApi(
            `admin/users?page=${InActive}&maxResults=7&status=Inactive`,
            setInActivetotalUsers,
            setInActiveTotal,
            setuserInActiveData
          );
        } else {
          toast.error(res.data.error, { duration: 1500 });
        }
      });
      seteditUser(false);
    } else {
      editApi("admin/editNominee", nomineeData).then((res) => {
        if (res?.status === 200) {
        } else {
          toast.error(res.data.error, { duration: 1500 });
        }
      });
      editApi("admin/editUser", profileData).then((res) => {
        if (res?.status === 200) {
          toast.success(res.data.msg, { duration: 1500 });
          getUserApi(
            `admin/users?page=${Active}&maxResults=7&status=Active`,
            setTotal,
            setuserData,
            settotalUsers
          );
          getUserInActiveApi(
            `admin/users?page=${InActive}&maxResults=7&status=Inactive`,
            setInActivetotalUsers,
            setInActiveTotal,
            setuserInActiveData
          );
        } else {
          toast.error(res.data.error, { duration: 1500 });
        }
      });
      seteditUser(false);
    }
  };

  const searchApi = () => {
    getUserApi(
      `admin/users?name=${search}&page=${Active}&maxResults=7`,
      setTotal,
      setuserData,
      settotalUsers
    );
  };

  return (
    <div className=" px-2 sm:px-4 md:px-8 py-5 w-full h-full flex flex-col">
      <div className=" sm:flex justify-between items-center">
        <h1 className=" text-[16px] sm:text-[18px]  md:text-[22px] font-medium flex flex-col ">
          {showUsers ? (
            <h1>{totalUsers} Users</h1>
          ) : (
            <h1>{InActivetotalUsers} Users</h1>
          )}
          {showUsers ? (
            <div className=" space-x-4">
              <button
                className={`p-2 text-[17px] bg-gradient-to-r from-blue-400 to-blue-700 rounded-md shadow-md px-3 mt-2 ${!showUsers ? "" : " text-white"
                  }`}
                onClick={() => setshowUsers(true)}
              >
                Active
              </button>
              <button
                className={`p-2 text-[17px] rounded-md shadow-md px-3 mt-2 bg-white  ${showUsers ? " " : " text-"
                  }`}
                onClick={() => setshowUsers(false)}
              >
                InActive
              </button>
            </div>
          ) : (
            <div className=" space-x-4">
              <button
                className={`p-2 text-[17px] bg-white rounded-md  shadow-md px-3 mt-2 ${!showUsers ? "" : " text-white"
                  }`}
                onClick={() => setshowUsers(true)}
              >
                Active
              </button>
              <button
                className={`p-2 text-[17px] rounded-md shadow-md px-3 mt-2 bg-gradient-to-r from-blue-400 to-blue-700  ${showUsers ? " " : " text-white"
                  }`}
                onClick={() => setshowUsers(false)}
              >
                InActive
              </button>
            </div>
          )}
        </h1>
        <div className=" flex sm:justify-center justify-end items-center space-x-2 sm:space-x-5">
          <div className="bg-white rounded-md border ">
            <div className="pl-3.5 py-2.5 flex justify-start items-center space-x-3 bg-white rounded-md border">
              <IoIosSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search by name"
                className=" sm:w-[300px] w-full"
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </div>
          <button
            className=" bg-gradient-to-r from-blue-400 to-blue-700 px-3 sm:px-5 py-2 rounded-md font-medium text-white transform transition duration-300 hover:scale-105"
            onClick={() => searchApi()}
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
        {showUsers ? (
          <div>
            {userData.length === 0 ? (
              <div className="text-center py-4 text-gray-600">
                No users found
              </div>
            ) : (
              userData.map((user, index) => (
                <div
                  key={index}
                  className={`w-full h-auto grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[12px]  sm:text-[14px] bg-white shadow border-b border-neutral-400 ${index % 2 === 0 ? " bg-gray-100" : " bg-[#dbedfe]"
                    }`}
                >
                  <p className=" flex justify-center items-center">
                    {user.userId}
                  </p>
                  <p className=" flex justify-center items-center">
                    {user.name}
                  </p>
                  <p className=" flex justify-center items-center">
                    {user.role}
                  </p>
                  <p className=" flex justify-center items-center">
                    {<FormateCurrency amount={(user.amount ? user.amount : 0) +
                      (user.return ? user.return : 0)} />}
                  </p>
                  <p className=" flex justify-center items-center">
                    <p
                      className={`sm:px-3.5 px-1 rounded-full border-2 py-0.5 ${user.status === "Active"
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
                        onClick={() =>
                          deleteUserConfirm(user.userId, user.name)
                        }
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
                        <p className=" hidden md:block">Edit</p>
                      </button>
                    </p>
                  ) : (
                    <p className="flex justify-center items-center space-x-5">
                      <button
                        className=" flex justify-center items-center space-x-1 sm:space-x-2   text-blue-600 md:bg-blue-600 px-3 py-1.5 rounded-lg md:text-white hover:scale-110"
                        onClick={() => handleEditUser(user.userId)}
                      >
                        <p className=" text-[18px]">
                          <MdModeEditOutline />
                        </p>
                        <p className=" hidden md:block">Edit</p>
                      </button>
                    </p>
                  )}
                </div>
              ))
            )}
            {Total > 1 && (
              <div className=" w-full mt-5 justify-end items-end">
                <Pagination
                  active={Active}
                  setActive={setActive}
                  total={Total}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            {userInActiveData.length === 0 ? (
              <div className="text-center py-4 text-gray-600">
                No users found
              </div>
            ) : (
              userInActiveData.map((user, index) => (
                <div
                  key={index}
                  className={`w-full h-auto grid grid-cols-6 grid-rows-1 text-center rounded py-3 text-[12px]  sm:text-[14px] bg-white shadow border-b border-neutral-400 ${index % 2 === 0 ? " bg-gray-100" : " bg-[#dbedfe]"
                    }`}
                >
                  <p className=" flex justify-center items-center">
                    {user.userId}
                  </p>
                  <p className=" flex justify-center items-center">
                    {user.name}
                  </p>
                  <p className=" flex justify-center items-center">
                    {user.role}
                  </p>
                  <p className=" flex justify-center items-center">
                    {<FormateCurrency amount={(user.amount ? user.amount : 0) +
                      (user.return ? user.return : 0)} />}
                  </p>
                  <p className=" flex justify-center items-center">
                    <p
                      className={`sm:px-3.5 px-1 rounded-full border-2 py-0.5 ${user.status === "Active"
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                        }`}
                    >
                      {user.status}
                    </p>
                  </p>
                  <div className=" flex justify-center items-center">
                    <button
                      className=" w-min flex justify-center items-center space-x-1 sm:space-x-2 text-red-600 md:bg-red-600 md:px-2 py-1.5 rounded-lg md:text-white hover:scale-110"
                      onClick={() => deleteUserConfirm(user.userId, user.name)}
                    >
                      <p className="text-[20px]">
                        <MdDelete />
                      </p>
                      <p className="hidden md:block">Delete</p>
                    </button>
                  </div>
                </div>
              ))
            )}
            {Total > 1 && (
              <div className=" w-full mt-5 justify-end items-end">
                <Pagination
                  active={InActive}
                  setActive={setInActive}
                  total={InActiveTotal}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {delConfirnMsg && (
        <div className=" fixed z-20 w-screen h-screen  top-0 right-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
          <div className="rounded-lg bg-white p-5 sm:p-10 shadow-2xl antialiased flex flex-col justify-center items-center">
            <p className=" text-center text-[40px] text-red-500">
              <IoWarning></IoWarning>
            </p>
            <p className=" pt-2 font-[700px] text-[18px]">
              Delete {delUser.userName}
            </p>
            <p className=" text-gray-800  sm:flex space-x-2 pt-5">
              <p>Are you sure you want to delete </p>
              <p className=" tracking text-black font-medium flex space-x-2">
                <p>{delUser.userId}</p>
                <p>{delUser.userName} ?</p>
              </p>
            </p>
            <p className=" text-center">
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
        <div className=" w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm sm:px-10 sm:pt-10 overflow-x-auto">
          <div className=" w-full bg-white rounded-lg sm:p-10 p-5">
            {profile.role !== "Admin" && (
              <div className="text-neutral-400 text-base font-semibold tracking-wide pb-5">
                Investment Amount :-
              </div>
            )}
            {profile.role !== "Admin" && (
              <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className=" w-full md:w-[250px] 2xl:w-[300px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
                  <div className=" flex flex-col justify-start items-start space-y-3">
                    <input
                      type="number"
                      value={profile.amount}
                      className="text-[#031635] w-full sm:w-[200px] font-semibold text-[22px] bg-transparent border-2 p-4 rounded-xl border-purple-900"
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
                <div className=" w-full md:w-[250px] 2xl:w-[300px] px-4 py-8 shadow-md  rounded-xl flex justify-between items-center bg-gradient-to-r from-blue-200 to-blue-500">
                  <div className=" flex flex-col justify-start items-start space-y-3">
                    <input
                      type="number"
                      value={profile.return}
                      className="text-[#031635] w-full sm:w-[200px] font-semibold text-[22px] bg-transparent border-2 p-4 rounded-xl border-purple-900"
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
                <div className="w-full md:w-[25 0px] 2xl:w-[300px] px-4 pb-2 pt-8 shadow-md rounded-xl flex  justify-between items-start bg-gradient-to-r from-blue-200 to-blue-500">
                  <div className=" flex flex-col justify-center items-start space-y-3">
                    <h1 className="text-[#031635] w-full sm:w-[200px] font-semibold text-[22px] bg-transparent p-4">
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
            )}

            <div className="text-neutral-400 text-base font-semibold tracking-wide pt-10">
              Profile Details :-
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div>
                <div className="text-zinc-600 mt-5">User Id</div>
                <input
                  type="text"
                  value={profile.userId}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
                  readOnly
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Name
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.name}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, name: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Email id
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="email"
                  value={profile.email}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, email: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Aadhar Number
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={profile.aadhar}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => {
                    // Remove any non-numeric characters from the input value
                    const newValue = e.target.value.replace(/[^0-9]/g, "");

                    // Limit the input to 12 digits
                    const limitedValue = newValue.slice(0, 12);

                    // Update the profile state with the limited aadhar number
                    setprofile({ ...profile, aadhar: limitedValue });
                  }}
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Pan Number
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.pan}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md uppercase border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => {
                    // Remove any characters that are not alphanumeric
                    const newValue = e.target.value.replace(
                      /[^a-zA-Z0-9]/g,
                      ""
                    );

                    // Limit the input to 10 characters
                    const limitedValue = newValue.slice(0, 10);

                    // Update the profile state with the limited PAN value
                    setprofile({ ...profile, pan: limitedValue });
                  }}
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Primary Number
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={profile.mobile}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => {
                    // Remove non-numeric characters from the input value
                    const newValue = e.target.value.replace(/[^0-9]/g, "");

                    // Update the profile state with the cleaned mobile number
                    setprofile({ ...profile, mobile: newValue.slice(0, 10) });
                  }}
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Secondary Number
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={profile.secondary_mobile}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => {
                    // Remove non-numeric characters from the input value
                    const newValue = e.target.value.replace(/[^0-9]/g, "");

                    // Limit the input to 10 digits
                    const limitedValue = newValue.slice(0, 10);

                    // Update the profile state with the limited secondary mobile number
                    setprofile({ ...profile, secondary_mobile: limitedValue });
                  }}
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Date of Birth
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <div>
                  <input
                    type="date"
                    value={profile.DOB}
                    className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) =>
                      setprofile({ ...profile, DOB: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Password
                  </div>
                </div>
                <input
                  type="text"
                  value={newPassword}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                />
              </div>

              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Address
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <textarea
                  value={profile.address}
                  className="w-full lg:w-[250px] h-[100px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, address: e.target.value })
                  }
                />
              </div>



            </div>
            <div className="text-neutral-400 text-base font-semibold tracking-wide mt-8">
              Account Details :-
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Account Holder Name
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.account_holder}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, account_holder: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    Account Number
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="number"
                  value={profile.account_no}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) =>
                    setprofile({ ...profile, account_no: e.target.value })
                  }
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    IFSC Code
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.IFSC}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md uppercase border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => {
                    // Remove any characters that are not alphanumeric
                    const newValue = e.target.value.replace(
                      /[^a-zA-Z0-9]/g,
                      ""
                    );

                    // Limit the input to 11 characters
                    const limitedValue = newValue.slice(0, 11);

                    // Update the profile state with the limited IFSC value
                    setprofile({ ...profile, IFSC: limitedValue });
                  }}
                />
              </div>
              <div>
                <div className=" flex space-x-2 mt-5">
                  <div className="text-zinc-600 text-base font-normal  leading-tight">
                    UPI ID
                  </div>
                  <div className="text-red-500 text-base font-normal  leading-tight">
                    *
                  </div>
                </div>
                <input
                  type="text"
                  value={profile.upi_id}
                  className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Name
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.name : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Email Id
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.email : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Primary Number
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="number"
                      value={nominee ? nominee.mobile : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => {
                        // Remove non-numeric characters from the input value
                        const newValue = e.target.value.replace(/[^0-9]/g, "");

                        // Limit the input to 10 digits
                        const limitedValue = newValue.slice(0, 10);

                        // Update the nominee state with the limited mobile number
                        setnominee({ ...nominee, mobile: limitedValue });
                      }}
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Pan Number
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.pan : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border uppercase border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => {
                        // Remove any characters that are not alphanumeric
                        const newValue = e.target.value.replace(
                          /[^a-zA-Z0-9]/g,
                          ""
                        );

                        // Limit the input to 10 characters
                        const limitedValue = newValue.slice(0, 10);

                        // Update the nominee state with the limited PAN value
                        setnominee({ ...nominee, pan: limitedValue });
                      }}
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Aadhar Number
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="number"
                      value={nominee ? nominee.aadhar : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => {
                        // Remove non-numeric characters from the input value
                        const newValue = e.target.value.replace(/[^0-9]/g, "");

                        // Limit the input to 12 digits
                        const limitedValue = newValue.slice(0, 12);

                        // Update the nominee state with the limited Aadhar number
                        setnominee({ ...nominee, aadhar: limitedValue });
                      }}
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Account Holder Name
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.account_holder : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        Account Number
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="number"
                      value={nominee ? nominee.account_no : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) =>
                        setnominee({ ...nominee, account_no: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        IFSC Code
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.IFSC : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 uppercase rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => {
                        // Remove any characters that are not alphanumeric
                        const newValue = e.target.value.replace(
                          /[^a-zA-Z0-9]/g,
                          ""
                        );

                        // Limit the input to 11 characters
                        const limitedValue = newValue.slice(0, 11);

                        // Update the nominee state with the limited IFSC value
                        setnominee({ ...nominee, IFSC: limitedValue });
                      }}
                    />
                  </div>
                  <div>
                    <div className=" flex space-x-2 mt-5">
                      <div className="text-zinc-600 text-base font-normal  leading-tight">
                        UPI ID
                      </div>
                      <div className="text-red-500 text-base font-normal  leading-tight">
                        *
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nominee ? nominee.upi_id : ""}
                      className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
