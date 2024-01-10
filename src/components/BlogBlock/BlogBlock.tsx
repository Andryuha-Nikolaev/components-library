"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import s from "./BlogBlock.module.scss"
import classNames from "classnames"
import { getAllPosts } from "@/services/getPosts"
import BlogBlockItem from "./components/BlogBlockItem/BlogBlockItem"

const BlogBlock = ({ posts }: { posts: any }) => {
  const [blogPosts, setBlogPosts] = useState(posts)

  return (
    <>
      <ul>
        {blogPosts.map((post: any) => (
          <BlogBlockItem
            post={post}
            key={`posts-list-${post.id}`}
          ></BlogBlockItem>
        ))}
      </ul>
    </>
  )
}

export default BlogBlock
