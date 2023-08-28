import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import '../styles/global.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Head>
          <title>Your Portfolio</title>
          <meta name="description" content="Your Portfolio Description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main-content">
          <About />
        </main>
      </div>
      <Footer />
  </>
  )
}
