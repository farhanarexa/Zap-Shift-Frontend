import React, { use } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);

    return (
        <>
            <div>
                <h2 className="text-3xl font-black mb-3 text-secondary mt-20 text-center">What our customers are sayings</h2>
                <p className='text-[#606060] mb-15 text-center'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. <br /> Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                pagination={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}

                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map((review, index) => <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 max-w-md">
                            {/* Quote Icon */}
                            <div className="text-secondary/20 mb-3">
                                <FaQuoteLeft size={24} />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[#606060] text-sm ">
                                {review.review}
                            </p>

                            {/* Divider */}
                            <div className="border-t border-dashed border-gray-300 my-3"></div>

                            {/* Author Section */}
                            <div className="flex items-center space-x-4">
                                {/* Avatar Placeholder */}
                                <div className="w-10 h-10"><img src={review.user_photoURL} alt="" className='rounded-full' /></div>

                                {/* Author Info */}
                                <div>
                                    <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                                    <p className="text-xs text-[#606060]">Senior Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </>
    );
};

export default Reviews;