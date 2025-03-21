import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white  ">
      <div className="textstructure pt-40  px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, idx) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {idx == 1 ? (
                  <div className="w-[10vw] bg-rose-500 h-[5vw] mt-2.5 rounded-md"></div>
                ) : null}
                <div
                  key={idx}
                  className="uppercase text-[7.5vw] font-bold  leading-[6vw] tracking-tighter "
                >
                  {item}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between">
        {["For Pubic and Private companies", "From the first pitch to IPO"].map(
          (i, id) => {
            return (
              <>
                <p className="text-md font-light tracking-tight leading-none py-5 px-20">
                  {i}
                </p>
              </>
            );
          }
        )}
        <div className="Start flex items-center px-5">
          <div className="px-2 py-1 mt-2 border-[1px] border-zinc-500 font-light  rounded-full uppercase flex justify-center items-center">
            <h1>Start the project</h1>
            <div className="w-7 h-7 rounded  flex items-center justify-center ml-2">
              <span className="rotate-[45deg] rounded-full border-zinc-300 border p-1">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
