import Link from 'next/link'
import {Layout} from '@/components/Layout'
import {Project} from '@/components/Project'
import {getFilesMatter, Post} from '@/lib/mdx'
import {GetStaticProps} from 'next'
import {BlogPost} from '@/components/BlogPost'

type Props = {
  posts: Post[]
}

export const Home = ({posts}: Props): JSX.Element => {
  const latestPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3)

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start w-full max-w-3xl mx-auto">
        <section className="mb-16 md:mb-20">
          <div className="font-light text-gray-600 dark:text-gray-300 mb-3">
            Hi, I’m
          </div>
          <h1 className="font-bold text-4xl md:text-6xl mb-4 text-gray-900 dark:text-gray-100">
            Phil Stainer
          </h1>
          <h2 className="leading-7 font-light text-gray-600 dark:text-gray-300 mb-5">
            I’m a full stack developer with a passion for creating and clean
            code.
            <br />
            Currently working at the NHS as a full stack developer.
          </h2>
          <p className="prose dark:prose-dark font-light text-gray-600 dark:text-gray-300">
            Check out some of my <a href="#projects">projects</a>, or read{' '}
            <Link href="/blog">articles</Link> I’ve written.
          </p>
        </section>

        {latestPosts.length > 0 && (
          <section className="mb-10 w-full">
            <h3
              id="posts"
              className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-gray-100"
            >
              Latest Posts
            </h3>

            {latestPosts.map(post => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </section>
        )}

        <section className="w-full">
          <h3
            id="projects"
            className="font-bold text-2xl md:text-4xl mb-6 text-gray-900 dark:text-gray-100"
          >
            Projects
          </h3>

          <Project
            title="philstainer.io"
            description="My personal site and blog."
            href="https://philstainer.io"
            source="https://github.com/PhilStainer/philstainer.io"
            tags={['next.js', 'tailwind']}
          />

          <Project
            title="Easybank Landing Page"
            description="Landing page built from given design."
            href="https://easybank-landing-page-philstainer.vercel.app/"
            source="https://github.com/PhilStainer/easybank-landing-page"
            tags={['html', 'scss']}
          />
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFilesMatter('posts')

  return {props: {posts}}
}

export default Home
