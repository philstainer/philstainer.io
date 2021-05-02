import Link from 'next/link'
import {Layout} from '@/components/Layout'

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="font-light text-gray-600 dark:text-gray-300 mb-3">
          Hi, I’m
        </div>
        <h1 className="font-bold text-4xl md:text-6xl mb-4 text-gray-800 dark:text-white">
          Phil Stainer
        </h1>
        <h2 className="leading-7 font-light text-gray-600 dark:text-gray-300 mb-5">
          I’m a full stack developer with a passion for creating and clean code.
          <br />
          Currently working at the NHS as a full stack developer.
        </h2>
        <p className="prose font-light text-gray-600 dark:text-gray-300">
          Check out some of my <a href="#projects">projects</a>, or read{' '}
          <Link href="/blog">articles</Link> I’ve written.
        </p>
      </section>
    </Layout>
  )
}

export default Home
