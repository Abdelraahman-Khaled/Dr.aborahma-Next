import React from 'react';
import { useTranslations } from 'next-intl';

export default function Component10() {
  const t = useTranslations('Index');
  return (
    <React.Fragment>
      <div className="our-testimonials bg-section dark-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-9">
              {/*  Section Title Start  */}
              <div className="section-title">
                <h3 className="wow fadeInUp">{t('t104')}</h3>
                <h4 className="wow fadeInUp text-white" data-cursor="-opaque">{t('t105')}<span>{t('t107')}</span>{t('t106')}</h4>
              </div>
              {/*  Section Title End  */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/*  Testimonial Slider Start  */}
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper" data-cursor-text="اسحب">
                    {/*  Testimonial Slide Start  */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-author">
                            <div className="author-content">
                              <h3>{t('t108')}</h3>
                              <p>{t('t109')}</p>
                            </div>
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt={t('attr190')} />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>{t('t110')}</p>
                        </div>
                      </div>
                    </div>
                    {/*  Testimonial Slide End  */}

                    {/*  Testimonial Slide Start  */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-author">
                            <div className="author-content">
                              <h3>{t('t111')}</h3>
                              <p>{t('t112')}</p>
                            </div>
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt={t('attr191')} />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>{t('t113')}</p>
                        </div>
                      </div>
                    </div>
                    {/*  Testimonial Slide End  */}

                    {/*  Testimonial Slide Start  */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-author">
                            <div className="author-content">
                              <h3>{t('t114')}</h3>
                              <p>{t('t115')}</p>
                            </div>
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt={t('attr192')} />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>{t('t116')}</p>
                        </div>
                      </div>
                    </div>
                    {/*  Testimonial Slide End  */}

                    {/*  Testimonial Slide Start  */}
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-author">
                            <div className="author-content">
                              <h3>{t('t117')}</h3>
                              <p>{t('t118')}</p>
                            </div>
                          </div>
                          <div className="testimonial-quote">
                            <img src="/images/testimonial-quote.svg" alt={t('attr193')} />
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <p>{t('t119')}</p>
                        </div>
                      </div>
                    </div>
                    {/*  Testimonial Slide End  */}
                  </div>
                  <div className="testimonial-pagination"></div>
                </div>
              </div>
              {/*  Testimonial Slider End  */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
