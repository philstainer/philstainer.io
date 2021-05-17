import Link from 'next/link'
import {ThemeButton} from './ThemeButton'

export const pages = [
  {name: 'Home', href: '/'},
  {name: 'Blog', href: '/blog'},
]

export const Nav = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between md:justify-end w-full max-w-5xl p-6 mx-auto my-0 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 select-none md:my-2">
      <ThemeButton />

      <div className="space-x-2">
        {pages.map(({name, href}) => (
          <Link key={name} href={href}>
            <a className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
