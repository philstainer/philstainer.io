import {Layout} from '@/components/Layout'
import Link from 'next/link'

export const NotFound = (): JSX.Element => {
  return (
    <Layout title="404 - Phil Stainer">
      <div className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto mb-10 md:mb-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-36 md:h-48 text-blue-400 mx-auto mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="font-bold text-3xl md:text-6xl mb-5 text-gray-900 dark:text-gray-100">
          404 - Page not found
        </h1>

        <p className="leading-7 font-light text-sm text-gray-600 dark:text-gray-300 mb-5">
          Oops sorry...
        </p>

        <Link href="/">
          <a className="p-2 sm:p-3 w-64 font-bold bg-gray-100 dark:bg-gray-800 text-center rounded-md text-gray-900 dark:text-gray-100">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFound
