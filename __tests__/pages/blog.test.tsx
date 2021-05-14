jest.mock('next/router', () => ({useRouter: () => ({asPath: ''})}))

import {render, screen} from '@/__tests__/testUtils'
import {Blog} from '@/pages/blog'

test('should render blog page', () => {
  render(<Blog posts={[]} />)

  const header = screen.getByRole('heading', {name: /blog/i})
  const message = screen.getByText(/no posts found\./i)

  expect(header).toBeInTheDocument()
  expect(message).toBeInTheDocument()
})

test('should sort and render posts', () => {
  const posts = [
    {
      title: 'blog 1',
      summary: 'blog summary 1',
      publishedAt: '2021-01-01',
      image: '',
      slug: 'blog-1',
      readingTime: {
        text: '1 min read',
      },
    },
    {
      title: 'blog 2',
      summary: 'blog summary 2',
      publishedAt: '2021-01-02',
      image: '',
      slug: 'blog-2',
      readingTime: {
        text: '2 min read',
      },
    },
  ]

  render(<Blog posts={[...posts]} />)

  const links = screen.getAllByRole('link', {name: /blog summary/i})

  expect(links).toHaveLength(2)
  expect(links[0]).toHaveAttribute('href', `/blog/${posts[1].slug}`)
})
