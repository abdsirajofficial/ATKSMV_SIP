import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.svg"
import { MdDashboard, MdManageHistory, MdOutlineLogout } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import jwtDecode  from "jwt-decode";
import { BiMoneyWithdraw } from "react-icons/bi";

export const UserDashboard = () => {

  const token = localStorage.getItem('loginToken')
  const name = localStorage.getItem('name')

    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('loginToken');
      localStorage.removeItem('name');
      localStorage.removeItem('userid');
      localStorage.removeItem('role');
      navigate('/login');
    }

    useEffect(() => {
      if (!token) {
        navigate('/login');
        return;
      }
  
      let decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
  
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('loginToken');
        navigate('/login');
      }
      else{
        // setemail(decodedToken.email);
      }
    }, [token, navigate]);

  return (
    <div className=" flex w-full h-screen">
      {/* Sidebar */}

      <div className="">
        <div className=" w-3 lg:w-48 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] flex flex-col justify-between  items-center pt-5 space-y-2">
          <div>
            <div className=" text-white flex justify-center">
              <img src={logo} alt="" className="w-36"/>
            </div>
            <NavLink
              to={"/user/dashboard"}
              className=" acitive w-full mt-10 flex justify-start  items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
              // onClick={() => setShowImage(false)}
            >
              <h1 className=" flex items-center gap-2 ">
                <h1 className=" text-[24px] "><MdDashboard /></h1>
                  Dashboard
              </h1>
            </NavLink>
            <NavLink
              to={"/user/profile"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className=" flex justify-center items-center gap-2">
                <h1  className=" text-[24px]"><RiAccountBoxFill /></h1>
                Profile
              </h1>
            </NavLink>
            <NavLink
              to={"/user/withdrawal"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className="flex gap-3 text-center">
                <h1 className=" text-[24px]"><BiMoneyWithdraw /></h1>
                Withdrawal
              </h1>
            </NavLink>
            <NavLink
              to={"/user/history"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className="flex gap-3 text-center">
                <h1 className=" text-[24px]"><MdManageHistory /></h1>
                History
              </h1>
            </NavLink>
          </div>
          <button className=" flex justify-center items-center gap-x-2 text-white pb-8 hover:text-red-700" onClick={() => handleLogout()}>
            <h1 className=" text-[20px]"><MdOutlineLogout /></h1>
            Logout 
          </button>
        </div>
      </div>

      <div className=" w-full h-full flex flex-col ">
        {/* Navbar*/}
        <div className="w-full h-18 shadow border-b-2 flex justify-end items-center bg-white pr-5">
          <div>
            <h1
              className=" bg-yellow-300 px-[18px] py-2 text-[18px] rounded-full my-2"
            >
              {name[0]}
            </h1>
          </div>
        </div>

        {/*pagecontent*/}
        <div className="w-full grow bg-[#f2f7fa] overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
