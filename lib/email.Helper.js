let nodemailer = require('nodemailer')

const sendEmail = async (name, email, tumensaje) => {
  let info

  const transporter = nodemailer.createTransport({
    secure: true,
    port: 465,
    host: 'smtp.gmail.com',
    // service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.PASSWORD_APLI_GOOGLE,
    },
  })

  //   console.log('gmail => ', process.env.GMAIL_USER, process.env.GMAIL_PASSWORD )

//   console.log('loque trae =>', name, email, tumensaje)

  const mailData = {
    from: `${name}`,
    to: process.env.GMAIL_USER,
    subject: `Enviado del portafolio WEB 🇻🇪  ${name}`,
    text: `${tumensaje} Sent from: ${email}`,
    html: `<div>${tumensaje}</div><p>Sent from: ${email}</p>`,
  }

  try {
    info = await transporter.sendMail(mailData)
    // console.log('INFO =>', info)
  } catch (error) {
    // console.log('ERROR1 =>', error)
    info = error
  }
  return info
}

export { sendEmail }
