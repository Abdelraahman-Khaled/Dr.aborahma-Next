'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../../i18n/routing';
import { getBlogs } from '../../../api/blogs';

export default function BlogMainSection() {
    const t = useTranslations('Blog');

    const locale = useLocale();

    // Fetch blogs from API
    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ['blogs-landing', locale],
        queryFn: getBlogs,
        refetchInterval: 10000,
    });

    return (
        <React.Fragment>
            <div className="page-blog">
                <div className="container">
                    <div className="row">
                        {isLoading && (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="col-12 text-center py-5">
                                <p className="text-danger">Failed to load blogs. Please try again later.</p>
                            </div>
                        )}

                        {!isLoading && !error && blogs?.length === 0 && (
                            <div className="col-12 text-center py-5">
                                <h3 className="text-muted">{t('noBlogsFound')}</h3>
                            </div>
                        )}

                        {!isLoading && !error && [...blogs].reverse()?.map((blog) => {
                            const title = locale === 'ar' ? blog.title_ar : blog.title_en;
                            const slug = locale === 'ar' ? blog.slug_ar : blog.slug;

                            // Find photo based on locale
                            const blogPhotos = blog.photos || [];
                            const localeImage = blogPhotos.find(p => locale === 'ar' ? !!p.is_arabic : !p.is_arabic)?.url;
                            const fallbackImage = blogPhotos[0]?.url;
                            const image = localeImage || fallbackImage;

                            return (
                                <div className="col-lg-4 col-md-6" key={blog.id}>
                                    <div className="post-item">
                                        <div className="post-featured-image">
                                            <Link href={`/blog/${slug}`} data-cursor-text={t('t13')}>
                                                <figure className="image-anime">
                                                    <img
                                                        src={image || "/images/placeholder-blog.webp"}
                                                        alt={title}
                                                        onError={(e) => {
                                                            e.target.src = "/images/placeholder-blog.webp";
                                                        }}
                                                    />
                                                </figure>
                                            </Link>
                                        </div>

                                        <div className="post-item-body">
                                            <div className="post-item-content">
                                                <h2>
                                                    <Link href={`/blog/${slug}`}>{title}</Link>
                                                </h2>
                                            </div>

                                            <div className="post-item-btn">
                                                <Link href={`/blog/${slug}`} className="readmore-btn">{t('t13')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
