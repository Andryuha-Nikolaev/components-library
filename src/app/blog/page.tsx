import { Metadata } from "next"
import BlogBlock from "@/components/BlogBlock/BlogBlock"
import { getAllPosts } from "@/services/getPosts"

export const metadata: Metadata = {
  title: "Blog",
}

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <>
      <h1>Blog page</h1>
      <BlogBlock posts={posts} />
    </>
  )
}
