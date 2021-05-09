import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export const root = process.cwd()
export const basePath = path.join(root, 'data')

export type Post = {
  title: string
  publishedAt: string
  summary: string
  image: string
  slug: string
  readingTime: any
}

export const getFiles = async (dir: string): Promise<string[]> =>
  fs.readdirSync(path.join(basePath, dir))

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
