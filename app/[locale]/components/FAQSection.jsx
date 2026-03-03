import React from 'react';
import {useTranslations} from 'next-intl';

export default function FAQSection() {
    const t = useTranslations('Index');
    return (
        <React.Fragment>
            <div className="our-faqs" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/*  Faqs Content Start  */}
            <div className="faqs-content">
              {/*  Section Title Start  */}
              <div className="section-title">
                <h3 className="wow fadeInUp">{t('t120')}</h3>
                <p className="wow fadeInUp" data-wow-delay="0.2s">{t('t121')}</p>
              </div>
              {/*  Section Title End  */}

              {/*  Faqs Contact Box Start  */}
              <div className="faqs-contact-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="faqs-contact-box-title">
                  <h3>{t('t122')}</h3>
                </div>
                <div className="faqs-contact-item-box">
                  {/*  Faqs Contact Item Start  */}
                  <div className="cta-contact-item">
                    <div className="cta-contact-header">
                      <img src="/images/icon-phone.svg" alt={t('attr194')} />
                      <h3>{t('t123')}</h3>
                    </div>
                    <div className="cta-contact-item-content">
                      <p>
                        <a dir="ltr" href="tel:966534468677">{t('t124')}</a>
                      </p>
                    </div>
                  </div>
                  {/*  Faqs Contact Item End  */}

                  {/*  Faqs Contact Item Start  */}
                  <div className="cta-contact-item">
                    <div className="cta-contact-header">
                      <img src="/images/icon-mail.svg" alt={t('attr195')} />
                      <h3>{t('t125')}</h3>
                    </div>
                    <div className="cta-contact-item-content">
                      <p>
                        <a href="mailto:info@domainname.com">{t('t126')}</a>
                      </p>
                    </div>
                  </div>
                  {/*  Faqs Contact Item End  */}
                </div>
              </div>
              {/*  Faqs Contact Box End  */}
            </div>
            {/*  Faqs Content End  */}
          </div>

          <div className="col-lg-6">
            {/*  FAQ Accordion Start  */}
            <div className="faq-accordion" id="faqaccordion">
              {/*  FAQ Item Start  */}
              <div className="accordion-item wow fadeInUp">
                <h2 className="accordion-header" id="heading1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">{t('t127')}</button>
                </h2>
                <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                  <div className="accordion-body">
                    <p>{t('t128')}</p>
                  </div>
                </div>
              </div>
              {/*  FAQ Item End  */}

              {/*  FAQ Item Start  */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="accordion-header" id="heading2">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">{t('t129')}</button>
                </h2>
                <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                  <div className="accordion-body">
                    <p>{t('t130')}</p>
                  </div>
                </div>
              </div>
              {/*  FAQ Item End  */}

              {/*  FAQ Item Start  */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                <h2 className="accordion-header" id="heading3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">{t('t131')}</button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                  <div className="accordion-body">
                    <p>{t('t132')}</p>
                  </div>
                </div>
              </div>
              {/*  FAQ Item End  */}

              {/*  FAQ Item Start  */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="accordion-header" id="heading4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">{t('t133')}</button>
                </h2>
                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                  <div className="accordion-body">
                    <p>{t('t134')}</p>
                  </div>
                </div>
              </div>
              {/*  FAQ Item End  */}

              {/*  FAQ Item Start  */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                <h2 className="accordion-header" id="heading5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">{t('t135')}</button>
                </h2>
                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqaccordion">
                  <div className="accordion-body">
                    <p>{t('t136')}</p>
                  </div>
                </div>
              </div>
              {/*  FAQ Item End  */}

              {/*  FAQ Item Start  */}
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                <h2 className="accordion-header" id="heading6">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">{t('t137')}</button>
                </h2>
                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqaccordion">
                  <div className="accordion-body">
                    <p>{t('t138')}</p>
                  </div>
                </div>
              </div>
              {/*  FAQ Item End  */}
            </div>
            {/*  FAQ Accordion End  */}
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    );
}
