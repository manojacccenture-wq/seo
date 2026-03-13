import { NextResponse } from "next/server"
import { blogs } from "../route"


export async function GET(
  req: Request,
    context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params
 


  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 })
  }

  return NextResponse.json(blog)
}