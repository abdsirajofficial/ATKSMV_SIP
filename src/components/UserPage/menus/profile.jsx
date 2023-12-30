import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export const Profile = () => {
  return (
    <div className=" px-8 py-5">
      <div className="text-neutral-400 text-base font-semibold tracking-wide">
        Profile Details :-
      </div>
      <div className=" grid grid-cols-3 gap-5">
        <div>
          <div className="text-zinc-600 mt-5">User Id</div>
          <input
            type="text"
            value="10001"
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
            value="siraj"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="sirajcsc2000@gmail.com"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7945321694466"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7945321694466"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="8144228909"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
              value="2022-01-01"
              className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="92/100, pallivasal street, elavanasur, tamilnadu, 607202"
            className="w-[300px] h-[100px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="siraj"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156@apl"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
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
            value="siraj"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="sirajcsc@gmail.com"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
          />
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
            value="92/100, pallivasal street, elavanasur, tamilnadu, 607202"
            className="w-[300px] h-[100px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="siraj"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
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
            value="7848751156@apl"
            className="w-[300px] px-3 py-2 mt-3 rounded-md border border-gray-300 bg-[#F8FCFF] focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      <div className=" flex justify-start items-center space-x-5 mt-5">
                <button className=" flex justify-center items-center space-x-3  bg-gray-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105" onClick={()=>setaddYearPackage(false)}>
                <h1>Cancel</h1>
              </button>
                <button className=" flex justify-center items-center space-x-3  bg-gradient-to-l from-blue-700 via-blue-800 to-blue-800 text-white rounded-md py-2 px-6 shadow-md transform transition duration-300 hover:scale-105">
                <h1>Save</h1>
              </button>
              </div>
      <div className=" mt-10 rounded-xl border-2 p-4 bg-[#f8f2f2]">
        <h1 className=" font-bold text-gray-600 uppercase text-[15px]">Disclaimer :-</h1>
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
          ARQ is not an exchange approved product and any dispute related to this will not be dealt on the exchange platform.
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
          Please note that by submitting the above. Mentioned details, you are authoringing us to call ISMS you even though you may be registered under DND. we shall call ISMS for a period of to months
        </h1>
        <h1 className=" flex text-gray-600 mt-3 text-[14px] gap-2">
          <h1 className=" text-[18px]">
            <RiArrowRightDoubleLine />
          </h1>
          For issues related to cyber attacks. Call us at <span className=" font-semibold">+91 8144228909</span>  or Email us at <span className=" font-semibold">sirajcsc2000@gmail.com</span>
        </h1>
        <h1 className=" text-gray-600 mt-5">Above the details any changes contact or call us at <span className=" font-semibold">+91 8144228909</span>  or Email us at <span className=" font-semibold">sirajcsc2000@gmail.com</span></h1>
      </div>
    </div>
  );
};
