import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.svg";
import { MdDashboard, MdManageHistory, MdOutlineLogout } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import jwtDecode from "jwt-decode";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

export const UserDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = localStorage.getItem("loginToken");
  const name = localStorage.getItem("name");
  const UserId = localStorage.getItem("userid");
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("name");
    localStorage.removeItem("userid");
    localStorage.removeItem("role");
    navigate("/login");
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    let decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("loginToken");
      navigate("/login");
    } else {
      // setemail(decodedToken.email);
    }
  }, [token, navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex w-full h-screen">
      {/* Sidebar */}

      <div className=" hidden md:block">
        <div className=" w-40 lg:w-48 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] flex flex-col justify-between  items-center pt-5 space-y-2 pb-10">
          <div className=" flex flex-col justify-center items-center">
            <div className=" text-white flex justify-center ">
              <img src={logo} alt="" className="w-36" />
            </div>
            <NavLink
              to={"/user/dashboard"}
              className=" acitive w-full mt-10 flex justify-start  items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className=" flex items-center gap-2 ">
                <h1 className=" text-[24px] ">
                  <MdDashboard />
                </h1>
                Dashboard
              </h1>
            </NavLink>
            <NavLink
              to={"/user/profile"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className=" flex justify-center items-center gap-2">
                <h1 className=" text-[24px]">
                  <RiAccountBoxFill />
                </h1>
                Profile
              </h1>
            </NavLink>
            <NavLink
              to={"/user/withdrawal"}
              className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
            >
              <h1 className="flex gap-3 text-center">
                <h1 className=" text-[24px]">
                  <BiMoneyWithdraw />
                </h1>
                Withdrawal
              </h1>
            </NavLink>
            <NavLink
              to={"/user/history"}
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
        <div className="w-full h-18 shadow border-b-2 flex justify-end items-center bg-white pr-5">
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
              <div className="md:hidden block  absolute z-10 top-0 right-0 text-end w-[300px] bg-blue-600">
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

                    <div className=" w-full py-2 mt-5 text-white">
                      <div className=" flex justify-start items-start">
                        <h1 className=" px-[18px]  text-[18px] rounded-full">
                        User Id : {UserId}
                        </h1>
                        {/* <h1 className="px-[18px]  py-2 text-[18px] rounded-full my-2">
                          {name}
                        </h1> */}
                      </div>
                      <NavLink
                        to={"/user/dashboard"}
                        className=" acitive w-full flex px-5 justify-start  items-start lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                        // onClick={() => setShowImage(false)}
                      >
                        <h1 className=" flex justify-start items-start gap-2 ">
                          <h1 className=" text-[24px] ">
                            <MdDashboard />
                          </h1>
                          Dashboard
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/user/profile"}
                        className=" acitive w-full mt- flex px-5 justify-start items-start lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className=" flex justify-start items-start gap-2">
                          <h1 className=" text-[24px]">
                            <RiAccountBoxFill />
                          </h1>
                          Profile
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/user/withdrawal"}
                        className=" acitive w-full mt- flex px-5 justify-start items-start lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className="flex justify-start items-start gap-2">
                          <h1 className=" text-[24px]">
                            <BiMoneyWithdraw />
                          </h1>
                          Withdrawal
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/user/history"}
                        className=" acitive w-full mt- flex px-5 justify-start items-start lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
                      >
                        <h1 className="flex gap-3 text-center">
                          <h1 className=" text-[24px]">
                            <MdManageHistory />
                          </h1>
                          History
                        </h1>
                      </NavLink>
                    </div>
                    <div className=" flex justify-start items-start pr-40 pt-5">
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
          <div className=" hidden md:block">
            <div className=" flex justify-end items-center">
              <h1 className=" px-[18px] font-semibold text-base  py-2 text-[18px] rounded-full my-2">
                {UserId}
              </h1>
              <h1 className=" bg-yellow-300 px-[14px]  py-2 text-[18px] rounded-full my-2 font-bold">
                {name[0]}
              </h1>
            </div>
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
