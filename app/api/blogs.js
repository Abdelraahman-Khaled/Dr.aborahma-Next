// This fixes the 'UNABLE_TO_VERIFY_LEAF_SIGNATURE' error on servers with SSL issues
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const API = process.env.NEXT_PUBLIC_BASE_URL;

export const getBlogs = async () => {
  try {
    const res = await fetch(`${API}/blogs_landing`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching blogs landing:", error);
    throw error;
  }
};

export const getBlogDetails = async (slug) => {
  const trimmedSlug = slug ? decodeURIComponent(slug).trim() : "";
  const url = `${API}/blog_show?slug=${encodeURIComponent(trimmedSlug)}`;
  
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API returned ${res.status} for URL: ${url}`);
      return null;
    }
    
    return await res.json();
  } catch (error) {
    console.error("Fetch failed in getBlogDetails:", error);
    return null;
  }
};
