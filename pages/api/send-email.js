import { sendEmail } from '../../lib/email.Helper'

export default async (req, res) => {
  const { nombre, email, tumensaje } = req.body
  //   console.log(req.body)
  //   res.status(200).json({ body: req.body })
  try {
    const respuestaSend = await sendEmail(nombre, email, tumensaje)
    if (respuestaSend.messageId) {
      // console.log({ respuestaSend })
      res
        .status(200)
        .send({
          status: 200,
          id: respuestaSend.messageId,
          msg: 'Mensaje Enviado con exito',
        })
    } else {
      // console.log({ respuestaSend })
      res.status(410).send(respuestaSend)
    }
  } catch (error) {
    // console.log('ESTO FUE EL ERROR =>', error)
    res.status(500).send(respuestaSend)
  }
}
