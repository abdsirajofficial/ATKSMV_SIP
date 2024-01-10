import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.svg";
import {
  MdDashboard,
  MdLogout,
  MdManageHistory,
  MdOutlineLogout,
} from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import jwtDecode from "jwt-decode";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

export const AdminDashboard = () => {
  const token = localStorage.getItem("loginToken");
  const name = localStorage.getItem("name");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    let decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("loginToken");
      localStorage.removeItem("name");
      localStorage.removeItem("userid");
      localStorage.removeItem("role");
      navigate("/login");
    } else {
      // setemail(decodedToken.email);
    }
  }, [token, navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    navigate("/login");
  };

  return (
    <div className=" flex w-full h-screen">
      {/* Sidebar */}

      <div className=" hidden sm:block">
        <div className="  w-40 lg:w-48 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] flex flex-col justify-between  items-center pt-5 space-y-2 pb-10">
          <div className=" flex flex-col justify-center items-center">
            <div className=" flex justify-center items-center text-white">
              <img src={logo} alt="" className="w-36" />
            </div>
            <NavLink
              to={"/admin/users"}
              className=" acitive w-full mt-10 flex justify-start  items-start lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
              // onClick={() => setShowImage(false)}
            >
              <h1 className=" flex items-start gap-2 ">
                <h1 className=" text-[24px] ">
                  <MdDashboard />
                </h1>
                Users
              </h1>
            </NavLink>
            <NavLink
              to={"/admin/packages"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className="flex gap-3 text-center">
                <h1 className=" text-[24px]">
                  <LuPackageCheck />
                </h1>
                Packages
              </h1>
            </NavLink>
            <NavLink
              to={"/admin/payment"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className="flex gap-3 text-center">
                <h1 className=" text-[24px]">
                  <LuPackageCheck />
                </h1>
                Payment
              </h1>
            </NavLink>
            <NavLink
              to={"/admin/withdrawal"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className=" flex justify-center items-center gap-2">
                <h1 className=" text-[24px]">
                  <BiMoneyWithdraw />
                </h1>
                Withdrawal
              </h1>
            </NavLink>
            <NavLink
              to={"/admin/history"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className="flex gap-3 text-center">
                <h1 className=" text-[24px]">
                  <MdManageHistory />
                </h1>
                History
              </h1>
            </NavLink>
          </div>
          <button
            className="flex justify-center items-center gap-x-2 bg-[aliceblue] hover:bg-red-400 hover:text-white px-3 py-2 rounded-md shadow-lg transform hover:scale-105 transition duration-300"
            onClick={() => handleLogout()}
          >
            <h1 className="text-[20px]">
              <MdOutlineLogout />
            </h1>
            Logout
          </button>
        </div>
      </div>

      <div className=" w-full h-full flex flex-col ">
        {/* Navbar*/}
        <div className="w-full h-14 shadow border-b-2 flex justify-end items-center bg-white pr-10">
          <div>
            {/* Menu Button */}
            <div className="sm:hidden block">
              <button
                className="text-[26px] py-4"
                onClick={() => setIsMenuOpen(true)}
              >
                <IoMenu />
              </button>
            </div>

            {/* Menu Content */}
            {isMenuOpen && (
              <div className="sm:hidden block  absolute z-10 top-0 right-0 text-end w-[300px] bg-blue-600">
                {/* Close Button */}
                <button
                  className="text-[26px] py-4 pr-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ImCancelCircle />
                </button>

                {/* Menu Items */}
                <div className="py-5">
                  <div className=" flex flex-col justify-end items-end">
                    <div className=" w-full text-white flex justify-center items-center ">
                      <img src={logo} alt="" className="w-36" />
                    </div>
                    <div className=" w-full">
                      <NavLink
                        to={"/admin/users"}
                        className=" acitive w-full mt-10 flex justify-start  items-start lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                        // onClick={() => setShowImage(false)}
                      >
                        <h1 className=" flex items-start gap-2 ">
                          <h1 className=" text-[24px] ">
                            <MdDashboard />
                          </h1>
                          Users
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/packages"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className="flex gap-3 text-center">
                          <h1 className=" text-[24px]">
                            <LuPackageCheck />
                          </h1>
                          Packages
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/payment"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className="flex gap-3 text-center">
                          <h1 className=" text-[24px]">
                            <LuPackageCheck />
                          </h1>
                          Payment
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/withdrawal"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className=" flex justify-center items-center gap-2">
                          <h1 className=" text-[24px]">
                            <BiMoneyWithdraw />
                          </h1>
                          Withdrawal
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/history"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className="flex gap-3 text-center">
                          <h1 className=" text-[24px]">
                            <MdManageHistory />
                          </h1>
                          History
                        </h1>
                      </NavLink>
                    </div>
                    <div className=" flex justify-start items-start pr-40 mt-5">
                      <button
                        className="flex justify-center items-center gap-x-2 bg-[aliceblue] hover:bg-red-400 hover:text-white px-3 py-2 rounded-md shadow-lg transform hover:scale-105 transition duration-300"
                        onClick={() => handleLogout()}
                      >
                        <h1 className="text-[20px]">
                          <MdOutlineLogout />
                        </h1>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" hidden sm:block">
            <h1 className=" bg-yellow-300 px-[18px] py-2 text-[18px] rounded-full my-2">
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
