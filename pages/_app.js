import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Head>
      <title>Garrett Siegel | Front End Developer</title>
      <meta name="keywords" content="" />
      </Head>

      <Component {...pageProps} />
      
    </Layout>
  )
}

export default MyApp
