import Link from 'next/link'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import {Post} from 'types/Post'

export const BlogPost = ({
  title,
  summary,
  publishedAt,
  slug,
  readingTime,
}: Post): JSX.Element => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="flex w-full mb-6 md:mb-8">
        <div className="space-y-1">
          <h4 className="text-xl md:text-2xl tracking-tight text-gray-900 dark:text-gray-100">
            <span>{title}</span>
          </h4>

          <p className="text-gray-500 dark:text-gray-400">
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')} -{' '}
            {readingTime.text}
          </p>

          <p className="text-gray-600 dark:text-gray-300">{summary}</p>
        </div>
      </a>
    </Link>
  )
}
