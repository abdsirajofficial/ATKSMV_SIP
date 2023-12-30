import React from 'react'

export const AdminHistory = () => {
  return (
    <div className=" px-8 py-5">
      <div
        className="w-full h-auto shadow-sm grid grid-cols-5 grid-rows-1 text-center rounded py-3  text-[14px] hover:bg-blue-200 bg-white"
      >
        <p className=" flex justify-center items-center">SI No</p>
        <p className=" flex justify-center items-center">User ID</p>
        <p className=" flex justify-center items-center">Amount</p>
        <p className=" flex justify-center items-center">Date</p>
        <p className=" flex justify-center items-center">Status</p>
      </div>
    </div>
  )
}
