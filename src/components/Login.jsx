import React, { useState } from "react";
import img3 from "../assets/img3.svg";
import logo from "../assets/logo2.svg";

import { useNavigate } from "react-router-dom";
import { loginApi } from "../server/app";
import toast from "react-hot-toast";


const Login = () => {

  const navigate = useNavigate()

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  //login api call
  const onSubmit = () => {

    // setShowLoading(true)
    
    const data = { email: username, password: password };
    
    loginApi("user/login", data).then((res) => {
      if (res.status === 200) {
        const token = res.data.token;
        if (token) {
          if (res.data.profile.role === "admin") {
            localStorage.setItem("loginToken", token);
            toast.success('Login successfull!', { duration : 1500 });
                navigate("/admin");
              // setShowLoading(false)
            }else{
              localStorage.setItem("loginToken", token);
              toast.success('Login successfull!', { duration : 1500 });
                navigate("/user");
              // setShowLoading(false)
            }
          } else {
            toast.error("Login failed", {duration: 1500});
            // setShowLoading(false)
          }
      }else{
        toast.error("Something wrong", {duration : 1500})
        // setShowLoading(false)
      }
    })
    
  };


  return (
    <div className="w-full h-full flex justify-center items-center bg-[#588FFF]">
      <div className=" w-1/2 h-full bg-gradient-to-b from-blue-500 to-[#3777FA] flex flex-col space-y-10 justify-center items-center">
        <img className="" src={img3} alt="" />
        <div className=" flex flex-col justify-center items-center text-white space-y-3">
          <h1 className=" text-[16px]">Expert in stock recommendation</h1>
          <h1 className="text-[14px] text-gray-200">
            Trade hassle-free in Stocks, Futures & Options and Currencies of
            NSE, BSE & MCX
          </h1>
        </div>
      </div>
      <div className=" w-1/2 h-full bg-white flex flex-col justify-center items-center space-y-8">
        <img className=" w-52 " src={logo} alt=""/>
        <h1 className="text-[20px] font-semibold "> Welcome to<span className=" text-[#3777fa]"> AKTSMV TRADERS</span></h1>
        <div className=" w-1/2 flex flex-col" >
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Email or username"
              onChange={(e)=>setusername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Password"
              onChange={(e)=>setpassword(e.target.value)}
            />
            <p className="text-sm font-medium text-gray-600 mt-3 text-end">Forgot Password?</p>
          </div>
          <button
            type="submit"
            className="bg-[#3777FA] text-white p-3 rounded-md hover:bg-[#334e8e] w-full shadow-md"
            onClick={()=>onSubmit()}
          >
            Login
          </button>
          <h1 className="text-sm font-medium text-gray-600 mt-8 text-center">Don't have an account? <span className=" text-[#3777fa] cursor-pointer" onClick={()=>navigate("/rigester")}>Rigester</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
