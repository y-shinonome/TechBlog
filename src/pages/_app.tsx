import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import usePageView from '../utils/usePaseview'
import GoogleAnalytics from '../components/googleAnalytics'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
