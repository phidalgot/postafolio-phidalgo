import styles from './Sbremi.module.css'
import Markdown from 'react-markdown'

import { SobremiTexto } from './Data'

export default function Sobremi() {
  return (
    <>
      <div className={styles.services} id='section-sobremi'>
        <div className={styles.divider_arriba}>
          <img src='/images/divider-6.svg' alt='alt' />
        </div>
        {/* <div className={styles.heading}>
          <h2>Servicios</h2>
        </div> */}
        {/* <div className={styles.angle}>
        </div> */}
        <div className={styles.content}>
          <div className={styles.ThreeSteps}>
            <div
              // data-id='13'
              // data-aos='flip-up'
              // data-aos-offset='150'
              className={styles.marckdown_text}
              id='marck'
            >
              <Markdown children={SobremiTexto} />
            </div>
          </div>
          <div className={styles.img_desktop}>
            <img src='/images/tablet-movil-desktop-web_portafolio.svg' alt='' />
          </div>
        </div>
        <div className={styles.divider_abajo}>
          <img src='/images/divider-4.svg' alt='alt' />
        </div>
      </div>
    </>
  )
}
