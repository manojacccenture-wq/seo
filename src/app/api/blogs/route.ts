import { NextResponse } from "next/server"

export const blogs = [
  {
    id: 1,
    slug: "nextjs-seo",
    title: "Next.js SEO Guide",
    description: "Complete guide to SEO in Next.js",
    content: "Full blog content for Next.js SEO..."
  },
  {
    id: 2,
    slug: "react-performance",
    title: "React Performance Tips",
    description: "Improve performance in React apps",
    content: "Full blog content for React performance..."
  },
  {
    id: 3,
    slug: "server-components",
    title: "Understanding Server Components",
    description: "Learn React Server Components",
    content: "Full blog content for Server Components..."
  }
]

export async function GET() {
  return NextResponse.json(blogs)
}