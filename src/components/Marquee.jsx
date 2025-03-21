import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-3xl bg-[#004D43] overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex gap-10 whitespace-nowrap">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
          className="flex gap-10"
        >
          <h1 className="text-[15vw] leading-none font-bold">We Are Ochi</h1>
          <h1 className="text-[15vw] leading-none font-bold">We Are Ochi</h1>
          <h1 className="text-[15vw] leading-none font-bold">We Are Ochi</h1>
          <h1 className="text-[15vw] leading-none font-bold">We Are Ochi</h1>
          <h1 className="text-[15vw] leading-none font-bold">We Are Ochi</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
