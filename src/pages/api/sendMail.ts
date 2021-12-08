import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey('SG.xxx')

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {

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
      res.status(200).json({ message: '送信に成功しました' })
    } catch (error: any) {
      res.status(500).json({ message: '送信に失敗しました' })
    }
}

export default sendMail
