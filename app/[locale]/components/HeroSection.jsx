import React from 'react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Index');
  return (
    <React.Fragment>
      <div className="hero bg-section dark-section parallaxie" id="home">
        {/*  Hero Section Start  */}
        <div className="hero-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                {/*  Hero Content Start  */}
                <div className="hero-content">
                  {/*  Section Title Start  */}
                  <div className="section-title">
                    <h1 className="wow fadeInUp" data-cursor="-opaque">{t('t9')}</h1>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      <strong>{t('t11')}</strong>{t('t10')}</p>
                  </div>
                  {/*  Section Title End  */}

                  {/*  Hero Content List Start  */}
                  <div className="hero-content-list wow fadeInUp" data-wow-delay="0.4s">
                    <ul>
                      <li>{t('t12')}</li>
                      <li>{t('t13')}</li>
                      <li>{t('t14')}</li>
                    </ul>
                  </div>
                  {/*  Hero Content List End  */}

                  {/*  Hero Body Start  */}
                  <div className="hero-body wow fadeInUp" data-wow-delay="0.6s">
                    {/*  Hero Button Start  */}
                    <div className="hero-btn">
                      <a href="#contact" className="btn-default btn-highlighted">{t('t15')}</a>
                    </div>
                    {/*  Hero Button End  */}
                  </div>
                  {/*  Hero Body End  */}
                </div>
                {/*  Hero Content End  */}
              </div>

              <div className="col-lg-6">
                {/*  Hero Image Start  */}
                <div className="hero-img">
                  <figure>
                    <img src="/images/hero-img1.webp" alt={t('attr167')} />
                  </figure>
                </div>
                {/*  Hero Image End  */}
              </div>
            </div>
          </div>
        </div>
        {/*  Hero Section End  */}
      </div>
    </React.Fragment>
  );
}
