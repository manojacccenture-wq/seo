import { siteConfig } from "./seo.config"
import { Metadata } from "next"

type SEOProps = {
  title: string
  description?: string
  path?: string
  image?: string
  keywords?: string[]
}

export function generateSEO({
  title,
  description,
  path = "",
  image = "/og-image.png",
  keywords
}: SEOProps): Metadata {

  const url = `${siteConfig.siteUrl}${path}`
  const imageUrl = `${siteConfig.siteUrl}${image}`

  return {
    title: `${title} | ${siteConfig.siteName}`,
    description: description || siteConfig.description,
    keywords: keywords || siteConfig.keywords,

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: "en_US",
      type: "website"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },

    alternates: {
      canonical: url
    }
  }
}