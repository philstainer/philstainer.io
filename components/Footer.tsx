export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col justify-center items-center max-w-3xl mx-auto w-full my-10">
      <hr className="w-full border border-gray-200 dark:border-gray-800 mb-10" />

      <div className="flex flex-col md:flex-row items-center md:justify-between self-stretch bg-purple-100 dark:bg-gray-900 rounded-2xl border border-purple-300 p-6 space-y-3 md:space-y-0">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          © 2021 Phil Stainer
        </div>

        <div className="flex space-x-3">
          <a
            href="https://twitter.com/PhilStainer"
            aria-label="My Twitter"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-6 w-6 text-gray-900 dark:text-gray-100"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 25"
            >
              <path d="M19.14 8.93a7.82 7.82 0 001.82-1.9c-.63.28-1.37.49-2.1.56a3.6 3.6 0 001.61-2.04 7.8 7.8 0 01-2.32.92 3.7 3.7 0 00-6.3 3.38 10.71 10.71 0 01-7.62-3.88 3.6 3.6 0 00-.5 1.87c0 1.26.64 2.39 1.66 3.05a3.9 3.9 0 01-1.69-.45v.03a3.7 3.7 0 002.96 3.62c-.29.07-.64.14-.95.14-.25 0-.46-.03-.7-.07a3.67 3.67 0 003.44 2.57A7.42 7.42 0 013 18.24a10.29 10.29 0 005.66 1.65c6.79 0 10.48-5.59 10.48-10.47v-.5z" />
            </svg>
          </a>

          <a
            href="https://github.com/PhilStainer"
            aria-label="My github"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-6 w-6 text-gray-900 dark:text-gray-100"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8.8 16.71c0-.07-.07-.14-.18-.14-.1 0-.17.07-.17.14s.07.14.18.1c.1 0 .17-.03.17-.1zm-1.09-.17c0 .07.07.17.18.17.07.04.17 0 .2-.07 0-.07-.03-.14-.13-.18-.1-.03-.21 0-.25.08zm1.58-.04c-.1 0-.17.07-.17.18 0 .07.1.1.2.07.11-.04.18-.07.15-.14 0-.07-.1-.15-.18-.11zM11.58 3A8.44 8.44 0 003 11.58c0 3.9 2.43 7.24 5.94 8.44.46.07.6-.22.6-.43v-2.18s-2.46.53-2.99-1.05c0 0-.39-1.02-.95-1.27 0 0-.8-.56.04-.56 0 0 .88.07 1.37.92.77 1.37 2.04.98 2.56.73.07-.56.29-.95.57-1.2-1.97-.2-3.98-.48-3.98-3.86 0-.98.29-1.44.85-2.07-.1-.25-.39-1.16.1-2.4.7-.2 2.43.96 2.43.96.7-.22 1.44-.29 2.18-.29.77 0 1.51.07 2.21.29 0 0 1.7-1.2 2.43-.95.5 1.23.18 2.14.1 2.39.57.63.92 1.09.92 2.07 0 3.38-2.08 3.66-4.04 3.87.31.28.6.8.6 1.65 0 1.16-.04 2.64-.04 2.92 0 .24.17.53.63.42a8.73 8.73 0 005.9-8.4c0-4.85-3.97-8.58-8.85-8.58zM6.4 15.13c-.07.03-.04.14 0 .21.07.04.14.07.21.04.04-.04.04-.15-.03-.22-.07-.03-.14-.07-.18-.03zm-.39-.28c-.03.07 0 .1.07.14.07.03.14.03.18-.04 0-.03-.04-.07-.1-.1-.08-.04-.11-.04-.15 0zm1.13 1.26c-.04.04-.04.14.07.21.07.07.17.11.21.04.03-.04.03-.14-.04-.21-.07-.07-.17-.1-.24-.04zm-.39-.52c-.07.03-.07.14 0 .2.07.08.14.11.21.08.04-.04.04-.14 0-.21-.07-.07-.14-.1-.2-.07z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
