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

const Index: NextPage<Props> = ({ posts, pageCount }) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postData = await client.get({
    endpoint: 'posts',
    queries: { limit: 5 },
  })
  const pageCount = {
    totalCount: postData.totalCount,
    part: 1,
  }

  return {
    props: {
      posts: postData.contents,
      pageCount: pageCount,
    },
  }
}

export default Index
