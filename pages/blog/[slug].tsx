import {BlogLayout} from '@/components/BlogLayout'
import {MDXComponents} from '@/components/MDXComponents'
import {getFileBySlug, getFiles} from '@/lib/mdx'
import {GetStaticPathsResult, GetStaticPropsResult} from 'next'
import {MDXRemote} from 'next-mdx-remote'
import {BlogPost} from 'types/BlogPost'

export const Blog = ({mdxSource, frontMatter}: BlogPost): JSX.Element => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  )
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const posts = await getFiles('posts')

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

type StaticProps = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({
  params,
}: StaticProps): Promise<GetStaticPropsResult<BlogPost>> => {
  const post = await getFileBySlug('posts', params.slug)

  return {props: post}
}

export default Blog
