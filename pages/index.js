import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import '../styles/global.css'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Head>
          <title>Corey Gallagher</title>
          <meta name="description" content="Corey Gallagher" />
          <link rel="icon" href="/Corey3.png" />
        </Head>

        <main className="main-content">
          <About />
          <Experience />
        </main>
      </div>
      <Footer />
  </>
  )
}
