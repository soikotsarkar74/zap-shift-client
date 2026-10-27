
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'

const Banner = () => {
	return (
<div className="flex flex-col md:flex-row items-center justify-between  px-2 py-6 gap-12">

  {/* Left Text Section */}
  <div className="md:w-1/2 w-full text-center md:text-left space-y-2 px-4 ">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
      We Make Sure Your Parcel Arrives On Time – No Fuss.
    </h1>

    <p className="text-lg md:text-xl text-gray-700 max-w-lg">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
      From personal packages to business shipments — we deliver on time, every time.
    </p>

    <div className="flex md:justify-start justify-center gap-4 pt-3">
      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
        Track Your Parcel
      </button>

      <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold">
        Be A Rider
      </button>
    </div>
  </div>

  {/* Right Carousel Section */}
  <div className="md:w-1/2 w-full">
    <Carousel 
      autoPlay={true} 
      infiniteLoop={true} 
      showThumbs={false} 
      showStatus={false}
    >
      <div>
        <img 
          src={bannerImg1} 
          alt="Banner 1" 
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </div>
      <div>
        <img 
          src={bannerImg2} 
          alt="Banner 2" 
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </div>
      <div>
        <img 
          src={bannerImg3} 
          alt="Banner 3" 
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </div>
    </Carousel>
  </div>
</div>


	);
};

export default Banner;