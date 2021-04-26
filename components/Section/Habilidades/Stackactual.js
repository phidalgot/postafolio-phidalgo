import styles from './habilidades.module.css'
export default function Stackactual({ StackActual }) {
  console.log('StackActual =>', typeof StackActual)
  if (typeof StackActual !== 'undefined') {
    return (
      <>
        <div className={styles.linea} />
        <h4 style={{ margin: '6px auto' }}>Stack Actual</h4>
        <div className={styles.stack_actual}>
          {StackActual.map((stacka, key) => {
            return (
              <div key={key} className={styles.habi_logo}>
                <img
                  data-aos='fade-up'
                  className={styles.stack_img}
                  style={{ width: '48px' }}
                  src={`/images/icons-skiils/${stacka.imagen}`}
                />
                <span data-aos='flip-left'>{stacka.Titulo}</span>
              </div>
            )
          })}
        </div>
        <div className={styles.linea} />
      </>
    )
  } else return ''
}
