'use client';

import React, { useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getBlogDetails } from '../../../api/blogs';

export default function BlogDetailSection({ blog: initialBlog }) {
    const { slug } = useParams();
    const locale = useLocale();
    const t = useTranslations('Blog');

    const { data: blog = initialBlog } = useQuery({
        queryKey: ['blog-detail', slug],
        queryFn: () => getBlogDetails(slug),
        initialData: initialBlog,
        refetchInterval: 10000,
        enabled: !!slug,
    });

    // Reset custom cursor state left over from previous page (Next.js client nav)
    useEffect(() => {
        const cursor = document.querySelector('.cb-cursor');
        if (cursor) {
            cursor.classList.remove('-text', '-pointer');
            const cursorText = cursor.querySelector('.cb-cursor-text');
            if (cursorText) cursorText.innerHTML = '';
        }
    }, []);

    if (!blog) return null;

    const title = locale === 'ar' ? blog.title_ar : blog.title_en;

    // Find photo based on locale
    const blogPhotos = blog.photos || [];
    const localeImage = blogPhotos.find(p => locale === 'ar' ? !!p.is_arabic : !p.is_arabic)?.url;
    const fallbackImage = blogPhotos[0]?.url;
    const image = localeImage || fallbackImage;

    return (
        <div className="page-single-post">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* Post Featured Image Start */}
                        <div className="post-image">
                            <figure className="image-anime" style={{ visibility: 'visible' }}>
                                <img
                                    src={image || "/images/placeholder-blog.webp"}
                                    alt={title}
                                    onError={(e) => {
                                        e.target.src = "/images/placeholder-blog.webp";
                                    }}
                                />
                            </figure>
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Single Content Start */}
                        <div className="post-content">
                            {blog.contents?.map((item, index) => {
                                const sectionContent = locale === 'ar' ? item.content_ar : item.content_en;
                                return (
                                    <div className="post-entry" key={item.id || index}>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: sectionContent }}
                                        ></div>

                                        {/* Section Photos Start */}
                                        {item.photos && item.photos.length > 0 && (
                                            <div className="post-section-photos row mt-4 mb-4">
                                                {item.photos.map((photo, pIndex) => (
                                                    <div className={`col-md-${item.photos.length === 1 ? '12' : '6'} mb-3`} key={pIndex}>
                                                        <figure className="image-anime">
                                                            <img
                                                                src={photo.url}
                                                                alt={locale === 'ar' ? photo.alt_ar : photo.alt_en}
                                                                className="img-fluid rounded-4 shadow-sm"
                                                            />
                                                        </figure>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {/* Section Photos End */}
                                    </div>
                                );
                            })}
                        </div>
                        {/* Post Single Content End */}

                        {/* FAQs Section Start */}
                        {blog.faqs && blog.faqs.length > 0 && (
                            <div className="our-faqs mt-5" id="faqs">
                                <h2 className="fw-bold fs-1 mb-4">
                                    {locale === 'ar' ? 'الأسئلة الأكثر شيوعاً' : 'Frequently Asked Questions'}
                                </h2>
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="faq-accordion" id="faqaccordion">
                                            {blog.faqs.map((faq, index) => (
                                                <div className="accordion-item" key={faq.id || index}>
                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${index}`}
                                                            aria-expanded="false"
                                                            aria-controls={`collapse${index}`}
                                                        >
                                                            {locale === 'ar' ? faq.question_ar : faq.question_en}
                                                        </button>
                                                    </h3>
                                                    <div
                                                        id={`collapse${index}`}
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby={`heading${index}`}
                                                        data-bs-parent="#faqaccordion"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                            dangerouslySetInnerHTML={{ __html: locale === 'ar' ? faq.answer_ar : faq.answer_en }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* FAQs Section End */}
                    </div>
                </div>
            </div>
        </div>
    );
}
