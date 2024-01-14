import React, { useState } from "react";
import img3 from "../assets/img3.svg";
import logo from "../assets/logo2.svg";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../server/app";
import toast from "react-hot-toast";
import loadingIcon from "../assets/loading.svg";
import { IoIosArrowBack } from "react-icons/io";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  //const [color, setColor] = useState("#ffffff");

  //login api call
  const onSubmit = () => {
    setLoading(true);

    const data = { email: username, password: password };

    loginApi("user/login", data, setLoading).then((res) => {
      if (res?.status === 200) {
        const token = res.data.token;
        const UserName = res.data.profile.name;
        const UserId = res.data.profile.userId;
        const UserRole = res.data.profile.role;
        if (token) {
          if (res.data.profile.role === "Admin") {
            localStorage.setItem("loginToken", token);
            localStorage.setItem("name", UserName);
            localStorage.setItem("userid", UserId);
            localStorage.setItem("role", UserRole);
            toast.success("Login successfull!", { duration: 1500 });
            navigate("/admin/users");
            setLoading(false);
          } else {
            localStorage.setItem("loginToken", token);
            localStorage.setItem("name", UserName);
            localStorage.setItem("userid", UserId);
            localStorage.setItem("role", UserRole);
            toast.success("Login successfull!", { duration: 1500 });
            navigate("/user/dashboard");
            setLoading(false);
          }
        } else {
          setLoading(false);
          toast.error("Login failed", { duration: 1500 });
        }
      } else {
        setLoading(false);
        toast.error("Something wrong", { duration: 1500 });
      }
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#588FFF]">
      <div className="hidden md:w-1/2 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] md:flex flex-col space-y-10 justify-center items-center">
        <img className="" src={img3} alt="" />
        <div className=" flex flex-col justify-center items-center text-white space-y-3">
          <h1 className="text-[16px]">Expert in stock recommendation</h1>
          <h1 className="text-[14px] text-gray-200">
            Trade hassle-free in Stocks, Futures & Options and Currencies of
            NSE, BSE & MCX
          </h1>
        </div>
      </div>
      <div className=" p-10 md:p-0 md:h-full bg-[aliceblue] md:w-1/2 rounded-lg md:rounded-none md:bg-white flex flex-col justify-center items-center space-y-8">

        <div>
          
        </div>

        <img className=" w-52 " src={logo} alt="" />
        <h1 className=" md:text-[20px] font-semibold ">
          {" "}
          Welcome to<span className=" text-[#3777fa]"> ATKSMV TRADERS</span>
        </h1>
        <div className=" md:w-3/4 lg:w-[1/2] flex flex-col justify-center items-center">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black md:text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-3 w-full sm:w-[290px]  border rounded-md shadow-md"
              placeholder="Email or username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black md:text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 w-full sm:w-[290px]  border rounded-md shadow-md"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSubmit();
                }
              }}
            />
            {/* <p className="text-sm font-medium text-gray-600 mt-3 text-end">
              Forgot Password?
            </p> */}
          </div>
          <button
            type="submit"
            className="bg-[#3777FA] flex justify-center items-center transition-colors duration-500  space-x-3 text-white p-3 rounded-md hover:bg-[#334e8e] w-full sm:w-[290px]  shadow-md mt-5"
            onClick={() => onSubmit()}
          >
            <p>Login</p>
            {loading && <img src={loadingIcon} alt="no img" className=" w-5" />}
          </button>
          <h1 className="text-sm font-medium text-gray-600 mt-8 text-center">
            Don't have an account?{" "}
            <span
              className=" text-[#3777fa] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </h1>
          <div className=" mt-10 w-full">
              <button onClick={()=>navigate('../')} className=" flex space-x-2 justify-center items-center underline  transition-colors duration-700 hover:text-[#3777FA]"><IoIosArrowBack/>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;