import {Layout} from '@/components/Layout'
import {render, screen, within} from '@/__tests__/testUtils'

test('should render nav', () => {
  render(<Layout>Test</Layout>)

  const navigation = screen.getByRole('navigation')

  const home = within(navigation).getByRole('link', {name: /home/i})
  const blog = within(navigation).getByRole('link', {name: /blog/i})

  expect(home).toBeInTheDocument()
  expect(blog).toBeInTheDocument()
})

test('should render children', () => {
  render(<Layout>Test</Layout>)

  const children = screen.getByText(/test/i)

  expect(children).toBeInTheDocument()
})

test('should render footer', () => {
  render(<Layout>Test</Layout>)

  const contentinfo = screen.getByRole('contentinfo')

  const home = within(contentinfo).getByRole('link', {name: /home/i})
  const blog = within(contentinfo).getByRole('link', {name: /blog/i})
  const github = within(contentinfo).getByRole('link', {name: /my github/i})
  const name = within(contentinfo).getByText(/phil stainer © 2021/i)

  expect(home).toBeInTheDocument()
  expect(blog).toBeInTheDocument()
  expect(github).toBeInTheDocument()
  expect(name).toBeInTheDocument()
})
