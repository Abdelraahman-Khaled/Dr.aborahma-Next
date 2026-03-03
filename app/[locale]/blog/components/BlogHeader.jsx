import React from 'react';
import {useTranslations} from 'next-intl';

export default function BlogHeader() {
    const t = useTranslations('Blog');
    return (
        <React.Fragment>
            <header className="main-header bg-section">
        <div className="header-sticky">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/*  Logo Start  */}
                    <a className="navbar-brand" href="/">
                        <img src="/images/main-logo-2.png" alt={t('attr57')} />
                    </a>
                    {/*  Logo End  */}

                    {/*  Main Menu Start  */}
                    <div className="collapse navbar-collapse main-menu">
                        <div className="nav-menu-wrapper">
                            <ul className="navbar-nav mr-auto" id="menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">{t('t1')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./#about">{t('t2')}</a>
                                </li><li className="nav-item">
                                    <a className="nav-link" href="./#obesity_surgeries">{t('t3')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./#TV_interviews">{t('t4')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./#calc">{t('t5')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./#faqs">{t('t6')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">{t('t7')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="en/blog.html">
                                        <span className="ms-2">{t('t8')}</span>
                                        <img src="/images/united-states.png" alt={t('attr58')} />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/*  Main Menu End  */}
                    <div className="navbar-toggle"></div>
                </div>
            </nav>
            <div className="responsive-menu"></div>
        </div>
    </header>
        </React.Fragment>
    );
}
