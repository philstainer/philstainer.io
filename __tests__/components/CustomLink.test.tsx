import {CustomLink} from '@/components/CustomLink'
import {render, screen} from '@/__tests__/testUtils'

test('should render next link when href startsWith / or #', () => {
  render(<CustomLink href="/test" />)

  const link = screen.getByRole('link') as HTMLAnchorElement

  expect(link.target).toBe('')
})

test('should render a link when href is external', () => {
  render(<CustomLink href="https://www.google.com" />)

  const link = screen.getByRole('link') as HTMLAnchorElement

  expect(link.target).toBe('_blank')
})
