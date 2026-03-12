import { siteConfig } from "../lib/seo/seo.config";

export default function sitemap() {
  return [
    {
      url: `${siteConfig.siteUrl}`,
      lastModified: new Date()
    },
    {
      
      url: `${siteConfig.siteUrl}/about`,
      lastModified: new Date()
    },
    {
      
      url: `${siteConfig.siteUrl}/services`,
      lastModified: new Date()
    },
    {
      url: `${siteConfig.siteUrl}/products`,
      lastModified: new Date()
    }
  ]
}