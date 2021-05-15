import '@/styles/globals.css'

import {ThemeProvider} from 'next-themes'
import {AppProps} from 'next/app'
import {MDXProvider} from '@mdx-js/react'
import {MDXComponents} from '@/components/MDXComponents'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
