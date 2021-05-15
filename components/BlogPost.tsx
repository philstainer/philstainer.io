import {Post} from '@/lib/mdx'
import Link from 'next/link'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export const BlogPost = ({
  title,
  summary,
  publishedAt,
  slug,
  readingTime,
}: Post): JSX.Element => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="flex w-full mb-5">
        <div className="space-y-1 text-gray-900 dark:text-gray-100">
          <h4 className="text-xl md:text-2xl tracking-tight">
            <span>{title}</span>
          </h4>

          <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')} -{' '}
            {readingTime.text}
          </p>

          <p className="font-light">{summary}</p>
        </div>
      </a>
    </Link>
  )
}
