'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../i18n/routing';
import { getBlogs } from '../../api/blogs';

export default function BlogSection() {
  const t = useTranslations('Index');
  const locale = useLocale();

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs-home', locale],
    queryFn: getBlogs,
  });

  const displayBlogs = Array.isArray(blogs) ? [...blogs].reverse().slice(0, 3) : [];

  return (
    <React.Fragment>
      <div className="our-blog" id="blog">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t('t139')}</h3>
                <h4 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">{t('t140')}</h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-content-btn">
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>{t('t141')}</p>
                </div>
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/blog" className="btn-default">{t('t142')}</Link>
                </div>
              </div>
            </div>
          </div>

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

            {!isLoading && !error && displayBlogs.map((blog) => {
              const title = locale === 'ar' ? blog.title_ar : blog.title_en;
              const slug = locale === 'ar' ? blog.slug_ar : blog.slug;

              const blogPhotos = blog.photos || [];
              const localeImage = blogPhotos.find(p => (locale === 'ar' ? !!p.is_arabic : !p.is_arabic))?.url;
              const fallbackImage = blogPhotos[0]?.url;
              const image = localeImage || fallbackImage;

              return (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <div className="post-item wow fadeInUp">
                    <div className="post-featured-image">
                      <Link href={`/blog/${slug}`} data-cursor-text={t('t144')}>
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
                        <Link href={`/blog/${slug}`} className="readmore-btn">{t('t144')}</Link>
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
