import Link from 'next/link'
import {pages} from '@/components/Nav'

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col justify-center items-center max-w-3xl mx-auto w-full my-10">
      <hr className="w-full border border-gray-200 dark:border-gray-800 mb-8" />

      <div className="flex flex-col items-center self-stretch bg-purple-100 dark:bg-gray-900 rounded-sm border border-purple-300 p-6">
        <div className="mb-4">
          {pages.map(({name, href}) => (
            <Link key={name} href={href}>
              <a className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition rounded sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200">
                {name}
              </a>
            </Link>
          ))}

          <a
            href="https://github.com/PhilStainer"
            aria-label="My github"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition rounded sm:p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200"
          >
            Github
          </a>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          Phil Stainer © 2021
        </div>
      </div>
    </footer>
  )
}
