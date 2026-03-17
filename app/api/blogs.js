const API = process.env.NEXT_PUBLIC_BASE_URL;
// if (process.env.NODE_ENV === "development") {
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// }
export const getBlogs = async () => {
  const res = await fetch(`${API}/blogs_landing`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const getBlogDetails = async (slug) => {
  const trimmedSlug = slug ? decodeURIComponent(slug).trim() : "";
  const res = await fetch(
    `${API}/blog_show?slug=${encodeURIComponent(trimmedSlug)}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};
