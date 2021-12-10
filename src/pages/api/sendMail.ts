import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {

    const msg = [{
      to: req.body.email,
      from: {
        name: 'TECHBLOG | 問合わせ受付完了メール',
        email: process.env.SENDGRID_FROM_EMAIL,
      },
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        name: req.body.fullname,
        subject:'お問合せありがとうございます。',
        message: req.body.message,
      },
    },
    {
      to: process.env.SENDGRID_TO_EMAIL,
      from: {
        name: 'TECHBLOG | 問合わせ受付完了メール',
        email: process.env.SENDGRID_FROM_EMAIL,
      },
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        name: req.body.fullname,
        subject:'お問合せありがとうございます。',
        message: req.body.message,
      },
    }]
    try {
      await sgMail.send(msg)
      res.status(200).json({
        caption: '送信成功',
        className: 'bg-[#DEDEFF] pointer-events-none',
      })
    } catch (error: any) {
      res.status(500).json({
        caption: '送信失敗',
        className: 'bg-[#FFDEDE] pointer-events-none',
      })
    }
}

export default sendMail
