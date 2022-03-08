import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../utils/microCMS'
import Meta from '../components/meta'
import BlogCard from '../components/blogCard'
import BlogCardWide from '../components/blogCardWide'
import Pagination from '../components/pagination'
import { useGetWindowWidth } from '../utils/client'

type Props = {
  posts: post[]
  pageCount: {
    totalCount: number
    part: number
  }
}

const PostsSplit: NextPage<Props> = ({ posts, pageCount }) => {
  return (
    <>
      <Meta />
      <h2 className="mb-12 font-bold text-commonBlack/80 dark:text-commonWhite/70">
        すべての投稿一覧
      </h2>
      <ul>
        {useGetWindowWidth() < 640
          ? posts.map((post, index) => (
              <li key={index}>
                <BlogCard post={post} />
              </li>
            ))
          : posts.map((post, index) => (
              <li key={index}>
                <BlogCardWide post={post} />
              </li>
            ))}
      </ul>
      <Pagination
        totalCount={pageCount.totalCount}
        currentPage={pageCount.part}
        cllassName="mb-10"
      />
    </>
  )
}

export const getStaticPaths = async () => {
  //postsAPIからデータの総数を取得するためにidのみ取得する
  const data = await client.get({
    endpoint: 'posts',
    queries: { fields: 'id' },
  })
  //postsデータの総数を元にルーティング用の配列を作成する関数
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  //5件毎に分割して投稿記事表示ページを作成する
  const paths = range(1, Math.ceil(data.totalCount / 5)).map((number) => ({
    params: { part: `${number}` },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const offset = Number(params?.part) * 5 - 5
  const postData = await client.get({
    endpoint: 'posts',
    queries: { limit: 5, offset: offset },
  })
  const pageCount = {
    totalCount: postData.totalCount,
    part: Number(params?.part),
  }

  return {
    props: {
      posts: postData.contents,
      pageCount: pageCount,
    },
  }
}

export default PostsSplit
