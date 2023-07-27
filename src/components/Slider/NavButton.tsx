import React from "react";
import Image from "next/image";
import Swiper from "swiper";
import Icon from "@components/Icon";

type Props = {
  direction: "top" | "bottom";
  swiper: Swiper;
};

export default function NavButton({ direction, swiper }: Props) {
  return (
    <button
      onClick={() => {
        if (direction === "top") swiper.slideNext();
        else swiper.slidePrev();
      }}
      className="flex items-center justify-center rounded p-1 bg-white"
    >
      <Icon name={`arrow_${direction}`} size={16} />
    </button>
  );
}
