// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo'

import Home from '../components/Section/Home'
import Nav from '../components/Nav'
import Contacto from '../components/Section/Contacto/Contacto'
import Servicios from '../components/Section/Servicios'
import Habilidades from '../components/Section/Habilidades'
import Sobremi from '../components/Section/Sobremi'

export default function HomeInicio() {
  return (
    <main>
      {/* ========== SCROLL TOP ========== */}
      <a href='#' className='scrolltop' id='scroll-top'>
        <box-icon
          color='#ccff00'
          name='up-arrow'
          type='solid'
          animation='fade-up'
        ></box-icon>
        {/* <box-icon color='#ccff00' type='solid' name='up-arrow-circle'>hola</box-icon> */}
      </a>
      <NextSeo
        title='Portafolio Pedro Hidalgo'
        description='FullStack Developer'
        facebook={{
          appId: '1171798299949493',
        }}
        openGraph={{
          type: 'website',
          url: 'https://portafolio-phidalgo.vercel.app',
          title: 'Pedro Hidalgo - Portafolio',
          description: 'FullStack Developer',
          locale: 'es_VE',
          images: [
            {
              url:
                'https://portafolio-phidalgo.vercel.app/images/tablet-movil-desktop-web_portafolio.png',
              width: 150,
              height: 600,
              alt: 'Portafolio pedro Hidalgo',
            },
          ],
        }}
        twitter={{
          handle: '@phidalgot',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        // robotsProps={{
        //   nosnippet: true,
        //   noimageindex: true,
        //   noarchive: true,
        //   maxSnippet: -1,
        //   maxImagePreview: 'none',
        //   maxVideoPreview: -1,
        // }}
      />

      <Nav />
      <Home />
      <Sobremi />
      <Habilidades />
      <Servicios />
      <Contacto />
    </main>
  )
}
