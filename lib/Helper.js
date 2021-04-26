/**
 * oculltar omostar menu en modo movil
 */
export const handleClickMenu = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.toggle('show')
  //   console.log('handleClickMenu =>', navMenu)
}

/*===== ACTIVE AND REMOVE MENU =====*/
export const linkAction = (section) => {
  const navLinkQuitar = document.querySelectorAll('.nav__item'),
    navLink = document.getElementById(section),
    navMenu = document.getElementById('nav-menu')
  const pageSection = document.getElementById(`section-${section}`)

  /*Active link*/

  // console.log('pageSection =>', pageSection)
  navLinkQuitar.forEach((n) => n.classList.remove('active'))
  navLink.classList.add('active')

  /*Remove menu mobile*/
  navMenu.classList.remove('show')

  // navegar a laseccion correspondiente
  if (pageSection) {
    // console.log('pageSection.scrollIntoView=>', pageSection.scrollIntoView)

    pageSection.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
/*==================== SHOW SCROLL TOP ====================*/
export function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  // console.log('hola scroolllllllll', scrollTop.scrollIntoView)

  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
  else scrollTop.classList.remove('show-scroll')
}
