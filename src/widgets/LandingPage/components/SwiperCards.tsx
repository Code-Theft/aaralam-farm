"use client";

// Import Swiper React components
import "swiper/css";
import Image from "@components/Image";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperData = [
  { imgUrl: "/images/assets/slide/slide1.png", title: "Farm Tourism" },
  { imgUrl: "/images/assets/slide/slide2.png", title: "Farm Products" },
  { imgUrl: "/images/assets/slide/slide3.png", title: "Farm Plants" },
];

const SwiperCards = () => {
  return (
    <Swiper spaceBetween={0} slidesPerView={2.5}>
      {swiperData?.map((item, index) => (
        <SwiperSlide className="swiper" key={`mapped_key_${index + 1}`}>
          <div className="swiper-cards">
            <Image
              src={item?.imgUrl}
              alt=""
              height={350}
              width={250}
              className="swiper-img"
            />
            <div className="swiper-title">{item?.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCards;
