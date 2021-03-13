import Link from 'next/link'
import {ThemeButton} from '@/components/ThemeButton'

const items = [
  {name: 'Home', href: '/home'},
  {name: 'About', href: '/about'},
  {name: 'Blog', href: '/blog'},
]

export const Nav = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between w-full max-w-5xl p-6 mx-auto my-0 bg-white select-none dark:bg-gray-900 md:my-8">
      <ThemeButton />

      <div className="space-x-2">
        {items.map(({name, href}) => (
          <Link key={name} href={href}>
            <a className="p-2 text-gray-900 lowercase rounded dark:text-gray-200 sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
