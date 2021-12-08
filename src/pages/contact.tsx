import type { NextPage } from 'next'
import Meta from '../components/meta'

const Contact: NextPage = () => {
  return (
    <>
      <Meta subTitle="お問い合わせ" type="article" />
      <div className="flex justify-center mb-12">
        <article className="w-full">
          <h2 className="inline-flex items-center mb-10 text-2xl font-bold">
            お問い合わせ
          </h2>
          <div className="flex items-baseline mb-8">
            <label
              htmlFor="name"
              className="block flex-shrink-0 mb-2 w-28 font-medium"
            >
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="border-commonBlack/50 block p-2.5 w-full border"
              placeholder="山田太郎"
              required
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
              className="border-commonBlack/50 block p-2.5 w-full border"
              placeholder="xxxxx@xxx.com"
              required
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
              rows={10}
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
        </article>
      </div>
    </>
  )
}

export default Contact
