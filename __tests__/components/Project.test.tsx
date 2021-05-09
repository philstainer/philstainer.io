import {Project} from '@/components/Project'
import {render, screen} from '@/__tests__/testUtils'

const config = {
  title: 'philstainer.io',
  description: 'My personal site and blog.',
  href: 'https://philstainer.io',
  source: 'https://github.com/PhilStainer/philstainer.io',
  tags: ['next.js', 'tailwind'],
}

test('should render project', () => {
  render(
    <Project
      title={config.title}
      description={config.description}
      href={config.href}
      source={config.source}
      tags={config.tags}
    />
  )

  const title = screen.getByText(/philstainer\.io/i)
  const tags = screen.getAllByTestId('tag')
  const description = screen.getByText(/my personal site and blog\./i)
  const hrefLink = screen.getByRole('link', {name: /view site/i})
  const sourceLink = screen.getByRole('link', {name: /source code/i})

  expect(title).toBeInTheDocument()
  expect(tags).toHaveLength(config.tags.length)
  expect(description).toBeInTheDocument()
  expect(hrefLink).toBeInTheDocument()
  expect(sourceLink).toBeInTheDocument()
})

test('should not render source link', () => {
  render(
    <Project
      title={config.title}
      description={config.description}
      href={config.href}
    />
  )

  const sourceLink = screen.queryByRole('link', {name: /source code/i})

  expect(sourceLink).not.toBeInTheDocument()
})

test('should not render tags', () => {
  render(
    <Project
      title={config.title}
      description={config.description}
      href={config.href}
    />
  )

  const tags = screen.queryAllByTestId('tag')

  expect(tags).toHaveLength(0)
})
