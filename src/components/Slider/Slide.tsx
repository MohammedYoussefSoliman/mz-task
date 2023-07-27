import React from "react";
import Image from "next/image";

type Props = {
  image: string;
};

export default function Slide({ image }: Props) {
  return (
    <div className="w-20 h-20 bg-slate-300 flex justify-center items-center rounded overflow-hidden">
      <Image
        src={image}
        width={80}
        height={80}
        alt="car thumb"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      />
    </div>
  );
}
