export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Company",
    url: "https://yourwebsite.com",
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