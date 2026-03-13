export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Livelihood Systems",
    description: "What your app does in one sentence.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL!}`,
    logo: "https://yourwebsite.com/logo.png",
    sameAs: [
      "https://linkedin.com/company/yourcompany",
      "https://twitter.com/yourcompany"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}