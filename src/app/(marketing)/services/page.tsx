import { generateSEO } from "@/src/lib/seo/generateMetadata"


export const metadata = generateSEO({
  title: "Services",
  description: "Explore our enterprise software development and consulting services.",
  path: "/services"
})

export default function ServicesPage() {
  return <div>Services Page</div>
}