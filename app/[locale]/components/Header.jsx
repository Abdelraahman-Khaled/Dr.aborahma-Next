"use client";

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '../../../i18n/routing';

export default function Header() {
  const t = useTranslations('Index');
  const locale = useLocale();
  const pathname = usePathname();

  // Switch logic
  const targetLocale = locale === 'ar' ? 'en' : 'ar';
  const flagImage = locale === 'ar' ? '/images/united-states.png' : '/images/saudi-arabia.png';

  return (
    <React.Fragment>
      <header className="main-header bg-section">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Logo Start */}
              <a className="navbar-brand" href={`/${locale}`}>
                <img src="/images/main-logo-2.png" alt={t('attr165')} />
              </a>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav ms-auto" id="menu">
                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}#home`}>{t('t1')}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}#about`}>{t('t2')}</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}#obesity_surgeries`}>{t('t3')}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}#TV_interviews`}>{t('t4')}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}#calc`}>{t('t5')}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}#faqs`}>{t('t6')}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${locale}/blog`}>{t('t7')}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${targetLocale}${pathname}`}>
                        <span className={locale === 'ar' ? 'me-2 px-1' : 'ms-2 px-1'} >{t('t8')}</span>
                        <img src={flagImage} alt={t('attr166')} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </React.Fragment>
  );
}
