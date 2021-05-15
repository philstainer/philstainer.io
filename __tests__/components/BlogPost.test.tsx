import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import {BlogPost} from '@/components/BlogPost'
import {render, screen} from '@/__tests__/testUtils'

test('should render blog post', () => {
  const post = {
    title: 'blog title',
    summary: 'blog summary',
    publishedAt: '2021-01-01',
    image: '',
    slug: 'my-blog-name',
    readingTime: {
      text: '1 min read',
    },
  }

  render(<BlogPost {...post} />)

  const title = screen.getByRole('heading', {name: post.title})
  const summary = screen.getByText(post.summary)

  const formattedDate = format(parseISO(post.publishedAt), 'MMMM dd, yyyy')
  const details = screen.getByText(
    `${formattedDate} - ${post.readingTime.text}`
  )

  const link = screen.getByRole('link')

  expect(title).toBeInTheDocument()
  expect(summary).toBeInTheDocument()
  expect(details).toBeInTheDocument()

  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', `/blog/${post.slug}`)
})
