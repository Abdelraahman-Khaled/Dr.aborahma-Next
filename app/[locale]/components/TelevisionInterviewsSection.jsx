import React from 'react';
import {useTranslations} from 'next-intl';

export default function TelevisionInterviewsSection() {
    const t = useTranslations('Index');
    return (
        <React.Fragment>
            <div className="our-video" id="TV_interviews">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-7">
            {/*  Section Title Start  */}
            <div className="section-title">
              <h3 className="wow fadeInUp">{t('t101')}</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">{t('t102')}</h2>
            </div>
            {/*  Section Title End  */}
          </div>

          <div className="col-lg-5">
            {/*  Section Content Button Start  */}
            <div className="section-content-btn">
              {/*  Section Title Content Start  */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>{t('t103')}</p>
              </div>
              {/*  Section Title Content End  */}
            </div>
            {/*  Section Content Button End  */}
          </div>
        </div>

        {/*  Page Video Gallery Start  */}
        <div className="page-video-gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/*  Video Gallery start  */}
                <div className="video-gallery-image wow fadeInUp">
                  <a href="https://www.youtube.com/watch?v=3gZJDTMMV0o" className="popup-video" data-cursor-text="مشاهدة">
                    <figure>
                      <img src="/images/thumbnails/V1.webp" alt={t('attr187')} />
                    </figure>
                  </a>
                </div>
                {/*  Video Gallery end  */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/*  Video Gallery start  */}
                <div className="video-gallery-image wow fadeInUp">
                  <a href="https://www.youtube.com/watch?v=xx0Ko21NTJ0" className="popup-video" data-cursor-text="مشاهدة">
                    <figure>
                      <img src="/images/thumbnails/V2.webp" alt={t('attr188')} />
                    </figure>
                  </a>
                </div>
                {/*  Video Gallery end  */}
              </div>
              <div className="col-lg-4 col-md-6">
                {/*  Video Gallery start  */}
                <div className="video-gallery-image wow fadeInUp">
                  <a href="https://www.youtube.com/watch?v=BmNCm35bmMs" className="popup-video" data-cursor-text="مشاهدة">
                    <figure>
                      <img src="/images/thumbnails/V3.webp" alt={t('attr189')} />
                    </figure>
                  </a>
                </div>
                {/*  Video Gallery end  */}
              </div>
            </div>
          </div>
        </div>
        {/*  Page Video Gallery End  */}
      </div>
    </div>
        </React.Fragment>
    );
}
