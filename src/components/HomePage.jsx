import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img8 from "../assets/img8.svg";
import img9 from "../assets/img9.svg";
import logo from "../assets/logo1.svg";
import logo1 from "../assets/logoColor.svg";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PieChart } from "react-minimal-pie-chart";
import { IoIosMail, IoLogoWhatsapp, IoMdLock } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiRupee } from "react-icons/bi";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import FormateCurrency from "./formateCurrency";

export const HomePage = () => {
  const navigate = useNavigate();

  const [showBorder, setshowBorder] = useState(true);
  const [startValue, setstartValue] = useState(500);
  const [yrSliderValue, setyrsSliderValue] = useState(10);
  const [returnVlaue, setreturnVlaue] = useState(12);
  const [InvestmentAmt, setInvestmentAmt] = useState(0);
  const [ReturnAmt, setReturnAmt] = useState(0);

  const [sipValue, setSipValue] = useState(0);

  const [LumInvestAmt, setLumInvestAmt] = useState(500);
  const [LumreturnVlaue, setLumreturnVlaue] = useState(12);
  const [LumyrSliderValue, setLumyrsSliderValue] = useState(10);
  // const [LumInvestmentAmt, setLumInvestmentAmt] = useState(0);
  const [LumValue, setLumSipValue] = useState(0);
  const [LumReturnAmt, setLumReturnAmt] = useState(0);


  useEffect(() => {
    const p = parseFloat(startValue);
    const t = parseFloat(yrSliderValue);
    const r = parseFloat(returnVlaue);
    const n = 12;
    const sip =
      p *
      (((Math.pow(1 + r / (100 * n), n * t) - 1) / (r / (100 * n))) *
        (1 + r / (100 * n)));
    setSipValue(Math.round(sip));
    setInvestmentAmt(p * n * t);
    setReturnAmt(Math.round(sip) - p * n * t);
  }, [startValue, yrSliderValue, returnVlaue]);

  useEffect(() => {
    const p = parseFloat(LumInvestAmt); // Principal amount (start value)
    const t = parseFloat(LumyrSliderValue); // Time period in years
    const r = parseFloat(LumreturnVlaue); // Annual interest rate
    // const n = 1; // Lump sum, so compounding frequency is once a year

    // Calculate future value using compound interest formula for lump sum
    const futureValue = p * Math.pow(1 + r / 100, t);

    // Update the state variables
    setLumSipValue(Math.round(futureValue)); // Set lump sum value
    // setLumInvestmentAmt(p); // Since it's a lump sum, investment amount is just the principal amount
    setLumReturnAmt(Math.round(futureValue) - p); // Calculate returns by subtracting principal from future value
  }, [LumInvestAmt, LumyrSliderValue, LumreturnVlaue]);

  // const ChatLink = ({ phoneNumber }) => {
  const handleChatClick = () => {
    window.location.href = "https://wa.me/8148867881";
  };

  const formattedValue = FormateCurrency({ amount: startValue });


  return (
    <div className=" w-full h-full">
      <div className=" px-5 md:px-20 bg-gradient-to-b from-blue-500 to-[#3777FA] text-white ">
        <div className=" flex justify-between items-center pt-8">
          <div className="text-2xl font-medium">
            <img src={logo} alt="" className=" w-26 md:w-56" />
          </div>
          <div className=" flex justify-center items-center space-x-5">
            <button
              onClick={() => navigate("/login")}
              className=" flex md:justify-between ml-[15px] mb-[8px] items-center md:gap-1 md:mt-6 select-none rounded-lg bg-amber-500 py-[5px] md:py-3 px-[18px] md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            >
              <h1>
                <IoMdLock className=" text-[14px]" />
              </h1>
              Login
            </button>
          </div>
        </div>

        <div className=" w-full h-full md:flex justify-center items-start md:items-center md:px-8 py-10  space-x-10">
          <div className=" md:w-1/2">
            <h1 className=" text-[22px] md:text-[52px] font-bold mb-4">
              ATKSMV TRADERS - Your Investing Partner
            </h1>
            <p className=" md:text-[18px] font-light">
              Welcome to ATKSMV Traders, your trusted partner in the world of
              trading. We provide top-notch services and support to help you
              succeed in your investing journey.
            </p>
            <button
              className=" flex justify-center tems-center ml-6 gap-3 my-[20px] mt-6 select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => navigate("/register")}
            >
              <p>Register Now</p>
              <div>
                <FaArrowRightLong />
              </div>
            </button>
          </div>

          <div className=" w-fit  md:w-1/2">
            <img src={img1} alt="no img" className=" pb-6" />
          </div>
        </div>
      </div>

      <div className="p-10 md:px-28 md:py-16 flex flex-col justify-start items-start space-y-5">
        <h1 className="text-[22px] md:text-[36px]  font-semibold mb-4 ">
          Benefits of investing in gold with
          <span className=" text-[#3777FA]"> ATKSMV traders </span>
        </h1>
        <ul className="text-[15px] space-y-5">
          <li>
            1.ATKSMV traders offers 1000 plus online gold investment scheme that
            belongs from different houses,
          </li>
          <li>2.Find the gold investment to invest in ATKSMV traders</li>
          <li>
            3.ATKSMV traders gold investment (GI) is looked with features that
            simplify the investment journey and help take the best decision
          </li>
          <li>
            4.our advanced gi tools to calculate you can make investment
            decision we believe in complete transparency and safety
          </li>
        </ul>

        <div className=" md:flex md:space-x-10 pt-5 font-semibold">
          <div className=" border-2 shadow-sm rounded-lg mt-[15px] px-4 md:p-3 md:px-4">
            <img src={img4} alt="" className=" w-16 h-16" />
            <h1 className=" py-3 text-[20px] font-semibold ">0% commission</h1>
            <p className=" text-[14px] md:text-[16px] font-light tracking-wide pb-3 text-gray-500">
              Choose from our vast investment portfolio at zero percentage
              commission and enjoy all the benefits
            </p>
          </div>
          <div className=" border-2 shadow-sm rounded-lg mt-[15px] px-4 md:p-3 md:px-4">
            <img src={img5} alt="" className=" w-16 h-16" />
            <h1 className=" py-3 text-[20px] font-semibold ">Trust</h1>
            <p className=" font-light tracking-wide pb-3 text-gray-500">
              We have guided the faith of thousand plus happy customers over the
              last two years
            </p>
          </div>
          <div className=" border-2 shadow-sm rounded-lg mt-[15px] px-4 md:p-3 md:px-4">
            <img src={img6} alt="" className=" w-16 h-16" />
            <h1 className=" py-3 text-[20px] font-semibold ">100% Retruns</h1>
            <p className=" font-light tracking-wide pb-3 text-gray-500">
              We have guided the faith of thousand plus happy customers over the
              last two years
            </p>
          </div>
        </div>
      </div>
      <div className=" px-5 md:px-28 py-16 font-semibold">
        <h1 className="text-[36px]  font-semibold mb-4 ">SIP Calculator</h1>
        <p className=" font-light tracking-wide">
          A Systematic Investment Plan (SIP) calculator is a tool that helps
          investors estimate potential returns on their investments in a SIP. It
          takes into account the amount invested, investment frequency (e.g.,
          monthly), investment duration, and expected annual returns to provide
          outputs such as total investment, wealth gain, total returns,
          annualized returns, and final investment value. It helps investors
          make informed decisions about their investment strategy by offering
          insights into the potential growth of their investments over time.
        </p>

        <div className=" flex space-x-5 py-5 cursor-pointer text-[18px]">
          <h1
            className={`font-medium p-2 ${showBorder === true
              ? " text-[14px] md:text-[18px] text-[#3777FA] border-b-4 border-[#3777FA]"
              : "text-[14px] md:text-[18px] text-gray-400"
              }`}
            onClick={() => setshowBorder(true)}
          >
            SIP
          </h1>
          <h1
            className={`font-medium p-2 ${showBorder === false
              ? " text-[14px] md:text-[18px] text-[#3777FA] border-b-4 border-[#3777FA]"
              : "text-[14px] md:text-[18px] text-gray-400"
              }`}
            onClick={() => setshowBorder(false)}
          >
            Lumpsum
          </h1>
        </div>
        {showBorder && (
          <div className=" w-full md:flex  border-2 rounded-lg shadow-sm  ">
            <div className=" w-full md:w-1/2 p-6  border-r-2">

              <div className=" w-full h-full flex flex-col justify-between py-6">
                {/* <div className=" w-full h-full flex flex-col justify-center items-center p-6 border-2 border-blue-800 rounded-md space-y-3">
                  <h1 className=" text-[14px]">ENTER AMOUNT</h1>
                  <div className=" flex">
                    <h1>
                      <FaIndianRupeeSign />
                    </h1>
                    <input
                      type="number"
                      className="  w-[100px] cursor-pointer text-[18px] font-bold"
                      value={startValue}
                      onChange={(e) =>
                        setstartValue(e.target.value ? e.target.value : "0")
                      }
                    />
                  </div>
                </div> */}
                <div className="  pt-4">
                  <div className=" w-full flex justify-between items-center">
                    <h1>Total investment</h1>
                    <div className=" flex justify-center items-center space-x-3 bg-[#c1d5fd] text-[#3777fa]  px-1">
                      <p className="text-[20px]"><BiRupee /></p>
                      <input
                        type="number"
                        className=" max-w-[100px] min-w-[80px] text-[18px] font-bold bg-[#c1d5fd] p-1"
                        value={startValue}
                        min="500"
                        onChange={(e) =>
                          setstartValue(e.target.value ? e.target.value : "500")
                        }
                      />
                    </div>
                  </div>
                  <div className=" pt-4">
                    <input
                      type="range"
                      min="500"
                      max="500000"
                      step="100"
                      className="w-full "
                      value={startValue}
                      onChange={(e) => setstartValue(e.target.value)}
                    />
                  </div>
                </div>

                <div className="  pt-4">
                  <div className=" flex justify-between items-center">
                    <h1>Expected Rate of Return</h1>
                    <div className=" flex ">
                      <input
                        type="number"
                        className=" w-[80px] text-[18px] font-bold bg-[#c1d5fd] p-1 text-blue-600"
                        value={returnVlaue}
                        onChange={(e) => setreturnVlaue(e.target.value)}
                      />
                      <p className=" bg-[#c1d5fd] text-blue-600 pt-1 pr-1">%</p>
                    </div>
                  </div>
                  <div className=" pt-4">
                    <input
                      type="range"
                      min="8.0"
                      max="50.0"
                      step="0.1"
                      className="w-full "
                      value={returnVlaue}
                      onChange={(e) => setreturnVlaue(e.target.value)}
                    />
                    <div className=" flex justify-between items-center text-gray-400 text-[14px]">
                      <h1>8%</h1>
                      <h1>50%</h1>
                    </div>
                  </div>
                </div>

                <div className="  pt-4">
                  <div className=" flex justify-between items-center">
                    <h1>Time Period</h1>
                    <div className=" flex ">
                      <input
                        type="number"
                        className=" w-[55px] text-[18px] font-bold bg-[#c1d5fd] text-blue-600 p-1"
                        value={yrSliderValue}
                        onChange={(e) => setyrsSliderValue(e.target.value)}
                      />
                      <p className=" bg-[#c1d5fd] text-blue-600 pt-1 pr-1">Yrs</p>
                    </div>
                  </div>
                  <div className=" pt-4">
                    <input
                      type="range"
                      min="0"
                      max="30"
                      className="w-full "
                      value={yrSliderValue}
                      onChange={(e) => setyrsSliderValue(e.target.value)}
                    />
                    <div className=" flex justify-between items-center text-gray-400 text-[14px]">
                      <h1>1Yrs</h1>
                      <h1>30Yrs</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className=" w-full flex flex-col justify-center items-center p-6 mt-6 ">
              <h1 className=" text-gray-500 md:text-[18px]">
                The total value of your investment after{" "}
                <span className=" font-bold text-black">
                  {yrSliderValue} Year
                </span>{" "}
                will be
              </h1>
              <h1 className=" flex font-bold text-[18px] md:text-[36px] pt-4">

                <h1>{<FormateCurrency amount={sipValue} /> || 0} </h1>
              </h1>
              <div className="  md:flex justify-start md:justify-center items-start md:items-center md:space-x-16 space-y-10 pt-6">
                <div>
                  <PieChart
                    style={{
                      height:
                        window.innerWidth <= 768
                          ? "200px" // Mobile devices
                          : window.innerWidth <= 1024
                            ? "250px" // Tablets
                            : "300px", // Laptops and desktops
                      width:
                        window.innerWidth <= 768
                          ? "200px" // Mobile devices
                          : window.innerWidth <= 1024
                            ? "250px" // Tablets
                            : "300px", // Laptops and desktops
                    }}
                    data={[
                      {
                        title: "Investment Amount",
                        value: InvestmentAmt,
                        color: "#eef0ff ",
                      },
                      {
                        title: "Return Amount",
                        value: ReturnAmt,
                        color: "#5367ff",
                      },
                    ]}
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-12 bg-[#eef0ff] mr-2"></div>
                    <div className=" space-y-2">
                      <h1>Invested Amount</h1>
                      <p className=" flex font-bold text-[18px]">
                        <FormateCurrency amount={InvestmentAmt} />

                      </p>
                    </div>
                  </div>
                  <div className="flex items-center pt-4">
                    <div className="w-3 h-12 bg-[#5367ff] mr-2"></div>
                    <div className=" space-y-2">
                      <h1>Est. Returns</h1>
                      <p className=" flex font-bold text-[18px]">
                        <FormateCurrency amount={ReturnAmt} />

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showBorder && (
          <div className="w-full md:flex  border-2 rounded-lg shadow-sm  ">
            <div className=" w-full md:w-1/2 p-6  border-r-2">
              <div className=" w-full h-full flex flex-col justify-between py-6">

                <div className="  pt-4">
                  <div className=" w-full flex justify-between items-center">
                    <h1>Total investment</h1>
                    <div className=" flex justify-center items-center space-x-3 bg-[#c1d5fd] text-[#3777fa]  px-1">
                      <p className="text-[20px]"><BiRupee /></p>
                      <input
                        type="number"
                        className=" max-w-[100px] min-w-[80px] text-[18px] font-bold bg-[#c1d5fd] p-1"
                        value={LumInvestAmt}
                        onChange={(e) => setLumInvestAmt(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className=" pt-4">
                    <input
                      type="range"
                      min="500"
                      max="500000"
                      step="100"
                      className="w-full "
                      value={LumInvestAmt}
                      onChange={(e) => setLumInvestAmt(e.target.value)}
                    />

                  </div>
                </div>

                <div className="  pt-4">
                  <div className=" flex justify-between items-center">
                    <h1>Expected return rate (p.a)</h1>
                    <div className=" flex justify-center items-center space-x-3 bg-[#c1d5fd] text-[#3777fa]  px-1">
                      <input
                        type="number"
                        className=" w-[55px] text-[18px] font-bold bg-[#c1d5fd] p-1"
                        value={LumreturnVlaue}
                        onChange={(e) => setLumreturnVlaue(e.target.value)}
                      />
                      <p className=" text-[20px] font-bold">%</p>
                    </div>
                  </div>
                  <div className=" pt-4">
                    <input
                      type="range"
                      min="1"
                      max="50.0"
                      step="0.1"
                      className="w-full "
                      value={LumreturnVlaue}
                      onChange={(e) => setLumreturnVlaue(e.target.value)}
                    />
                    <div className=" flex justify-between items-center text-gray-400 text-[14px]">
                      <h1>1</h1>
                      <h1>50</h1>
                    </div>
                  </div>
                </div>

                <div className="  pt-4">
                  <div className=" flex justify-between items-center">
                    <h1>Time period</h1>
                    <div className=" flex justify-center items-center space-x-3 bg-[#c1d5fd] text-[#3777fa]  px-1">
                      <input
                        type="number"
                        className=" w-[50px] text-[18px] font-bold bg-[#c1d5fd] p-1"
                        value={LumyrSliderValue}
                        onChange={(e) => setLumyrsSliderValue(e.target.value)}
                      />
                      <p className=" font-bold text-[18px]">Yrs</p>
                    </div>
                  </div>
                  <div className=" pt-4">
                    <input
                      type="range"
                      min="0"
                      max="30"
                      className="w-full "
                      value={LumyrSliderValue}
                      onChange={(e) => setLumyrsSliderValue(e.target.value)}
                    />
                    <div className=" flex justify-between items-center text-gray-400 text-[14px]">
                      <h1>0Yrs</h1>
                      <h1>30Yrs</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="  w-full flex flex-col justify-center items-center p-6 mt-6 ">
              <h1 className=" text-gray-500 md:text-[18px]">
                The total value of your investment after{" "}
                <span className=" font-bold text-black">
                  {LumyrSliderValue} Year
                </span>{" "}
                will be
              </h1>
              <h1 className=" flex font-bold text-[18px] md:text-[36px] pt-4">

                <h1>{<FormateCurrency amount={LumValue} /> || 0} </h1>
              </h1>
              <div className="  md:flex justify-start md:justify-center items-start md:items-center md:space-x-16 space-y-10 pt-6">
                <div>
                  <PieChart
                    style={{
                      height:
                        window.innerWidth <= 768
                          ? "200px" // Mobile devices
                          : window.innerWidth <= 1024
                            ? "250px" // Tablets
                            : "300px", // Laptops and desktops
                      width:
                        window.innerWidth <= 768
                          ? "200px" // Mobile devices
                          : window.innerWidth <= 1024
                            ? "250px" // Tablets
                            : "300px", // Laptops and desktops
                    }}
                    data={[
                      {
                        title: "Investment Amount",
                        value: parseInt(LumInvestAmt),
                        color: "#eef0ff",
                      },
                      {
                        title: "Return Amount",
                        value: LumReturnAmt,
                        color: "#5367ff",
                      },
                    ]}
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-12 bg-[#eef0ff] mr-2"></div>
                    <div className=" space-y-2">
                      <h1>Invested Amount</h1>
                      <p className=" flex font-bold text-[18px]">
                        <FormateCurrency amount={LumInvestAmt} />

                      </p>
                    </div>
                  </div>
                  <div className="flex items-center pt-4">
                    <div className="w-3 h-12 bg-[#5367ff] mr-2"></div>
                    <div className=" space-y-2">
                      <h1>Est. Returns</h1>
                      <p className=" flex font-bold text-[18px]">
                        <FormateCurrency amount={LumReturnAmt} />

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" p-5 md:px-28 py-16 flex flex-col justify-start items-start space-y-5 font-semibold">
        <h1 className=" text-[24px] md:text-[36px]  font-semibold mb-4 ">What is SIP?</h1>
        <p className=" font-light tracking-wide">
          An SIP, or Systematic Investment Plan, is a method of investing money
          into mutual funds or stocks. It allows you to invest a fixed amount at
          regular intervals over time rather than making a large, one-time
          investment.
        </p>
        <p className=" font-light tracking-wide">
          SIPs offer investors an easy, convenient way to invest without having
          to worry about timing the market. You can just set up an account and
          benefit from rupee-cost averaging over time. SIPs are also known for
          their flexibility, as you can start by investing a small amount and
          eventually increase your contribution as your financial situation
          improves.
        </p>
        <p className=" font-light tracking-wide">
          To calculate the potential returns of your investment via this mode,
          you can use a SIP calculator online.
        </p>
        <h1 className="text-[24px] md:text-[36px]  font-semibold mb-4 pt-8">
          What is an SIP Calculator?
        </h1>
        <p className=" font-light tracking-wide">
          The Systematic Investment Plan Calculator, or a SIP calculator, is a
          free online financial tool available on the Angel One website that
          helps you calculate your returns from SIP investments. You can use it
          to compare the returns from various SIP investment strategies.
        </p>
        <p className=" font-light tracking-wide">
          A Mutual Fund SIP calculator helps you estimate the future value of
          your SIP investments. It takes into account various parameters,
          including the investment amount, i.e., the regular SIP contributions,
          the expected rate of return, and the investment tenure. By inputting
          these details, you can get a sense of how your investments may grow
          over time. While the final maturity amount of your SIP investment may
          differ due to various external factors, you can get an approximate
          understanding of the expected returns.
        </p>
        <p className=" font-light tracking-wide">
          Once you have a clear idea of the expected returns and commitment
          required, you can then make a more informed decision about which SIP
          strategy is most viable for you.
        </p>
        <h1 className="text-[24px] md:text-[36px]  font-semibold mb-4 pt-8">
          How does SIP Calculator Work?
        </h1>
        <p className=" font-light tracking-wide">
          Our SIP calculator online takes three main factors into account:
        </p>
        <p className=" font-light tracking-wide">
          <ol>
            <li>1.Amount of the initial investment (P)</li>
            <li>2.Frequency of the investment (n).</li>
            <li>3.Expected rate of return (r)</li>
          </ol>
        </p>
        <p className=" font-light tracking-wide">
          By inputting these values, the calculator determines the final
          invested amount and the estimated returns at the end of a specific
          period of time.
        </p>
        <h1 className="text-[24px] md:text-[36px]  font-semibold mb-4 pt-8">
          How Are SIP Returns Calculated?
        </h1>
        <p className=" font-light tracking-wide">
          The SIP returns are calculated by entering the variable numbers
          mentioned above into the Systematic Investment Plan calculator.
        </p>
        <p className=" font-light tracking-wide">
          The SIP calculator formula used is,
        </p>
        <p className=" font-light tracking-wide">
          A = P × (1 + r)^n - 1 / r × (1 + r)
        </p>
        <p className=" font-light tracking-wide">
          <ol>
            <li>Where,</li>
            <li>A- Estimated Returns from the SIP</li>
            <li>P - Amount you invest in SIP</li>
            <li>r - Rate of Return you are expecting to get</li>
            <li>n - Number of total SIPs made</li>
          </ol>
        </p>
      </div>
      <div className="  bg-[#3f5bd9] md:flex justify-between items-center px-5 md:px-20 py-20 shadow-lg font-semibold">
        <div className=" flex flex-col justify-start items-start md:w-1/2 space-y-3">
          <h1 className=" text-white font-semibold md:text-[48px]">
            We Are Here To Help You!
          </h1>
          <h1 className=" text-gray-200 md:text-[18px] tracking-wider">
            {" "}
            If you have a specific question or topic you'd like help with,
            please let me know, and I'll do my best to provide the information
            or assistance you're looking for your queries resolve faster
          </h1>
        </div>
        <div className=" w-fit md:w-1/2 flex flex-col justify-center items-center pt-10 md:pt-0">
          <img src={img8} alt="" className=" " />
        </div>
      </div>
      <div className=" w-full px-5 md:px-28 pt-20 flex flex-col justify-center items-center space-y-5 mt-8 font-semibold">
        <h1 className=" font-medium text-[26px] md:text-[48px]">Want to connect with us?</h1>
        <h1 className=" text-gray-500 md:text-[18px]">
          Our support team will be happy to assist you
        </h1>
      </div>
      <div className=" w-full md:px-28 md:flex justify-between items-center font-semibold">
        <div className=" md:w-1/2">
          <img src={img9} alt="" className=" w-full md:w-fit" />
        </div>
        <div className=" md:w-1/2 flex px-5 md:px-0 flex-col space-y-5 justify-start items-start">
          <h1 className=" font-semibold text-[22px] md:text-[28px]">Support</h1>
          <h1 className="  md:text-[18px]">
            Contact with our support team to get your queries resolved.
          </h1>
          <div className=" md:flex md:space-x-5 space-y-5">
            <Link
              to="#"
              className=" flex justify-center items-center gap-3 bg-[#3f5bd9] p-4 rounded-lg text-white"
              onClick={handleChatClick}
            >
              <IoLogoWhatsapp className=" text-[24px]" /> +91 8148867881
            </Link>
            {/* <Link to="#" onClick={handleChatClick}>
      Open WhatsApp Chat
    </Link> */}
            <a
              href="mailto:atksmvtraders@gmail.com"
              className="flex justify-center items-center gap-3 border-2 p-4 rounded-lg text-black"
            >
              <IoIosMail className=" text-[24px]" /> atksmvtraders@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#1b3a7f] pl-5 md:pl-28 pr-3 pt-8 pb-4 mt-10  md:mt-0">
        <h1 className="text-2xl font-medium text-white">
          <img src={logo} alt="" className=" w-52" />
        </h1>
        <div className=" md:flex justify-between items-center">
          <h1 className="text-white text-[14px] mt-3">
            &copy;2024 ATKSMV TRADERS. All rights reserved{" "}
          </h1>
          <h1 className=" text-center md:text-end text-[13px] text-gray-400 mt-5 md:mt-0">
            Developed by Siraj, Salman, Basith
          </h1>
        </div>
      </div>
    </div>
  );
};
