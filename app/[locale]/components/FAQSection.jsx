"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('Index');
  const [activeIndex, setActiveIndex] = useState(1); // Default item 2 (index 1) which was 'show' in original

  const faqs = [
    { id: 0, q: 't127', a: 't128' },
    { id: 1, q: 't129', a: 't130' },
    { id: 2, q: 't131', a: 't132' },
    { id: 3, q: 't133', a: 't134' },
    { id: 4, q: 't135', a: 't136' },
    { id: 5, q: 't137', a: 't138' }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="our-faqs" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t('t120')}</h3>
                <p className="wow fadeInUp" data-wow-delay="0.2s">{t('t121')}</p>
              </div>

              <div className="faqs-contact-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="faqs-contact-box-title">
                  <h3>{t('t122')}</h3>
                </div>
                <div className="faqs-contact-item-box">
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

                  <div className="cta-contact-item">
                    <div className="cta-contact-header">
                      <img src="/images/icon-mail.svg" alt={t('attr195')} />
                      <h3>{t('t125')}</h3>
                    </div>
                    <div className="cta-contact-item-content">
                      <p>
                        <a href="mailto:info@aburahmah.com">{t('t126')}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item wow fadeInUp" key={faq.id} data-wow-delay={`${index * 0.2}s`}>
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`} 
                      type="button" 
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeIndex === index}
                    >
                      {t(faq.q)}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p>{t(faq.a)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

