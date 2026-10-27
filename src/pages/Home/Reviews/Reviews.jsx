import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";
import { use } from "react";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div className="my-24">
      <div className='text-center mb-24'>
        <h1 className="text-3xl text-center font-bold my-8">Reviews</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          officiis autem sed cupiditate laboriosam fuga recusandae nostrum fugit
          nihil error odio, incidunt repellat non doloribus odit architecto
          omnis reiciendis totam.
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
		  scale:0.75,
          slideShadows: true,
        }}

		autoplay={{
			delay:2000,
			disableOnInteraction:false,
		}}



        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
