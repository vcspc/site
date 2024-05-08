import '@/styles/globals.scss'
import '@/styles/reset.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

    return (
      <>
        <Head>
          <title>Vira Negócios</title>
          <link rel="shortcut icon" href="./logo_vira.svg" />
        </Head>
        <Component {...pageProps} />
      </>
    ) 
  
}
