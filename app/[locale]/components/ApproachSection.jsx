'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function ApproachSection() {
  const t = useTranslations('Index');
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      <div className="our-approach bg-section">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/*  Section Title Start  */}
              <div className="section-title">
                <h3 className="wow fadeInUp">{t('t34')}</h3>
                <h2 className="wow fadeInUp" data-cursor="-opaque">{t('t35')}<span>{t('t36')}</span>
                </h2>
              </div>
              {/*  Section Title End  */}
            </div>

            <div className="col-lg-6">
              {/*  Section Title Content Start  */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>{t('t37')}<strong>{t('t40')}</strong>{t('t38')}<strong>{t('t41')}</strong>{t('t39')}</p>
              </div>
              {/*  Section Title Content End  */}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*  Our Approach Image Start  */}
              <div className="our-approach-image">
                <figure className="image-anime reveal-scroll" ref={imageRef}>
                  <img src="/images/appointment-image.jpg" alt={t('attr170')} />
                </figure>
              </div>
              {/*  Our Approach Image End  */}
            </div>

            <div className="col-lg-6">
              {/*  Our Approach Content Start  */}
              <div className="our-approach-content">
                {/*  Approach Item Box Start  */}
                <div className="approach-item-box">
                  {/*  Approach Item Start  */}
                  <div className="approach-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/images/icon-mission.svg" alt={t('attr171')} />
                    </div>
                    <div className="approach-item-content">
                      <h3>{t('t42')}</h3>
                      <p>{t('t43')}<strong>{t('t45')}</strong>{t('t44')}</p>
                    </div>
                  </div>
                  {/*  Approach Item End  */}

                  {/*  Approach Item Start  */}
                  <div className="approach-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-vision.svg" alt={t('attr172')} />
                    </div>
                    <div className="approach-item-content">
                      <h3>{t('t46')}</h3>
                      <p>{t('t47')}<strong>{t('t50')}</strong>{t('t48')}<strong>{t('t51')}</strong>{t('t49')}</p>
                    </div>
                  </div>
                  {/*  Approach Item End  */}
                </div>
                {/*  Approach Item Box End  */}
              </div>
              {/*  Our Approach Content End  */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
