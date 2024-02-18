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
    <p><img src="https://www.bibibalwinderkaur.com/wp-content/uploads/2024/01/Balwinder-Kaur-Katha-Vachak.jpg"/></p>
        <Header title="Name: Balwinder Kaur Sikh Gurbani Katha Vachak" />
        <p className="description">
Address: Ward Number 13, 2444, Mohalla Vikas Nagar, Shahkot, Punjab 144702, India</p>
  <p>
Phone: +916280016730</p>
<p>Email: katha@bibibalwinderkaur.com</p>
<p>Website: https://www.bibibalwinderkaur.com
        </p>
    <p><a href="https://twitter.com/SikhKathaVachak">Twitter</a></p>
    <p><a href="https://www.instagram.com/SikhKathaVachak">Instagram</a></p>
    <p><a href="https://www.facebook.com/SikhKathaVachak">Facebook</a></p>
    <p><a href="https://www.pinterest.com/SikhKathaVachak">Pinterest</a></p>
    <p><a href="https://www.youtube.com/@SikhKathaVachak">YouTube</a></p>
    <p><a href="https://vimeo.com/sikhkathavachak">Vimeo</a></p>
    
      </main>

      <Footer />
    </div>
  )
}
