import type { NextPage } from 'next'
import { useState } from 'react'
import Meta from '../components/meta'

type Result = {
  caption: string
  className: string
}

const Contact: NextPage = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<Result>({
    caption: '送信する',
    className: 'button-common',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setResult({
      caption: '送信中',
      className: 'button-common pointer-events-none',
    })

    const res = await fetch('/api/sendMail', {
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    setResult(await res.json())
  }

  return (
    <>
      <Meta subTitle="お問い合わせ" type="article" />
      <article className="mb-12 flex justify-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <h2 className="mb-10 inline-flex items-center text-2xl font-bold">
            お問い合わせ
          </h2>
          <div className="mb-8 flex items-baseline">
            <label
              htmlFor="fullname"
              className="mb-2 block w-28 flex-shrink-0 font-medium"
            >
              お名前
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value)
              }}
              className="block w-full border border-commonBlack/50 p-2.5 dark:border-commonWhite/50 dark:bg-commonBlack"
              placeholder="山田太郎"
            />
          </div>
          <div className="mb-8 flex items-baseline">
            <label
              htmlFor="email"
              className="mb-2 block w-28 flex-shrink-0 font-medium"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="block w-full border border-commonBlack/50 p-2.5 dark:border-commonWhite/50 dark:bg-commonBlack"
              placeholder="xxxxx@xxx.com"
            />
          </div>
          <div className="mb-8 flex items-baseline">
            <label
              htmlFor="message"
              className="mb-2 block w-28 flex-shrink-0 font-medium"
            >
              メッセージ
            </label>
            <textarea
              id="message"
              value={message}
              rows={10}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              className="block w-full border border-commonBlack/50 p-2.5 dark:border-commonWhite/50 dark:bg-commonBlack"
              placeholder="お問い合わせ内容を入力してください"
            ></textarea>
          </div>
          <button className={`ml-28 px-10 py-1 text-lg ${result.className}`}>
            {result.caption}
          </button>
        </form>
      </article>
    </>
  )
}

export default Contact
