import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import HomeLayout from '@/layouts/HomeLayout'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <HomeLayout posts={posts} />
}
