"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Component10() {
  const t = useTranslations('Index');

  const testimonials = [
    { name: t('t108'), age: t('t109'), text: t('t110'), icon: t('attr190') },
    { name: t('t111'), age: t('t112'), text: t('t113'), icon: t('attr191') },
    { name: t('t114'), age: t('t115'), text: t('t116'), icon: t('attr192') },
    { name: t('t117'), age: t('t118'), text: t('t119'), icon: t('attr193') }
  ];

  return (
    <div className="our-testimonials bg-section dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-9">
            <div className="section-title">
              <h3 className="wow fadeInUp">{t('t104')}</h3>
              <h4 className="wow fadeInUp text-white" data-cursor="-opaque">
                {t('t105')}<span>{t('t107')}</span>{t('t106')}
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-slider">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.testimonial-pagination',
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                }}
                className="swiper"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="testimonial-header">
                        <div className="testimonial-author">
                          <div className="author-content">
                            <h3>{item.name}</h3>
                            <p>{item.age}</p>
                          </div>
                        </div>
                        <div className="testimonial-quote">
                          <img src="/images/testimonial-quote.svg" alt={item.icon} />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="testimonial-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

