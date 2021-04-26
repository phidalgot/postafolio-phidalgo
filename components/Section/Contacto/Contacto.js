import Info from './Info'
import Mensaje from './Mensaje'

function Contacto() {
  return (
    <section
      style={{
        backgroundColor: '#282b3a',
      }}
      id={'section-contacto'}
    >
      <Info />
      {/* formulario a parutr de aqui */}
      <Mensaje />
       {/* fin formulario */}
    </section>
  )
}

export default Contacto
