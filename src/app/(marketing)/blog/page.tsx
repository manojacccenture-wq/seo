import Link from "next/link"
import { getBlogs } from "@/src/modules/marketing/blog/blog.service"


export default async function BlogPage() {

  const blogs = await getBlogs()

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">

        {blogs.map((blog: any) => (
          <div
            key={blog.id}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer"
          >

            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-600">
              {blog.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}