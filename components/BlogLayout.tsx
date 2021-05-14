import {Layout} from '@/components/Layout'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

type Props = {
  children: JSX.Element
  frontMatter: any
}

type GenerateUrl = {
  slug: string
}

const editUrl = (slug: GenerateUrl): string =>
  `https://github.com/PhilStainer/philstainer.io/edit/main/data/posts/${slug}.mdx`
const discussUrl = (slug: GenerateUrl): string =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://philStainer.io/blog/${slug}`
  )}`

export const BlogLayout = ({children, frontMatter}: Props): JSX.Element => {
  return (
    <Layout
      title={`${frontMatter.title} - Phil Stainer`}
      description={frontMatter.summary}
      image={`https://philstainer.io${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start w-full max-w-3xl mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl mb-5 text-gray-900 dark:text-gray-100">
          {frontMatter.title}
        </h1>

        <div className="flex justify-between items-start w-full text-sm font-light">
          <p className="text-gray-600 dark:text-gray-300">
            Phil Stainer -{' '}
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            {frontMatter.readingTime.text}
          </p>
        </div>

        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>

        <div className="w-full flex justify-center text-sm text-gray-600 dark:text-gray-300 mt-5 space-x-1">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          <span>•</span>
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Layout>
  )
}
