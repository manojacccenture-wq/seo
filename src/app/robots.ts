import { siteConfig } from "../lib/seo/seo.config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  }
}