import React from 'react';
import {useTranslations} from 'next-intl';

export default function BlogFooter() {
    const t = useTranslations('Blog');
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
                                <img src="/images/main-logo-2.png" alt={t('attr74')} />
                            </div>
                            {/*  Footer Logo End  */}

                            {/*  About Footer Content Start  */}
                            <div className="about-footer-content">
                                <p>{t('t42')}</p>
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
                            <h3>{t('t43')}</h3>
                            <ul>
                                <li>
                                    <a href="/">{t('t44')}</a>
                                </li>
                                <li>
                                    <a href="./#about">{t('t45')}</a>
                                </li>
                                <li>
                                    <a href="./#obesity_surgeries">{t('t46')}</a>
                                </li>
                            </ul>
                        </div>
                        {/*  Footer Links End  */}
                    </div>
                    <div className="col-lg-2 col-md-6">
                        {/*  Footer Links Start  */}
                        <div className="footer-links">
                            <h3>{t('t47')}</h3>
                            <ul>
                                <li><a href="./#obesity_surgeries">{t('t48')}</a></li>
                                <li><a href="./#obesity_surgeries">{t('t49')}</a></li>
                                <li><a href="./#obesity_surgeries">{t('t50')}</a></li>
                            </ul>
                        </div>
                        {/*  Footer Links End  */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/*  Footer Links Start  */}
                        <div className="footer-links">
                            <h3>{t('t51')}</h3>
                            <ul>
                                <li><a href="#obesity_surgeries">{t('t52')}</a></li>
                                <li><a href="#obesity_surgeries">{t('t53')}</a></li>
                                <li><a href="#obesity_surgeries">{t('t54')}</a></li>
                            </ul>
                        </div>
                        {/*  Footer Links End  */}
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/*  Footer Copyright Text Start  */}
                    <div className="footer-copyright-text">
                        <p>{t('t55')}</p>
                        <a href="https://mila-knight.com/" target="_blank">{t('t56')}</a>
                    </div>
                    {/*  Footer Copyright Text End  */}
                </div>
            </div>
        </div>
    </footer>
        </React.Fragment>
    );
}
