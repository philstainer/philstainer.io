jest.mock('next/router', () => ({useRouter: () => ({asPath: ''})}))

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

  const name = screen.getByText(/© 2021 phil stainer/i)
  const twitter = screen.getByRole('link', {name: /my twitter/i})
  const github = screen.getByRole('link', {name: /my github/i})

  expect(name).toBeInTheDocument()
  expect(twitter).toBeInTheDocument()
  expect(github).toBeInTheDocument()
})
