// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Home from '../components/Section/Home'
import Nav from '../components/Nav'
import Contacto from '../components/Section/Contacto/Contacto'
import Servicios from '../components/Section/Servicios'
import Habilidades from '../components/Section/Habilidades'
import Sobremi from '../components/Section/Sobremi'

export default function HomeInicio() {
  return (
    <>
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

      <Nav />
      <Home />
      <Sobremi />
      <Habilidades />
      <Servicios />
      <Contacto />
    </>
  )
}
