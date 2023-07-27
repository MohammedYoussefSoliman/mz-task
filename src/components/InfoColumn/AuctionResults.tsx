import React from "react";
import Image from "next/image";

export default function AuctionResults() {
  return (
    <div className="flex gap-1 w-full">
      <div className="flex-1 h-24 relative">
        <div className="flex flex-col absolute top-0 h-20 justify-center items-center gap-1 bg-violet-900 rounded w-full">
          <p className="text-xs font-thin text-white">القيمة الحالية للمزاد</p>
          <p className="text-md font-bold text-white mb-3 mt-2">5000$</p>
        </div>
        <div className="absolute flex items-center p-1 bg-white rounded-full gap-2 drop-shadow-md bottom-1 right-12">
          <div className="w-4 h-4 rounded-full overflow-hidden border">
            <Image
              src="/images/person.jpg"
              width={14}
              height={14}
              alt="winner"
            />
          </div>
          <p className="text-xs font-thin text-violet-900">أحمد الرائد</p>
        </div>
      </div>
      <div className="flex-1 h-20 relative">
        <div className="flex w-full flex-col absolute top-0 h-20 justify-center items-center gap-2 bg-violet-100 rounded">
          <p className="text-xs font-thin text-violet-800">
            القيمة الحالية بعد الضريبة
          </p>
          <p className="text-md font-bold text-violet-800 mb-3 mt-2">5050$</p>
        </div>
      </div>
    </div>
  );
}
