// import Head from 'next/head'
// import LogoPh from '../icons/Logoph'
import Link from 'next/link'
import { menuNav } from './opcionesMenu'
import { handleClickMenu, linkAction } from '../../lib/Helper'
export default function Nav() {
  return (
    <header className='header'>
      <a href='#' className='header__logo'>
        Pedro Hidalgo
      </a>

      <div onClick={handleClickMenu} className='header__toggle'>
        {/* <ion-icon
          name='menu-outline'
          // class='header__toggle'
          id='nav-toggle'
        ></ion-icon> */}
        <box-icon color='white' name='menu'></box-icon>
      </div>

      <nav className='nav' id='nav-menu'>
        <div className='nav__content bd-grid'>
          <div onClick={handleClickMenu} className='nav__close'>
            {/* <ion-icon
              name='close-outline'
              // class='nav__close'
              id='nav-close'
            ></ion-icon> */}
            <box-icon color='white' name='x-circle'></box-icon>
          </div>

          <div className='nav__perfil'>
            <div className='nav__img'>
              <img src='images/fotopedro.svg' alt='' />
            </div>

            <div>
              <a href='#' className='nav__name'>
                Pedro Hidalgo
              </a>
              <span className='nav__profesion'>Web designer</span>
            </div>
          </div>

          <div className='nav__menu'>
            <ul className='nav__list'>
              {menuNav.map((item) => {
                return (
                  <li
                    onClick={() => linkAction(item.id)}
                    key={item.id}
                    id={item.id}
                    className='nav__item'
                  >
                    {/* <Link href={`/${item.id}`}>
                      <a className='nav__link'> {item.opciones}</a>
                    </Link> */}
                    <a
                      // onClick={() => linkAction(item.id)}
                      className='nav__link'
                    >
                      {item.opciones}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className='nav__social'>
            <a href='#' className='nav__social-icon'>
              {/* <ion-icon name='logo-linkedin'></ion-icon> */}
              <box-icon
                color='white'
                type='logo'
                name='linkedin-square'
              ></box-icon>
            </a>
            <a href='#' className='nav__social-icon'>
              <box-icon color='white' type='logo' name='github'></box-icon>
              {/* <ion-icon name='logo-github'></ion-icon> */}
            </a>
            <a href='#' className='nav__social-icon'>
              <box-icon color='#0084b4' type='logo' name='twitter'></box-icon>

              {/* <ion-icon name='logo-twitter'></ion-icon> */}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
