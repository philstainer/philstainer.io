import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemoteSerializeResult} from 'next-mdx-remote/dist/types'
import mdxPrism from 'mdx-prism'

export const root = process.cwd()
export const basePath = path.join(root, 'data')

export type Post = {
  title: string
  publishedAt: string
  summary: string
  image: string
  slug?: string
  wordCount?: number
  readingTime: any
}

export const getFiles = async (dir: string): Promise<string[]> =>
  fs.readdirSync(path.join(basePath, dir))

export type BlogPost = {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: Post
}

export const getFileBySlug = async (
  dir: string,
  slug?: string
): Promise<BlogPost> => {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', dir, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${dir}.mdx`), 'utf8')

  const {
    data: {title, publishedAt, summary, image},
    content,
  } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-autolink-headings'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug,
      title,
      publishedAt,
      summary,
      image,
    },
  }
}

export const getFilesMatter = async (dir: string): Promise<Post[]> => {
  const files = await getFiles(dir)

  return files.reduce((posts: Post[], slug: string): Post[] => {
    const source = fs.readFileSync(path.join(basePath, dir, slug), 'utf-8')

    const {
      data: {title, publishedAt, summary, image},
      content,
    } = matter(source)

    return [
      {
        title,
        publishedAt,
        summary,
        image,
        slug: slug.replace('.mdx', ''),
        readingTime: readingTime(content),
      },
      ...posts,
    ]
  }, [])
}
