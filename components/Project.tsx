export type Props = {
  title: string
  description: string
  href?: string
  source?: string
  tags?: string[]
}

export const Project = ({
  title,
  description,
  href,
  source,
  tags,
}: Props): JSX.Element => {
  return (
    <div className="block mb-7 space-y-2">
      <div className="flex justify-between items-center text-gray-900 dark:text-gray-100">
        <h4 className="text-xl md:text-2xl tracking-tight">
          <span>{title}</span>
        </h4>
      </div>

      {tags && (
        <div className="flex items-center uppercase tracking-wide text-xs space-x-2">
          <div className="text-gray-600 dark:text-gray-400">Built with</div>
          {tags.map(tag => (
            <div
              key={tag}
              data-testid="tag"
              className="text-xs text-green-800 dark:text-green-100 bg-green-100 dark:bg-green-800 rounded-full py-1 px-2.5"
            >
              {tag}
            </div>
          ))}
        </div>
      )}

      <p className="font-light leading-5 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <div className="flex space-x-2">
        {href && (
          <a
            href={href}
            aria-label="View Site"
            title="View Site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200 transition p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}

        {source && (
          <a
            href={source}
            aria-label="Source Code"
            title="View Source Code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-200 transition p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
