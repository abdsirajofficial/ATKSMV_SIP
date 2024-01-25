import React, { useEffect, useState } from 'react'
import { getDashboard } from '../../../server/app';
import { FaWallet } from "react-icons/fa";
import FormateCurrency from "../../formateCurrency";

const DashBoards = () => {
  const [data, setData] = useState([]);

  const fromColor = [
    'from-green-500',
    'from-blue-500',
    'from-yellow-500',
    'from-black-500',
    'from-blue-800',
    'from-grey-500',
  ]

  const toColor = [
    'to-yellow-500',
    'to-green-500',
    'to-blue-500',
    'to-blue-500',
    'to-blue-500',
    'to-black-500',
  ]


  useEffect(() => {
    getDashboard(setData)
  }, [])


  return (
    <div className=" sm:px-8 md:py-5 py-10 w-full h-full flex flex-col">

      <div className=' px-5 py-5'>
        <p className=' text-[#172b4d] font-semibold text-xl'>Over All</p>
        <div className=' h-fit md:h-52 w-full flex flex-wrap gap-7'>

          {/* <div className='h-36 w-[15rem] bg-white rounded-2xl shadow-lg border p-3 flex flex-col justify-center relative'>
            <p className=' text-[#8898aa] text-lg font-medium'>Total amount</p>
            <div className=' flex space-x-2 text-2xl font-bold text-[#172b4d]'>
              <p>RS</p>
              <p>5000</p>
            </div>
            <div className=' absolute right-4 h-12 w-12 bg-black rounded-full'>

            </div>
          </div>

          <div className='h-36 w-[15rem] bg-white rounded-2xl shadow-lg border p-3 flex flex-col justify-center relative'>
            <p className=' text-[#8898aa] text-lg font-medium'>Total returned</p>
            <div className=' flex space-x-2 text-2xl font-bold text-[#172b4d]'>
              <p>RS</p>
              <p>5000</p>
            </div>
            <div className=' absolute right-4 h-12 w-12 bg-black rounded-full'>

            </div>
          </div> */}
          {data.slice(0, 2).map((item, index) => (
            <div key={index} className='h-36 w-[15rem] bg-white rounded-2xl shadow-lg border p-3 flex flex-col justify-center relative'>
              <p className='text-[#8898aa] text-lg font-medium'>{item?.title}</p>
              <div className='flex space-x-2 text-2xl font-bold text-[#172b4d]'>
                {<FormateCurrency amount={item?.amount} />}
              </div>
              <div className={`absolute right-4 flex justify-center items-center h-12 w-12 bg-gradient-to-r shadow-md rounded-full ${fromColor[(index) % fromColor.length]} ${toColor[(index - 1) % toColor.length]}`}>
                <FaWallet />
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className=' px-5 py-10'>
        <p className=' text-[#172b4d] font-semibold text-xl'>This month</p>
        <div className=' h-52 w-full flex flex-wrap gap-7'>

          {data.slice(2).map((item, index) => (
            <div key={index} className='h-36 w-[15rem] bg-white rounded-2xl shadow-lg border p-3 flex flex-col justify-center relative'>
              <p className='text-[#8898aa] text-lg font-medium'>{item?.title}</p>
              <div className='flex space-x-2 text-2xl font-bold text-[#172b4d]'>
                <p>{item?.title === 'No. Paid' || item?.title === 'No. Withdraw' ? item?.amount : <FormateCurrency amount={item?.amount} />}</p>

              </div>
              <div className={`absolute right-4 h-12 w-12 flex justify-center items-center bg-gradient-to-r  rounded-full shadow-md  ${fromColor[(index - 1) % fromColor.length] || 'from-orange-900 '  } ${toColor[(index - 1) % toColor.length]}`}>
                <FaWallet className='' />
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default DashBoards
