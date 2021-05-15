import Head from 'next/head'
import {useRouter} from 'next/router'
import {ReactNode} from 'react'

import {Nav} from '@/components/Nav'
import {ThemeButton} from '@/components/ThemeButton'
import {Footer} from '@/components/Footer'

type Props = {
  children: ReactNode
  title?: string
  description?: string
  image?: string
  date?: string
  type?: string
}

export const Layout = ({children, ...customMeta}: Props): JSX.Element => {
  const router = useRouter()

  const meta: any = {
    title: 'Phil Stainer – Curious Developer and creator.',
    description: `Full-stack developer and JavaScript enthusiast.`,
    image: 'https://philstainer.io/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://philstainer.io${router.asPath}`}
        />
        <link rel="canonical" href={`https://philstainer.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Phil Stainer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PhilStainer" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <ThemeButton />
      <Nav />

      <main className="flex flex-col justify-center bg-white dark:bg-gray-900 px-6 mt-10 md:mt-20">
        {children}

        <Footer />
      </main>
    </div>
  )
}
