import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from 'react-icons/fa6';

export function Pagination({active,setActive,total}) {

    const next = () => {
      if (active === total) return;
   
      setActive(active + 1);
    };
   
    const prev = () => {
      if (active === 1) return;
   
      setActive(active - 1);
    };
   
    return (
      <div className=" flex justify-end items-center gap-8">
        <button
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={active === 1}
          className=" flex justify-center items-center border-2 p-3 bg-[#212121] rounded-lg"
        >
          <FaAngleLeft className="h-4 w-4 text-white" />
        </button>
        <p className="font-normal">
          Page <strong className="text-gray-900">{active}</strong> of{" "}
          <strong className="text-gray-900">{total}</strong>
        </p>
        <button
          size="sm"
          variant="outlined"
          onClick={next}
          disabled={active === total}
          className="flex justify-center items-center border-2 p-3 bg-[#212121] rounded-lg"
        >
          <FaAngleRight strokeWidth={2} className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }