import { siteConfig } from "./seo.config"

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
}: SEOProps) {

  const url = `${siteConfig.siteUrl}${path}`

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
          url: image,
          width: 1200,
          height: 630
        }
      ],
      locale: "en_US",
      type: "website"
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },

    alternates: {
      canonical: url
    }
  }
}