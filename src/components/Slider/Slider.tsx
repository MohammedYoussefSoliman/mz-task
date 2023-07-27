import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Swiper from "swiper";
import { cars } from "@constants/images";
import NavButton from "./NavButton";
import Slide from "./Slide";

export default function Slider() {
  const [swiper, setSwiper] = React.useState<Swiper | null>(null);
  return (
    <div className="h-100 flex flex-col w-20 gap-2 mr-auto items-center">
      {swiper && <NavButton swiper={swiper} direction="top" />}
      <ReactSwiper
        spaceBetween={80}
        slidesPerView={5}
        direction={"vertical"}
        modules={[Navigation, Autoplay]}
        loop
        className="h-96 ml-auto"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {cars.map((car) => (
          <SwiperSlide key={car}>
            <Slide image={car} />
          </SwiperSlide>
        ))}
      </ReactSwiper>
      {swiper && <NavButton swiper={swiper} direction="bottom" />}
    </div>
  );
}
