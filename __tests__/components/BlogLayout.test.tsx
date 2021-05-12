import {BlogLayout} from '@/components/BlogLayout'
import {render, screen, within} from '@/__tests__/testUtils'

test('should render blog layout', () => {
  const frontMatter = {
    title: 'title',
    publishedAt: '2021-01-01',
    summary: 'summary',
    image: '',
    slug: 'test blog',
    wordCount: 5,
    readingTime: {text: '5 min read'},
  }

  render(
    <BlogLayout frontMatter={frontMatter}>
      <p>Blog Content</p>
    </BlogLayout>
  )

  const title = screen.getByRole('heading', {name: frontMatter.title})
  const author = within(screen.getByRole('article')).getByText(/phil stainer/i)
  const date = screen.getByText(/january 01, 2021/i)
  const readingTime = screen.getByText(frontMatter.readingTime.text)
  const children = screen.getByText(/blog content/i)
  const discussUrl = screen.getByRole('link', {
    name: /discuss on twitter/i,
  }) as HTMLAnchorElement
  const editUrl = screen.getByRole('link', {
    name: /edit on github/i,
  }) as HTMLAnchorElement

  expect(title).toBeInTheDocument()
  expect(author).toBeInTheDocument()
  expect(date).toBeInTheDocument()
  expect(readingTime).toBeInTheDocument()
  expect(children).toBeInTheDocument()

  const slugUrl = encodeURIComponent(frontMatter.slug)
  expect(discussUrl.href).toContain(slugUrl)
  expect(editUrl.href).toContain(slugUrl)
})
