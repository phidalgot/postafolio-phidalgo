import styles from './habilidades.module.css'
import Stackactual from './Stackactual'

export default function HabiliHerra({
  habilidades,
  titulo,
  descrip,
  StackActual,
}) {
  return (
    <div className={styles.panel_habi}>
      <h2>{titulo}</h2>
      <p>{descrip}</p>
      <Stackactual StackActual={StackActual} />
      <div className={styles.content_habi}>
        {habilidades.map((habilidad, key) => {
          return (
            <div key={key} className={styles.habi_logo}>
              <img
                // data-aos='fade-right'
                // data-aos-offset='300'
                // data-aos-easing='ease-in-sine'
                style={{ width: '48px' }}
                src={`/images/icons-skiils/${habilidad.imagen}`}
              />
              <span
                // data-aos='fade-left'
                // data-aos-offset='300'
                // data-aos-easing='ease-in-sine'
              >
                {habilidad.Titulo}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
