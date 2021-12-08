import sgMail from '@sendgrid/mail'

sgMail.setApiKey('SG.xxx')

const sendMail = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const msg = {
      to: req.body.email,
      from: 'support@example.com',
      subject: 'お問合せありがとうございました。',
      text:
        'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
      html:
        'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
    }

    try {
      await sgMail.send(msg)
    } catch (error: any) {
      console.error(error)
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }

  res.status(200)
}

export default sendMail
