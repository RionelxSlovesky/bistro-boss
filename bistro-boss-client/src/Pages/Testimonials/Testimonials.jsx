import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <section className="my-24 text-center">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <FaQuoteLeft className="mx-auto text-5xl mb-8 md:text-8xl md:mb-12"/>
            <Rating
              style={{ maxWidth: 180 }}
              value={review.rating}
              readOnly
              className="mx-auto md:mb-4"
            />
            <p className="px-12 md:px-32">{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
