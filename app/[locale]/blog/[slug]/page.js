import React from "react";
import { getBlogDetails } from "../../../api/blogs";
import BlogPreloader from "../components/BlogPreloader";
import BlogHeader from "../components/BlogHeader";
import BlogHeaderX from "../components/BlogHeaderX";
import BlogDetailSection from "../components/BlogDetailSection";
import BlogFooter from "../components/BlogFooter";
import { notFound } from "next/navigation";
import Script from "next/script";
import WowReinit from "../../components/WowReinit";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  try {
    const blog = await getBlogDetails(slug);

    const title =
      locale === "ar"
        ? blog.meta_title_ar || blog.title_ar
        : blog.meta_title_en || blog.title_en;
    const description =
      locale === "ar"
        ? blog.meta_description_ar || blog.description_ar
        : blog.meta_description_en || blog.description_en;

    // Find photo based on locale for OpenGraph
    const blogPhotos = blog.photos || [];
    const localeImage = blogPhotos.find((p) =>
      locale === "ar" ? !!p.is_arabic : !p.is_arabic,
    )?.url;
    const fallbackImage = blogPhotos[0]?.url;
    const image = localeImage || fallbackImage;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aburahmah.com";

    return {
      title: `${title} | Dr. Aborahma`,
      description,
      alternates: {
        canonical: `${siteUrl}/${locale}/blog/${slug}`,
        languages: {
          ar: `${siteUrl}/ar/blog/${blog.slug_ar}`,
          en: `${siteUrl}/en/blog/${blog.slug}`,
        },
      },
      openGraph: {
        title,
        description,
        url: `${siteUrl}/${locale}/blog/${slug}`,
        siteName: "Dr. Aborahma",
        images: image ? [{ url: image, width: 1200, height: 630 }] : [],
        locale: locale === "ar" ? "ar_SA" : "en_US",
        type: "article",
        publishedTime: blog.created_at,
        modifiedTime: blog.updated_at,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : [],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
    };
  }
}

export default async function BlogSlugPage({ params }) {
  const { locale, slug } = await params;

  let blog;
  try {
    blog = await getBlogDetails(slug);
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }

  if (!blog || !blog.id) {
    notFound();
  }

  const title = locale === "ar" ? blog.title_ar : blog.title_en;
  const description =
    locale === "ar"
      ? blog.meta_description_ar || blog.description_ar
      : blog.meta_description_en || blog.description_en;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aburahmah.com";

  // Find photo based on locale
  const blogPhotos = blog.photos || [];
  const localeImage = blogPhotos.find((p) =>
    locale === "ar" ? !!p.is_arabic : !p.is_arabic,
  )?.url;
  const image = localeImage || blogPhotos[0]?.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
      name: locale === "ar" ? "د. محمد أبو رحمة" : "Dr. Mohammed Abu Rahma",
      url: `${siteUrl}/${locale}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Aborahma",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/main-logo-2.png`,
      },
    },
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${locale}/blog/${slug}`,
    },
  };

  // If blog has FAQs, add FAQ structured data
  let faqJsonLd = null;
  if (blog.faqs && blog.faqs.length > 0) {
    faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
        "@type": "Question",
        name: locale === "ar" ? faq.question_ar : faq.question_en,
        acceptedAnswer: {
          "@type": "Answer",
          text: locale === "ar" ? faq.answer_ar : faq.answer_en,
        },
      })),
    };
  }

  return (
    <React.Fragment>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <BlogPreloader />
      <WowReinit />
      <BlogHeader />
      <BlogHeaderX title={title} />
      <BlogDetailSection blog={blog} />
    </React.Fragment>
  );
}
