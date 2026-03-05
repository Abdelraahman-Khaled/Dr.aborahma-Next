import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../../i18n/routing';

export default function BlogHeaderX({ title }) {
    const t = useTranslations('Blog');
    return (
        <React.Fragment>
            <div className="page-header bg-section parallaxie">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/*  Page Header Box Start  */}
                            <div className="page-header-box">
                                <h1 className="wow fadeInUp" data-cursor="-opaque">{title || t('t9')}</h1>
                                <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">{t('t10')}</Link>
                                        </li>
                                        {title ? (
                                            <>
                                                <li className="breadcrumb-item">
                                                    <Link href="/blog">{t('t11')}</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                            </>
                                        ) : (
                                            <li className="breadcrumb-item active" aria-current="page">{t('t11')}</li>
                                        )}
                                    </ol>
                                </nav>
                            </div>
                            {/*  Page Header Box End  */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
