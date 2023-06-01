import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-24">
        <SectionTitle heading="Order Online" subHeading="from 11:00 am to 10:00 pm"></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="md:text-3xl uppercase text-center -mt-16 text-gray-500 opacity-70">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="md:text-3xl uppercase text-center -mt-16 text-gray-500 opacity-70">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="md:text-3xl uppercase text-center -mt-16 text-gray-500 opacity-70">Soups</h3>
        </SwiperSlide>
        <SwiperSlide className="mb-16">
            <img src={slide4} alt="" />
            <h3 className="md:text-3xl uppercase text-center -mt-16 text-gray-500 opacity-70">Deserts</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
