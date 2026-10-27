import React from 'react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brandLogos = [amazon, casio, moonstar,star, randstad, start_people];
const Brands = () => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      centeredSlides={true}
      grabCursor={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      {brandLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="brand-logo" className='mt-10'/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
