import * as React from 'react'
import Head from 'next/head'

import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <script async defer data-website-id="2fbff7ec-df32-4f0a-9ca9-39df87a38036" src="https://umami-pp-analytics.vercel.app/umami.js"></script>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
