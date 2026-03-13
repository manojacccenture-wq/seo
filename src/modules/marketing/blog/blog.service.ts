import { generateSEO } from "@/src/lib/seo/generateMetadata"




export async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: "no-store"
  })

  return res.json()
}

export async function getBlog(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${slug}`,
    { cache: "no-store" }
  )

  return res.json()
}