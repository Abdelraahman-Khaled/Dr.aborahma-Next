import { getBlogs } from "./api/blogs";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aburahmah.com";
  const locales = ["ar", "en"];

  // Base routes for each locale
  const staticRoutes = ["", "/blog"];

  const entries = [];

  // 1. Generate Static Routes with Alternates
  staticRoutes.forEach((route) => {
    entries.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });
  });

  // 2. Generate Dynamic Blog Routes
  try {
    const blogs = await getBlogs();
    if (Array.isArray(blogs)) {
      blogs.forEach((blog) => {
        const arSlug = blog.slug_ar || blog.slug;
        const enSlug = blog.slug || blog.slug_ar;

        // Arabic Entry
        entries.push({
          url: `${baseUrl}/ar/blog/${arSlug}`,
          lastModified: new Date(blog.updated_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
          alternates: {
            languages: {
              ar: `${baseUrl}/ar/blog/${arSlug}`,
              en: `${baseUrl}/en/blog/${enSlug}`,
            },
          },
        });

        // English Entry
        entries.push({
          url: `${baseUrl}/en/blog/${enSlug}`,
          lastModified: new Date(blog.updated_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
          alternates: {
            languages: {
              ar: `${baseUrl}/ar/blog/${arSlug}`,
              en: `${baseUrl}/en/blog/${enSlug}`,
            },
          },
        });
      });
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  return entries;
}
