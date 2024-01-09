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
      <div className=" flex justify-end items-end gap-8">
        <button
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={active === 1}
          className=" flex justify-center items-center"
        >
          <FaAngleLeft className="h-4 w-4" />
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
          className=" flex justify-center items-center"
        >
          <FaAngleRight strokeWidth={2} className="h-4 w-4" />
        </button>
      </div>
    );
  }