import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/autoplay';

const Developer2 = ({ videos, title, id }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className='developer2__inner'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    autoplay={{
                        delay: 2000, // 슬라이드가 자동으로 변경되는 시간
                        disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 autoplay가 멈추지 않도록 설정
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                        1640: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay]}
                    className='mySwiper'
                >
                    {videos.map((developer2, key) => (
                        <SwiperSlide key={key}>
                            <div className='developer2'>
                                <div className='developer2__img play__icon'>
                                    <Link to={`/channel/${developer2.channelId}`}> {/* 비디오 상세 페이지로 이동하도록 Link 추가 */}
                                        <img src={developer2.img} alt={developer2.name} />
                                    </Link>
                                </div>
                                <div className="developer2__info">
                                    <Link to={`/channel/${developer2.channelId}`}>
                                        {developer2.name}
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Developer2;
