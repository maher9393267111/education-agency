"use client"
import { MoveLeft, MoveRight } from "lucide-react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LegalSearchCard from "./card";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

export default function ServicesSlider({ data }) {
  return (
    <div className="relative mt-8 px-[5%]">
      <div className="relative w-full sm:w-[90%] lg:w-[95%] mx-auto">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            300: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: ".arrow-right-1", prevEl: ".arrow-left-1" }}
          autoHeight={true}
        >
          {data?.map((item, i) => {
            return (
              <SwiperSlide key={item.id}>
                <LegalSearchCard data={item} animationDelay={i * 150} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <button className="arrow-left-1 hidden sm:block absolute bg-[#4E6BFF] rounded-full p-2 text-white top-[40%] translate-y-1/2  left-4">
        <MoveLeft />
      </button>
      <button className="arrow-right-1 hidden sm:block absolute bg-[#4E6BFF] rounded-full p-2 text-white top-[40%] translate-y-1/2 right-4">
        <MoveRight />
      </button>

      <div className="flex justify-center gap-6 sm:hidden mt-6">
        <button className="arrow-left-1 bg-[#4E6BFF] rounded-full p-2 text-white">
          <MoveLeft />
        </button>
        <button className="arrow-right-1  bg-[#4E6BFF] rounded-full p-2 text-white">
          <MoveRight />
        </button>
      </div>
    </div>
  );
}
