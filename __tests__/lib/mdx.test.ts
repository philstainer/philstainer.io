jest.mock('fs')
jest.mock('gray-matter')
jest.mock('next-mdx-remote/serialize')

import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import {serialize} from 'next-mdx-remote/serialize'

import {getFiles, getFileBySlug, getFilesMatter, basePath} from '@/lib/mdx'

const dir = 'test'
const path = join(basePath, dir)

describe('getFiles', () => {
  test('should return files from dir', async () => {
    await getFiles(dir)

    expect(fs.readdirSync).toHaveBeenCalledWith(path)
  })
})

describe('getFileBySlug', () => {
  const slug = 'blog-post'
  const dir = 'posts'

  const parsedFile = {
    data: {
      title: 'title',
      publishedAt: '2021-01-01',
      summary: 'summary',
      image: '',
    },
    content: 'content',
  }

  afterEach(() => jest.clearAllMocks())

  test('should get file from data/dir when slug', async () => {
    ;(matter as any).mockReturnValueOnce(parsedFile)

    await getFileBySlug(dir, slug)

    expect(fs.readFileSync).toHaveBeenCalledWith(
      join(basePath, dir, `${slug}.mdx`),
      'utf8'
    )
  })

  test('should get file from data when no slug', async () => {
    ;(matter as any).mockReturnValueOnce(parsedFile)

    await getFileBySlug(slug)

    expect(fs.readFileSync).toHaveBeenCalledWith(
      join(basePath, `${slug}.mdx`),
      'utf8'
    )
  })

  test('should parse and serialize markdown file and return post', async () => {
    const mdxSource = 'mdxSource'
    ;(matter as any).mockReturnValueOnce(parsedFile)
    ;(serialize as any).mockReturnValueOnce(mdxSource)

    const post = await getFileBySlug(dir, slug)

    expect(matter).toHaveBeenCalled()
    expect(serialize).toHaveBeenCalled()
    expect(serialize).toBeCalledWith(parsedFile.content, expect.anything())

    expect(post).toStrictEqual({
      mdxSource,
      frontMatter: {
        ...parsedFile.data,
        slug,
        wordCount: mdxSource.split(/\s+/gu).length,
        readingTime: readingTime(parsedFile.content),
      },
    })
  })
})

describe('getFilesMatter', () => {
  test('should parse and return all markdown files', async () => {
    const fileName = 'blog-post-1.mdx'
    const parsedFile = {
      data: {
        title: 'title',
        publishedAt: '2021-01-01',
        summary: 'summary',
        image: '',
      },
      content: 'content',
    }

    ;(fs.readdirSync as jest.Mock).mockReturnValueOnce([fileName])
    ;(matter as any).mockReturnValueOnce(parsedFile)

    const files = await getFilesMatter(dir)

    const returnedFile = {
      title: parsedFile.data.title,
      publishedAt: parsedFile.data.publishedAt,
      summary: parsedFile.data.summary,
      image: parsedFile.data.image,
      slug: fileName.replace('.mdx', ''),
      readingTime: readingTime(parsedFile.content),
    }

    expect(files).toEqual([returnedFile])
  })
})
