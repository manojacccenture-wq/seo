import { generateSEO } from "@/src/lib/seo/generateMetadata"


export const metadata = generateSEO({
  title: "About Us",
  description: "Learn about our enterprise technology solutions and global expertise.",
  path: "/about"
})

export default function AboutPage() {
  return <div>About Page</div>
}