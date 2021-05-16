import {BlogPost} from '@/components/BlogPost'
import {Layout} from '@/components/Layout'
import {getFilesMatter, Post} from '@/lib/mdx'
import {GetStaticProps} from 'next'

type Props = {
  posts: Post[]
}

export const Blog = ({posts}: Props): JSX.Element => {
  const filteredPosts = posts
    .filter(post => Number(new Date()) >= Number(new Date(post.publishedAt)))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start w-full max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-gray-100">
          Blog
        </h1>

        {!filteredPosts.length && (
          <p className="text-gray-900 dark:text-gray-100">No posts found.</p>
        )}

        {filteredPosts.map(post => (
          <BlogPost key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFilesMatter('posts')

  return {props: {posts}}
}

export default Blog
