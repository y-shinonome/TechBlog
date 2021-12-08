import type { NextPage } from 'next'
import { useState } from 'react'
import Meta from '../components/meta'

const Contact: NextPage = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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

    setResult(res.status)
  }

  return (
    <>
      <Meta subTitle="お問い合わせ" type="article" />
      <article className="flex justify-center mb-12">
        <form className="w-full" onSubmit={handleSubmit}>
          <h2 className="inline-flex items-center mb-10 text-2xl font-bold">
            お問い合わせ
          </h2>
          <div className="flex items-baseline mb-8">
            <label
              htmlFor="fullname"
              className="block flex-shrink-0 mb-2 w-28 font-medium"
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
              className="border-commonBlack/50 block p-2.5 w-full border"
              placeholder="山田太郎"
            />
          </div>
          <div className="flex items-baseline mb-8">
            <label
              htmlFor="email"
              className="block flex-shrink-0 mb-2 w-28 font-medium"
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
              className="border-commonBlack/50 block p-2.5 w-full border"
              placeholder="xxxxx@xxx.com"
            />
          </div>
          <div className="flex items-baseline mb-8">
            <label
              htmlFor="message"
              className="block flex-shrink-0 mb-2 w-28 font-medium"
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
              className="border-commonBlack/50 block p-2.5 w-full border"
              placeholder="お問い合わせ内容を入力してください"
            ></textarea>
          </div>
          <button
            type="submit"
            className="button-common ml-28 px-10 py-1 text-lg"
          >
            送信する
          </button>
          <p>{result}</p>
        </form>
      </article>
    </>
  )
}

export default Contact
