import React from "react";
import { getBlogDetails } from "../../../api/blogs";
import BlogPreloader from "../components/BlogPreloader";
import BlogHeader from "../components/BlogHeader";
import BlogHeaderX from "../components/BlogHeaderX";
import BlogDetailSection from "../components/BlogDetailSection";
import BlogFooter from "../components/BlogFooter";
import { notFound } from "next/navigation";

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

    return {
      title: `${title} | Dr. Aborahma`,
      description,
      openGraph: {
        title,
        description,
        images: image ? [{ url: image }] : [],
        type: "article",
      },
      alternates: {
        canonical: `/${locale}/blog/${slug}`,
        languages: {
          ar: `/ar/blog/${blog.slug_ar || blog.slug}`,
          en: `/en/blog/${blog.slug || blog.slug_ar}`,
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

  return (
    <React.Fragment>
      <BlogPreloader />
      <BlogHeader />
      {/* We reuse BlogHeaderX or adjust it to show the post title? 
                Typically detail pages show the post title or just "Blog" breadcrumb.
                I'll keep it simple and consistent with the existing theme.
            */}
      <BlogHeaderX title={locale === "ar" ? blog.title_ar : blog.title_en} />
      <BlogDetailSection blog={blog} />
      <BlogFooter />
    </React.Fragment>
  );
}
