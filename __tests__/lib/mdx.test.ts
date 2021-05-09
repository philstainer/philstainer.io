jest.mock('fs')
jest.mock('gray-matter')

import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

import {getFiles, getFilesMatter, basePath} from '@/lib/mdx'

const dir = 'test'
const path = join(basePath, dir)

describe('getFiles', () => {
  test('should return files from dir', async () => {
    await getFiles(dir)

    expect(fs.readdirSync).toHaveBeenCalledWith(path)
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
