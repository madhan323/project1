import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      loop={true}
    >
      <SwiperSlide>
        <img style={{width: "100%", objectFit: "cover"}} src="https://picsum.photos/800/400?1" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img style={{width: "100%", objectFit: "cover"}} src="https://picsum.photos/800/400?2" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img style={{width: "100%", objectFit: "cover"}} src="https://picsum.photos/800/400?3" alt="" />
      </SwiperSlide>

    </Swiper>
  );
}

export default Carousel;