import {Home} from '@/pages/index'
import {render, screen} from '@/__tests__/testUtils'

test('should render latest posts', () => {
  const posts = [
    {
      title: 'blog title 1',
      summary: 'blog summary 1',
      publishedAt: '2021-01-01',
      image: '',
      slug: 'blog-1',
      readingTime: {
        text: '1 min read',
      },
    },
    {
      title: 'blog title 2',
      summary: 'blog summary 2',
      publishedAt: '2021-01-02',
      image: '',
      slug: 'blog-2',
      readingTime: {
        text: '2 min read',
      },
    },
  ]

  render(<Home posts={posts} />)

  const title = screen.getByRole('heading', {name: /latest posts/i})
  const foundPosts = screen.getAllByRole('link', {name: /blog title/i})

  expect(title).toBeInTheDocument()
  expect(foundPosts).toHaveLength(2)
})

test('should not render latest posts', () => {
  render(<Home posts={[]} />)

  const title = screen.queryByRole('heading', {name: /latest posts/i})
  const foundPosts = screen.queryAllByRole('link', {name: /blog title/i})

  expect(foundPosts).toHaveLength(0)
  expect(title).not.toBeInTheDocument()
})
