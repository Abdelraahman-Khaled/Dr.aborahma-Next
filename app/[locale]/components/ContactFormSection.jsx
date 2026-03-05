'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactFormSection() {
    const t = useTranslations('Index');
    const locale = useLocale();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed');

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            console.error('Contact form error:', err);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const isRtl = locale === 'ar';

    return (
        <section className="contact-section" id="contact" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left info */}
                    <div className="col-lg-5">
                        <div className="section-title">
                            <h3 className="wow fadeInUp">{t('contact_subtitle')}</h3>
                            <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                                {t('contact_title')}
                            </h4>
                            <p className="wow fadeInUp" data-wow-delay="0.3s">
                                {t('contact_desc')}
                            </p>
                        </div>

                        <ul className="contact-info-list wow fadeInUp" data-wow-delay="0.4s" dir='ltr'>
                            <li>
                                <span className="contact-info-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <a href="tel:+966534468677">{t('t124')}</a>
                            </li>
                            <li>
                                <span className="contact-info-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                                <a href="mailto:info@aburahmah.com">info@aburahmah.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right form */}
                    <div className="col-lg-7">
                        <div className="contact-form-box wow fadeInUp" data-wow-delay="0.2s">
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-name">{t('contact_name')}</label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder={t('contact_name_placeholder')}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-email">{t('contact_email')}</label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder={t('contact_email_placeholder')}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">{t('contact_phone')}</label>
                                            <input
                                                id="contact-phone"
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder={t('contact_phone_placeholder')}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-message">{t('contact_message')}</label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                placeholder={t('contact_message_placeholder')}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn-default"
                                            disabled={loading}
                                        >
                                            {loading && (
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {t('contact_send')}
                                        </button>
                                    </div>

                                    {status === 'success' && (
                                        <div className="col-12">
                                            <div className="contact-alert contact-alert--success">
                                                <i className="fa-solid fa-circle-check"></i>
                                                {t('contact_success')}
                                            </div>
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="col-12">
                                            <div className="contact-alert contact-alert--error">
                                                <i className="fa-solid fa-circle-exclamation"></i>
                                                {t('contact_error')}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
