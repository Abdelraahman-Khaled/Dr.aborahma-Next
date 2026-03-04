import React from 'react';
import { useTranslations } from 'next-intl';

export default function BlogHeaderX() {
    const t = useTranslations('Blog');
    return (
        <React.Fragment>
            <div className="page-header bg-section parallaxie">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/*  Page Header Box Start  */}
                            <div className="page-header-box">
                                <h1 className="wow fadeInUp" data-cursor="-opaque">{t('t9')}</h1>
                                <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">{t('t10')}</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">{t('t11')}</li>
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
