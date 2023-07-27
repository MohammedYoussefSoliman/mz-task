import React from "react";
import Image from "next/image";
import Icon from "@components/Icon";
import { cars } from "@constants/images";

export default function PostImage() {
  const glassyFinish =
    "bg-slate-600 bg-opacity-10 backdrop-blur-xl rounded drop-shadow-lg";
  return (
    <div className="w-full h-96 relative rounded overflow-hidden">
      <Image src={cars[3]} fill alt="post img" objectFit="cover" />
      <div className="w-full h-full absolute top-0 right-0  p-6 flex justify-between">
        <div className={`h-9 max-w-max ${glassyFinish} flex items-center`}>
          <div className="bg-white h-full w-9 rounded-r" />
          <div className="h-full flex items-center px-4 gap-2 py-2">
            <p className="text-white text-sm font-light">02:00</p>
            <div className="h-full w-px bg-slate-100 bg-opacity-40" />
            <div className="flex items-center gap-1 h-full">
              <Icon name="noun_show" size={14} />
              <p className="text-white text-xs font-light">3000</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className={`flex items-center justify-center rounded-full w-12 h-12 bg-slate-500 bg-opacity-20 backdrop-blur-xl drop-shadow-lg`}
          >
            <Icon name="flag_black" />
          </div>
          <div
            className={`flex items-center justify-center rounded-full w-12 h-12 bg-slate-500 bg-opacity-20 backdrop-blur-xl drop-shadow-lg`}
          >
            <Icon name="noun_Love" size={20} />
          </div>
          <div
            className={`flex items-center justify-center rounded-full w-12 h-12 bg-slate-500 bg-opacity-20 backdrop-blur-xl drop-shadow-lg`}
          >
            <Icon name="share_black" />
          </div>
        </div>
      </div>
    </div>
  );
}
