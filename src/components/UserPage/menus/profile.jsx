import React, { useEffect, useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { addNomineeApi, getProfileApi, getnomineeApi } from "../../../server/app";
import toast from "react-hot-toast";

export const Profile = () => {
  const [profile, setprofile] = useState([]);
  const [nominee, setnominee] = useState([]);


  const data = {
    userId: localStorage.getItem("userid"),
  };

  useEffect(() => {
    getProfileApi("user/profile", data, setprofile);
    getnomineeApi("user/getNominee", data, setnominee);
  }, []);

  const handleCancelBtn = () => {

   setnominee({
      name: "",
      email: "",
      aadhar: "",
      pan:"",
      mobile: "",
      account_no: "",
      upi_id: "",
      account_holder: "",
      IFSC: "",
      // userId: data.userId,
    });
  };

  const addNominee = () => {
    // Check if any of the fields are empty
    if (
      !nominee?.name ||
      !nominee?.email ||
      !nominee?.aadhar ||
      !nominee?.pan ||
      !nominee?.mobile ||
      !nominee?.account_no ||
      !nominee?.upi_id ||
      !nominee?.account_holder ||
      !nominee?.IFSC
    ) {
      // Display a message to fill in all required fields
      toast.error('Please fill in all required fields.', { duration: 1500 });
      return; // Exit the function if any field is empty
    }
  
    // If all fields are filled, proceed with API call
    const nomineeData = {
      name: nominee.name,
      email: nominee.email,
      aadhar: nominee.aadhar,
      pan: nominee.pan,
      mobile: nominee.mobile,
      account_no: nominee.account_no,
      upi_id: nominee.upi_id,
      account_holder: nominee.account_holder,
      IFSC: nominee.IFSC,
      userId: data.userId,
    };
  
    addNomineeApi("user/nominee", nomineeData).then((res) => {
      if (res.status === 201) {
        toast.success(res.data.message, { duration: 1500 });
      }
    });
  };
  

  return (
    <div className=" px-8 py-5">
      <div className="text-neutral-400 text-base font-semibold tracking-wide">
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
              className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
              readOnly
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
            className="w-full lg:w-[250px] h-[100px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
          />
        </div>
      </div>
      <div className="text-neutral-400 text-base font-semibold tracking-wide mt-8">
        Account Details :-
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
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
            className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
            readOnly
          />
        </div>
      </div>
        <div>
          <div className="text-neutral-400 text-base font-semibold tracking-wide mt-16">
            Nominee Details :-
          </div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                type="number"
                value={nominee ? nominee.pan : ""}
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
                className="w-full lg:w-[250px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) =>
                  setnominee({ ...nominee, upi_id: e.target.value })
                }
              />
            </div>
          </div>
            <div className=" flex justify-start items-start space-x-5 py-10">
              <button
                className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => handleCancelBtn()}
              >
                <h1>Cancel</h1>
              </button>
              <button
                className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105"
                onClick={() => addNominee()}
              >
                <h1>Add Nominee</h1>
              </button>
            </div>
        </div>

      <div className=" mt-10 rounded-xl border-2 p-4 bg-[#f8f2f2]">
        <h1 className=" font-bold text-gray-600 uppercase text-[15px]">
          Disclaimer :-
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          Investments in securities market are subject to markecct risk, read
          all the documents care fully before investing. we collect retain and
          use your control information for logitimate. Business purpos only to
          contact you and to provide you information & latest our products &
          services.
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          ARQ is not an exchange approved product and any dispute related to
          this will not be dealt on the exchange platform.
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          We do not sell or rent your contact information to third parties.
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          Please note that by submitting the above. Mentioned details, you are
          authoringing us to call ISMS you even though you may be registered
          under DND. we shall call ISMS for a period of to months
        </h1>
        <h1 className=" mt-5 font-medium text-[14px] text-red-400">For issues related to cyber attacks. Call us at <b> +91 8148867881</b> or Email us at <b>atksmvtraders@gmail.com</b></h1>
      </div>
    </div>
  );
};
