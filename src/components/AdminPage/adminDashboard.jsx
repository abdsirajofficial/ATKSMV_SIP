import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.svg";
import {
  MdDashboard,
  MdLogout,
  MdManageHistory,
  MdOutlineLogout, MdComputer, MdGroup
} from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import jwtDecode from "jwt-decode";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import loadingIcon from "../../assets/loading.svg";

export const AdminDashboard = ({ isLoading }) => {
  const token = localStorage.getItem("loginToken");
  const name = localStorage.getItem("name");
  const UserId = localStorage.getItem("userid");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);


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

  const navData = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: <MdComputer className=" text-[24px]" />,
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: <MdGroup className=" text-[24px] " />,
    },
    {
      name: 'Packages',
      path: '/admin/packages',
      icon: <LuPackageCheck className=" text-[24px]" />,
    },
    {
      name: 'Payment',
      path: '/admin/payment',
      icon: <LuPackageCheck className=" text-[24px]" />,
    },

    {
      name: 'Withdrawal',
      path: '/admin/withdrawal',
      icon: <BiMoneyWithdraw className=" text-[24px]" />,
    },

    {
      name: 'History',
      path: '/admin/history',
      icon: <MdManageHistory className=" text-[24px]" />,
    },

  ]

  return (
    <div className=" flex w-full h-screen">
      {/* Sidebar */}

      <div className=" hidden md:block">
        <div className="  w-40 lg:w-48 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] flex flex-col justify-between  items-center pt-5 space-y-2 pb-10">
          <div className=" flex flex-col justify-center items-center">
            <div className=" flex justify-center items-center text-white mb-10">
              <img src={logo} alt="" className="w-36" />
            </div>

            {
              navData.map((item, index) => <NavLink
                to={item.path}
                className=" acitive w-full flex justify-start  items-start lg:space-x-5 text-center py-3 lg:px-10 cursor-pointer text-[#ebedf2] font-medium"
              >
                {item.icon}
                <h1 className=" flex items-start gap-2 ">
                  {item.name}
                </h1>
              </NavLink>)
            }

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
        <div className="w-full h-14 shadow border-b-2 flex justify-end items-center bg-white pr-5">
          <div>
            {/* Menu Button */}
            <div className="md:hidden block">
              <button
                className="text-[26px] py-4"
                onClick={() => setIsMenuOpen(true)}
              >
                <IoMenu />
              </button>
            </div>

            {/* Menu Content */}
            {isMenuOpen && (
              <div className="md:hidden block  absolute z-10 top-10 right-3 text-end w-[65%] rounded-md bg-white border-2 shadow-md">
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
                      {

                      }

                      <NavLink
                        to={"/admin/dashboard"}
                        className=" acitive w-full mt-10 flex justify-start  items-start lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#00132e] font-medium"
                      // onClick={() => setShowImage(false)}
                      >
                        <h1 className=" flex items-start gap-2 ">
                          <MdDashboard className=" text-[24px] " />
                          Dashboard
                        </h1>
                      </NavLink>

                      <NavLink
                        to={"/admin/users"}
                        className=" acitive w-full flex justify-start  items-start lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#00132e] font-medium"
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
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#00132e] font-medium"
                      >
                        <h1 className="flex items-start gap-2">
                          <h1 className=" text-[24px]">
                            <LuPackageCheck />
                          </h1>
                          Packages
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/payment"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#00132e] font-medium"
                      >
                        <LuPackageCheck />
                        <h1 className="flex items-start gap-2">
                          Payment
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/withdrawal"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#00132e] font-medium"
                      >

                        <BiMoneyWithdraw className=" text-[24px]" />
                        <h1 className=" flex items-start gap-2">
                          Withdrawal
                        </h1>
                      </NavLink>
                      <NavLink
                        to={"/admin/history"}
                        className=" acitive w-full mt- flex justify-start items-center lg:space-x-5 text-center py-3 px-5 lg:px-10 cursor-pointer text-[#00132e] font-medium"
                      >
                        <MdManageHistory className=" text-[24px]" />
                        <h1 className="flex items-start gap-2">
                          History
                        </h1>
                      </NavLink>
                    </div>

                    <div className=" flex justify-start items-start w-full px-5 pt-5">
                      <button
                        className="flex justify-center items-center gap-x-2 bg-[aliceblue] hover:bg-red-400 hover:text-white px-3 py-2 rounded-md shadow-lg transform hover:scale-105 transition duration-300 border-2 border-[#00132e]"
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
              <h1 className=" px-[18px]  py-2 text-[18px] rounded-full my-2 font-semibold text-base">
                {UserId}
              </h1>
              <h1 className=" bg-yellow-300 px-[12px] font-bold  py-2 text-[18px] rounded-full my-2">
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
      {
        isLoading && <div className=" absolute left-[50%] top-5">
          <img src={loadingIcon} alt="" className=" h-10 w-10 bg-white shadow-md rounded-full" />
        </div>
      }

    </div>
  );
};
