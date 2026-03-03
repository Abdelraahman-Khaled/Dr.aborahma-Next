import React from 'react';
import {useTranslations} from 'next-intl';

export default function CertificatesExperienceSection() {
    const t = useTranslations('Index');
    return (
        <React.Fragment>
            <div className="how-it-work bg-section dark-section" id="Certificates_Experience">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/*  Section Title Start  */}
            <div className="section-title">
              <h3 className="wow fadeInUp">{t('t52')}</h3>
              <h2 className="wow fadeInUp" data-cursor="-opaque">{t('t53')}<span>{t('t55')}</span>{t('t54')}</h2>
            </div>
            {/*  Section Title End  */}
          </div>

          <div className="col-lg-6">
            {/*  Section Content Button Start  */}
            <div className="section-content-btn">
              {/*  Section Title Content Start  */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>{t('t56')}<br />{t('t57')}</p>
              </div>
              {/*  Section Title Content End  */}
            </div>
            {/*  Section Content Button End  */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/*  Work Step Box Start  */}
            <div className="work-step-box tab-content wow fadeInUp" data-wow-delay="0.25s" id="missionvision">
              {/*  Work Step Nav start  */}
              <div className="work-step-nav">
                <ul className="nav nav-tabs" id="mvTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="first-tab" data-bs-toggle="tab" data-bs-target="#first" type="button" role="tab" aria-selected="true">
                      <img src="/images/certificate.png" alt={t('attr173')} />{t('t58')}</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="second-tab" data-bs-toggle="tab" data-bs-target="#second" type="button" role="tab" aria-selected="false">
                      <img src="/images/quality.png" alt={t('attr174')} />{t('t59')}</button>
                  </li>
                </ul>
              </div>
              {/*  Work Step Nav End  */}

              {/*  Work Step Item Start  */}
              <div className="work-step-item-box tab-pane fade show active" id="first" role="tabpanel">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/*  Work Step Content Start  */}
                    <div className="work-step-content">
                      <div className="work-step-item-list">
                        <div className="work-step-item">
                          <h2>{t('t60')}</h2>
                          <p>{t('t61')}</p>
                        </div>
                        <div className="work-step-item">
                          <h2>{t('t62')}</h2>
                          <p>{t('t63')}</p>
                        </div>
                        <div className="work-step-item">
                          <h2>{t('t64')}</h2>
                          <p>{t('t65')}</p>
                        </div>
                        <div className="work-step-item">
                          <h2>{t('t66')}</h2>
                          <p>{t('t67')}</p>
                        </div>
                        <div className="work-step-item">
                          <h2>{t('t68')}</h2>
                          <p>{t('t69')}</p>
                        </div>
                        <div className="work-step-item">
                          <h2>{t('t70')}</h2>
                          <p>{t('t71')}</p>
                        </div>
                      </div>
                    </div>
                    {/*  Work Step Content End  */}
                  </div>

                  <div className="col-lg-6">
                    {/*  Work Step Image Start  */}
                    <div className="work-step-image">
                      <figure className="image-anime">
                        <img src="/images/work-image.jpg" alt={t('attr175')} />
                      </figure>
                    </div>
                    {/*  Work Step Image End  */}
                  </div>
                </div>
              </div>
              {/*  Work Step Item End  */}

              {/*  Work Step Item Start  */}
              <div className="work-step-item-box tab-pane fade" id="second" role="tabpanel">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    {/*  Work Step Content Start  */}
                    <div className="work-step-content">
                      <div className="work-step-item-list">
                        <div className="work-step-item">
                          <h2>{t('t72')}</h2>
                          <p>{t('t73')}</p>
                        </div>

                        <div className="work-step-item">
                          <h2>{t('t74')}</h2>
                          <p>{t('t75')}</p>
                        </div>

                        <div className="work-step-item">
                          <h2>{t('t76')}</h2>
                          <p>{t('t77')}</p>
                        </div>
                      </div>
                    </div>
                    {/*  Work Step Content End  */}
                  </div>

                  <div className="col-lg-6">
                    {/*  Work Step Image Start  */}
                    <div className="work-step-image">
                      <figure className="image-anime">
                        <img src="/images/work-image.jpg" alt={t('attr176')} />
                      </figure>
                    </div>
                    {/*  Work Step Image End  */}
                  </div>
                </div>
              </div>
              {/*  Work Step Item End  */}
            </div>
            {/*  Work Step Box End  */}
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    );
}
