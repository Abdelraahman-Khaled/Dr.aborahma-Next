import React from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Index');
  const locale = useLocale();

  return (
    <React.Fragment>
      <footer className="main-footer">
        <div className="main-footer-box bg-section dark-section">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-12">
                {/*  About Footer Start  */}
                <div className="about-footer">
                  {/*  Footer Logo Start  */}
                  <div className="footer-logo">
                    <a href={`/${locale}`}>
                      <img src="/images/main-logo-2.png" alt={t('attr199')} />
                    </a>
                  </div>
                  {/*  Footer Logo End  */}

                  {/*  About Footer Content Start  */}
                  <div className="about-footer-content">
                    <p>{t('t149')}</p>
                  </div>
                  {/*  About Footer Content End  */}

                  {/*  Footer Social Link Start  */}
                  <div className="footer-social-links">
                    <ul>
                      <li>
                        <a target="_blank" href="https://www.linkedin.com/in/aburahmah/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.snapchat.com/@dr_aburahmah">
                          <i className="fa-brands fa-snapchat"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://x.com/lapendo_clinic?s=11&amp;t=ANdMI79xWWJpT3WVMHpjGQ">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.tiktok.com/@dr_aburahmah?_t=ZS-8xx4SIJwqwM&amp;_r=1">
                          <i className="fa-brands fa-tiktok"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/dr_aburahmah/">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*  Footer Social Link End  */}
                </div>
                {/*  About Footer End  */}
              </div>

              <div className="col-lg-2 col-md-6">
                {/*  Footer Links Start  */}
                <div className="footer-links">
                  <h3>{t('t150')}</h3>
                  <ul>
                    <li>
                      <a href="/">{t('t151')}</a>
                    </li>
                    <li>
                      <a href="/#about">{t('t152')}</a>
                    </li>
                    <li>
                      <a href="/#obesity_surgeries">{t('t153')}</a>
                    </li>
                    <li>
                      <a href={`/${locale}/blog`}>{t('t154')}</a>
                    </li>
                  </ul>
                </div>
                {/*  Footer Links End  */}
              </div>

              <div className="col-lg-2 col-md-6">
                {/*  Footer Links Start  */}
                <div className="footer-links">
                  <h3>{t('t155')}</h3>
                  <ul>
                    <li><a href="/#obesity_surgeries">{t('t156')}</a></li>
                    <li><a href="/#obesity_surgeries">{t('t157')}</a></li>
                    <li><a href="/#obesity_surgeries">{t('t158')}</a></li>
                  </ul>
                </div>
                {/*  Footer Links End  */}
              </div>

              <div className="col-lg-3 col-md-6">
                {/*  Footer Contact Start  */}
                <div className="footer-links">
                  <h3>{t('footer_contact_title')}</h3>
                  <ul className="footer-contact-list">
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <a href="tel:+966534468677" dir="ltr">{t('t124')}</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="mailto:info@drsalehalkhalaf.com">info@aburahmah.com</a>
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{t('footer_location')}</span>
                    </li> */}
                    <li style={{ marginTop: '12px' }}>
                      <a href="/#contact" className="footer-contact-btn">
                        <i className="fa-solid fa-paper-plane text-white"></i>
                        {t('contact_send')}
                      </a>
                    </li>
                  </ul>
                </div>
                {/*  Footer Contact End  */}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*  Footer Copyright Text Start  */}
              <div className="footer-copyright-text">
                <p>{t('t163')}</p>
                <a href="https://mila-knight.com/" target="_blank">{t('t164')}</a>
              </div>
              {/*  Footer Copyright Text End  */}
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
