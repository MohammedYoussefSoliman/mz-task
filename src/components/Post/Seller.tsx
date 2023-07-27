import React from "react";
import Image from "next/image";
import Icon from "@components/Icon";
import Rating from "@components/Rating";

export default function Seller() {
  return (
    <div className="flex gap-2 px-2 items-center">
      <div className="relative w-14 h-14">
        <div className="absolute rounded-full w-12 h-12 overflow-hidden border">
          <Image src="/images/person.jpg" fill objectFit="cover" alt="seller" />
        </div>
        <button className="absolute bg-white w-6 h-6 flex items-center justify-center rounded-full bottom-1 left-1 drop-shadow-md">
          <Icon name="heart_dark" size={12} />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <p className="text-sm">اسم البائع</p>
          <Rating rate={3} />
        </div>
        <p className="text-xs text-slate-600 font-light">9665456422+</p>
      </div>
    </div>
  );
}
