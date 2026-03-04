import React from 'react';
import {useTranslations} from 'next-intl';

export default function BlogSection() {
    const t = useTranslations('Index');
    return (
        <React.Fragment>
            <div className="our-blog" id="blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/*  Section Title Start  */}
            <div className="section-title">
              <h3 className="wow fadeInUp">{t('t139')}</h3>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">{t('t140')}</h4>
            </div>
            {/*  Section Title End  */}
          </div>

          <div className="col-lg-6">
            {/*  Section Content Button Start  */}
            <div className="section-content-btn">
              {/*  Section Title Content Start  */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>{t('t141')}</p>
              </div>
              {/*  Section Title Content End  */}
              {/*  Section Button Start  */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="blog.html" className="btn-default">{t('t142')}</a>
              </div>
              {/*  Section Button End  */}
            </div>
            {/*  Section Content Button End  */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/*  Post Item Start  */}
            <div className="post-item wow fadeInUp">
              {/*  Post Featured Image Start */}
              <div className="post-featured-image">
                <a href="blog/فهم-الأسباب-الجذرية-لزيادة-الوزن.html" data-cursor-text="اقرأ المزيد">
                  <figure className="image-anime">
                    <img src="/images/blogs/15/arabic small.webp" alt={t('attr196')} />
                  </figure>
                </a>
              </div>
              {/*  Post Featured Image End  */}

              {/*  Post Item Body Start  */}
              <div className="post-item-body">
                {/*  Post Item Content Start  */}
                <div className="post-item-content">
                  <h2>
                    <a href="blog/فهم-الأسباب-الجذرية-لزيادة-الوزن.html">{t('t143')}</a>
                  </h2>
                </div>
                {/*  Post Item Content End  */}

                {/*  Post Item Readmore Button Start */}
                <div className="post-item-btn">
                  <a href="blog/فهم-الأسباب-الجذرية-لزيادة-الوزن.html" className="readmore-btn">{t('t144')}</a>
                </div>
                {/*  Post Item Readmore Button End */}
              </div>
              {/*  Post Item Body End  */}
            </div>
            {/*  Post Item End  */}
          </div>
          <div className="col-lg-4 col-md-6">
            {/*  Post Item Start  */}
            <div className="post-item wow fadeInUp">
              {/*  Post Featured Image Start */}
              <div className="post-featured-image">
                <a href="blog/مخاطر-عملية-تكميم-المعدة.html" data-cursor-text="اقرأ المزيد">
                  <figure className="image-anime">
                    <img src="/images/blogs/14/3.webp" alt={t('attr197')} />
                  </figure>
                </a>
              </div>
              {/*  Post Featured Image End  */}

              {/*  Post Item Body Start  */}
              <div className="post-item-body">
                {/*  Post Item Content Start  */}
                <div className="post-item-content">
                  <h2>
                    <a href="blog/مخاطر-عملية-تكميم-المعدة.html">{t('t145')}</a>
                  </h2>
                </div>
                {/*  Post Item Content End  */}

                {/*  Post Item Readmore Button Start */}
                <div className="post-item-btn">
                  <a href="blog/مخاطر-عملية-تكميم-المعدة.html" className="readmore-btn">{t('t146')}</a>
                </div>
                {/*  Post Item Readmore Button End */}
              </div>
              {/*  Post Item Body End  */}
            </div>
            {/*  Post Item End  */}
          </div>
          <div className="col-lg-4 col-md-6">
            {/*  Post Item Start  */}
            <div className="post-item wow fadeInUp">
              {/*  Post Featured Image Start */}
              <div className="post-featured-image">
                <a href="blog/قصص-حقيقية-الحياة-بعد-عملية-إنقاص-الوزن.html" data-cursor-text="اقرأ المزيد">
                  <figure className="image-anime">
                    <img src="/images/blogs/13/arabic small.webp" alt={t('attr198')} />
                  </figure>
                </a>
              </div>
              {/*  Post Featured Image End  */}

              {/*  Post Item Body Start  */}
              <div className="post-item-body">
                {/*  Post Item Content Start  */}
                <div className="post-item-content">
                  <h2>
                    <a href="blog/قصص-حقيقية-الحياة-بعد-عملية-إنقاص-الوزن.html">{t('t147')}</a>
                  </h2>
                </div>
                {/*  Post Item Content End  */}

                {/*  Post Item Readmore Button Start */}
                <div className="post-item-btn">
                  <a href="blog/قصص-حقيقية-الحياة-بعد-عملية-إنقاص-الوزن.html" className="readmore-btn">{t('t148')}</a>
                </div>
                {/*  Post Item Readmore Button End */}
              </div>
              {/*  Post Item Body End  */}
            </div>
            {/*  Post Item End  */}
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    );
}
