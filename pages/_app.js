import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Router from 'next/router'
import * as gtag from '../lib/gtag'

import { scrollTop } from '../lib/Helper'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener('scroll', scrollTop)
    // CargaScroll()
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1200,

      // offset: 200,
      // duration: 600,
      // easing: 'ease-in-out-back',
      // delay: 100,
      // anchorPlacement: 'top-top',
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
