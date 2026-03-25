export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aburahmah.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cdn-cgi/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
