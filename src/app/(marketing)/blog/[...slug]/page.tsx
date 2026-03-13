import { generateSEO } from "@/src/lib/seo/generateMetadata"
import { getBlog } from "@/src/modules/marketing/blog/blog.service"

interface BlogProps {
  params: Promise<{
    slug: string
  }>
}

export async function  generateMetadata({ params }: BlogProps) {

  const slug = await params



  const blog = await getBlog(slug.slug)


  return generateSEO({
    title: blog.title,
    description: blog.description,
    path: `/blog/${blog.slug}`,
    image: blog.image
  })
}





export default async function BlogPage({ params }: BlogProps) {

  const { slug } = await params


const blogSlug = slug[0]

const blog = await getBlog(blogSlug)
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        {blog.title}
      </h1>

      <p className="text-gray-600 mt-4">
        {blog.description}
      </p>

      <article className="mt-6">
        {blog.content}
      </article>

    </div>
  )
}