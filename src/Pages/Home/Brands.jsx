import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../assets/brands/amazon.png';
import amazon_vector from '../../assets/brands/amazon_vector.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people];

const Brands = () => {
    return (
        <>
        <div>
            <h1 className='text-2xl font-bold text-center text-secondary my-10'>We've helped thousands of sales teams</h1>
        </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                modules={[Autoplay]}>
                {
                    brandLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} /></SwiperSlide>)
                }


            </Swiper>
        </>
    );
};

export default Brands;