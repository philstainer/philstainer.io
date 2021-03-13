import {ThemeButton} from '@/components/ThemeButton'
import {fireEvent, render, screen} from '@/__tests__/testUtils'
import {useTheme} from 'next-themes'

jest.mock('next-themes', () => ({
  useTheme: jest.fn(() => ({theme: jest.fn(), setTheme: jest.fn()})),
}))

const useThemeMocked = (useTheme as unknown) as jest.Mock

test('should render button with alt', () => {
  render(<ThemeButton />)

  const themeButton = screen.getByRole('button', {
    name: /toggle theme/i,
  })

  expect(themeButton).toBeInTheDocument()
})

test('should call setTheme onClick', () => {
  const setThemeMock = jest.fn()

  useThemeMocked.mockImplementation(() => ({
    theme: jest.fn(),
    setTheme: setThemeMock,
  }))

  render(<ThemeButton />)

  const themeButton = screen.getByRole('button', {
    name: /toggle theme/i,
  })

  expect(setThemeMock).toHaveBeenCalledTimes(0)

  fireEvent.click(themeButton)
  expect(setThemeMock).toHaveBeenCalledTimes(1)

  fireEvent.click(themeButton)
  expect(setThemeMock).toHaveBeenCalledTimes(2)
})
