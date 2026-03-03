import React from 'react';
import {useTranslations} from 'next-intl';

export default function AboutUsSection() {
    const t = useTranslations('Index');
    return (
        <React.Fragment>
            <div className="about-us" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/*  About Us Image Start  */}
            <div className="about-us-images">
              {/*  About Us Img Start  */}
              <div className="about-us-img-1">
                <figure className="image-anime">
                  <img src="/images/about-us-img-1.jpg" alt={t('attr168')} />
                </figure>
              </div>
              {/*  About Us Img End  */}

              {/*  About Experience Box Start  */}
              <div className="about-experience-box">
                <div className="icon-box">
                  <img src="/images/icon-company-experience.svg" alt={t('attr169')} />
                </div>

                <div className="about-experience-content">
                  <h3><span className="counter">{t('t17')}</span>{t('t16')}</h3>
                </div>
              </div>
              {/*  About Experience Box End  */}
            </div>
            {/*  About Us Image End  */}
          </div>

          <div className="col-lg-6">
            {/*  About Us Content Start  */}
            <div className="about-us-content">
              {/*  Section Title Start  */}
              <div className="section-title">
                <h3 className="wow fadeInUp">{t('t18')}</h3>
                <h2 className="wow fadeInUp" data-cursor="-opaque">{t('t19')}</h2>
                <p className="wow fadeInUp">{t('t20')}</p>
              </div>
              {/*  Section Title End  */}

              {/*  About Us Body Start  */}
              <div className="about-us-body">
                {/*  About List Btn Start  */}
                <div className="about-list-btn">
                  <div className="about-list wow fadeInUp" data-wow-delay="0.2">
                    <ul>
                      <li>
                        <strong>{t('t22')}</strong>{t('t21')}</li>
                      <li>
                        <strong>{t('t24')}</strong>{t('t23')}</li>
                      <li>
                        <strong>{t('t26')}</strong>{t('t25')}</li>
                      <li>
                        <strong>{t('t28')}</strong>{t('t27')}</li>
                      <li>
                        <strong>{t('t30')}</strong>{t('t29')}</li>
                      <li>
                        <strong>{t('t32')}</strong>{t('t31')}</li>
                    </ul>
                  </div>
                  <div className="about-btn wow fadeInUp" data-wow-delay="0.4">
                    <a href="#Certificates_Experience" className="btn-default">{t('t33')}</a>
                  </div>
                </div>
                {/*  About List Btn End  */}
              </div>
              {/*  About Us Body End  */}
            </div>
            {/*  About Us Content End  */}
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    );
}
