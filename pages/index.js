import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bibi Balwinder Kaur Katha Vachak - Sikh Punjabi Katha Vachak India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Name: Balwinder Kaur Sikh Gurbani Katha Vachak" />
        <p className="description">
Address: Ward Number 13, 2444, Mohalla Vikas Nagar, Shahkot, Punjab 144702, India</p>
  <p>
Phone: +918360802607</p>
<p>Email: katha@bibibalwinderkaur.com</p>
<p>Website: https://www.bibibalwinderkaur.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
