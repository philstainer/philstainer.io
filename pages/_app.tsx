import '@/styles/globals.css'

import {ThemeProvider} from 'next-themes'
import {AppProps} from 'next/app'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
