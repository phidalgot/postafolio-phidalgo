import { useState } from 'react'
import Spinner from '../../icons/Spinner'
import style from '../section.module.css'

function Mensaje() {
  const [enviar, setenviar] = useState(true)
  const [enviado, setenviado] = useState(true)

  const [mensaje, setmensaje] = useState({
    nombre: '',
    email: '',
    tumensaje: '',
  })

  const handleSubmitContact = (e) => {
    e.preventDefault()
    setenviado(false)

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mensaje),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setmensaje({
          nombre: '',
          email: '',
          tumensaje: '',
        })
        setenviar(true)
        setenviado(true)

      })
      .catch((err) => {
        console.log('ERROR =>', err.response)
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setmensaje({ ...mensaje, [name]: value })
    console.log({ mensaje })
    if (mensaje.email && mensaje.nombre && mensaje.tumensaje) {
      console.log('Entro')
      setenviar(false)
    } else {
      setenviar(true)
    }
  }

  return (
    <div className={style.formBx}>
      <form onSubmit={handleSubmitContact}>
        <h3>Deja tu Mensaje</h3>
        <p>
          Estoy disponible para trabajar en sus proyectos y dar vida a sus
          ideas. Estoy a solo un clic de distancia.
        </p>
        <input
          onChange={(e) => handleChange(e)}
          type='text'
          name='nombre'
          placeholder='Nombre Completo'
          value={mensaje.nombre}
        />
        <input
          onChange={(e) => handleChange(e)}
          type='email'
          name='email'
          placeholder='Correo electronico'
          value={mensaje.email}
        />
        <textarea
          name='tumensaje'
          onChange={(e) => handleChange(e)}
          placeholder='Tu Mensaje'
          value={mensaje.tumensaje}
        ></textarea>
        <button
          disabled={enviar}
          className={enviar ? style.btndisable : style.btn}
          type='submit'
          vaule='Enviar'
        >
          {/* <Spinner/> */}
          {enviado ? 'Enviar' : <Spinner />}
        </button>
      </form>
      {/* <a href='mailto:phidalgot@gmail.com'></a> */}
    </div>
  )
}

export default Mensaje
