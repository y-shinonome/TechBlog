import type { NextPage } from 'next'
import { IoWarningOutline } from 'react-icons/io5'
import Meta from '../components/meta'

const Page404: NextPage = () => {
  return (
    <>
      <Meta subTitle="ページが見つかりませんでした" />
      <div className="flex justify-center">
        <section className="mb-12">
          <h2 className="inline-flex items-center text-4xl font-bold">
            <IoWarningOutline className="mr-2" />
            404 Error
          </h2>
          <p className="mb-8 text-2xl">Page not found.</p>
          <p>
            ページが見つかりませんでした。
            <br />
            一時的にアクセスできない状況にあるか、
            <br />
            移動もしくは、削除された可能性があります。
          </p>
        </section>
      </div>
    </>
  )
}

export default Page404
