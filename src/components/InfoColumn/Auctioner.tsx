import React from "react";
import Image from "next/image";

export default function Auctioner() {
  return (
    <div className="flex justify-between items-center w-full ">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image src="/images/person.jpg" width={50} height={50} alt="seller" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p className="text-sm">اسم المزايد</p>
          </div>
          <p className="text-xs text-slate-400 font-thin">20:44:00</p>
        </div>
      </div>
      <div className="rounded px-3 py2 bg-yellow-100 flex items-center justify-center">
        <p className="font-bold text-lg text-yellow-500">20+</p>
      </div>
    </div>
  );
}
