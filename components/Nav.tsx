import Link from 'next/link'

export const pages = [
  {name: 'Home', href: '/'},
  {name: 'Blog', href: '/blog'},
]

export const Nav = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-end w-full max-w-5xl p-6 mx-auto my-0 bg-white select-none dark:bg-gray-900 md:my-2">
      <div className="space-x-2">
        {pages.map(({name, href}) => (
          <Link key={name} href={href}>
            <a className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors rounded sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200">
              {name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}
