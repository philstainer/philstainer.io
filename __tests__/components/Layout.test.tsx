import {Layout} from '@/components/Layout'
import {render, screen} from '@/__tests__/testUtils'

test('should render nav and children', () => {
  render(<Layout>Test</Layout>)

  const nav = screen.getByRole('navigation')
  const children = screen.getByText(/test/i)

  expect(nav).toBeInTheDocument()
  expect(children).toBeInTheDocument()
})
