import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `${process.env.NEXT_PUBLIC_SITE_URL!}`;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [ "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/terms-and-conditions/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}