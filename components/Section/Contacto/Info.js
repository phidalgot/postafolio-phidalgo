import style from '../section.module.css'

export default function Info() {
  return (
    <div className={style.contactInfo}>
      <h3>Informacíon de Contactos</h3>
      <div className={style.contactInfoBx}>
        <div className={style.box}>
          <div className={style.icon}>
            <box-icon
              color='white'
              type='solid'
              name='directions'
              animation='tada'
            ></box-icon>
            {/* <box-icon color='white' type='solid' name='directions'></box-icon>{' '} */}
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-anchor-placement='top-bottom'
            className={style.text}
          >
            <h3>Direccíon</h3>
            <p>
              Lomas de Prados del este,
              <br />
              Caracas, Venezuela
              <br />
              1080
            </p>
          </div>
        </div>

        <div className={style.box}>
          <div className={style.icon}>
            <box-icon color='white' name='phone-incoming'></box-icon>
            {/* <FontAwesomeIcon icon={faPhone} /> */}
            {/* <i className='fas fa-tty'></i> */}
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-anchor-placement='top-bottom'
            className={style.text}
          >
            <h3>Teléfono</h3>
            <p>+58-0424-208-6263</p>
          </div>
        </div>

        <div className={style.box}>
          <div className={style.icon}>
            <box-icon color='white' name='mail-send'></box-icon>
            {/* <FontAwesomeIcon icon={faMailBulk} /> */}
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-anchor-placement='top-bottom'
            className={style.text}
          >
            <h3>Email</h3>
            <p>phidalgot@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
