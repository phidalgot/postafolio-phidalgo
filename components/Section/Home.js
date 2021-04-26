import Botonlink from '../icons/Botonlink'
import style from './section.module.css'

export default function Home() {
  return (
    <section
    className={style.section_home}
      id='section-home'
      style={{
        backgroundImage: `url("/images/bg-pattern.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={style.paneluno}>
        <div>
          <p className={style.arribatitulo}>Hola! Yo Soy</p>
          <h1
            data-aos='zoom-in-up'
            data-aos-anchor-placement='top-bottom'
            className={style.titulo}
          >
            <span>Pedro</span>
            <br />
            <span>Hidalgo</span>
          </h1>
        </div>

        <h2
          // data-aos='zoom-in-up'
          // data-aos-anchor-placement='top-bottom'
          className={style.subtitulo}
        >
          Construyo soluciones WEB personalizadas
        </h2>
        <span className={style.subtituloVerde}>FullStack.</span>
        {/* 
        <a
          href='#'
          className='flex flex-row content-around	bg-green-600 hover:bg-green-700 text-white font-bold pl-12 py-2 px-4 rounded mt-8 w-64 shadow-xl'
        >
          <box-icon color='white' animation='tada' name='mail-send' />
          <h3 className='pl-2'>Iniciar un proyecto</h3>
        </a> */}
        <Botonlink
          color={'#9dde00'}
          texto={'Iniciar un Proyecto'}
          enlace={'#section-contacto'}
        />
      </div>

      <div className={style.paneldos}>
        <img src='images/hero.svg' alt={`prueba Thumbnail}`} />
      </div>
    </section>
  )
}
