import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

export const ThemeButton = (): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  // When mounted on client
  useEffect(() => setMounted(true), [])

  const isDarkMode = resolvedTheme === 'dark'

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="z-20 w-10 h-10 bg-gray-300 text-gray-900 rounded-sm overflow-hidden outline-none focus:outline-none focus:ring-2 focus:ring-gray-800 md:rounded-br-full md:fixed md:w-16 md:h-16 md:-top-0 md:-left-0 md:rounded-br-full dark:bg-gray-600 dark:text-gray-200 dark:focus:text-white dark:focus:ring-gray-200"
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      <div className="relative h-full flex items-center justify-center rounded-sm md:rounded-br-full outline-none">
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4 md:absolute md:bottom-8 md:right-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isDarkMode
                  ? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              }
            />
          </svg>
        )}
      </div>
    </button>
  )
}
