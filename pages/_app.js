import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Head>
      {/* <link href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" /> */}
      <meta name="keywords" content="" />
      </Head>

      <Component {...pageProps} />
      
    </Layout>
  )
}

export default MyApp
