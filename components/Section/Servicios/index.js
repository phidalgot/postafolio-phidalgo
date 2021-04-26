import styles from './Servicios.module.css'
import { DatosServicios } from './Data'


export default function Servicios() {
  return (
    <>
      <div className={styles.services} id='section-services'>
        <div className={styles.divider_arriba}>
          <img src='/images/divider-2.svg' alt='alt' />
        </div>
        <div className={styles.heading}>
          <h2>Servicios</h2>
        </div>
        <div className={styles.content}>
          {DatosServicios.map((servicio, key) => {
            return (
              <div
                data-aos='zoom-in'
                data-aos-duration='5000'
                key={key}
                className={styles.serviceBX}
              >
                <img src={`/images/icons-skiils/${servicio.imagen}`} />
                <h2>{servicio.Titulo}</h2>
                <p>{servicio.Texto}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.divider_abajo}>
          <img src='/images/divider-3.svg' alt='alt' />
        </div>
      </div>
    </>
  )
}
