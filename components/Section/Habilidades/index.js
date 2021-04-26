import styles from './habilidades.module.css'
import HabiliHerra from './HabiliHerra'
import { habilidades, Herramientas, StackActual } from './Data'

export default function Habilidades() {
  return (
    <section id='section-habilidades' className={styles.habilidades_container}>
      <HabiliHerra
        StackActual={StackActual}
        habilidades={habilidades}
        titulo='Habilidades/Skills'
        descrip='Las habilidades tecnologías que utilizo para dar vida a sus productos:'
      />
      <HabiliHerra
        habilidades={Herramientas}
        titulo='Herramientas/Tools'
        // descrip='Herramientas Utilizadas:'
      />
    </section>
  )
}
