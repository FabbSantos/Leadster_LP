'use client'
import Demo from '@/components/demo/Demo'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import GlobalStyle from '@/globalStyles'



export default function Home() {
  return (
  <>
    <GlobalStyle/>
    <Hero/>
    <Demo/>
    <Footer/>
  </>

  )
}
