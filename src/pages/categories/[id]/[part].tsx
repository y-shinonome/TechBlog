import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../../../api/microCMS'
import BlogCard from '../../../components/blogCard'
import BlogCardWide from '../../../components/blogCardWide'
import Pagination from '../../../components/pagination'
import { useGetWindowWidth } from '../../../utils/client'

type Props = {
  posts: post[]
  pageCount: {
    totalCount: number
    part: number
  }
  categoryName: string
}

type Params = {
  id: string
  part: string
}

type ApiContainer = {
  contents: {
    id: string
    name: string
  }[]
  totalCount: number
}

const CategoriesSplit: NextPage<Props> = ({ posts, pageCount }) => {
  return (
    <>
      <ul className="px-3">
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
  //microCMS_APIからカテゴリーとして登録しているidの一覧を取得する
  const categoryListContainer: ApiContainer = await client.get({
    endpoint: 'categories',
    queries: { limit: 9999, fields: 'id' },
  })

  const pathList = await Promise.all(
    categoryListContainer.contents.map(async (content) => {
      //対象のカテゴリーidを含むpostデータの一覧を取得する
      const filteringPostData = await client.get({
        endpoint: 'posts',
        queries: {
          limit: 9999,
          filters: `categories[contains]${content.id}`,
          fields: 'id',
        },
      })

      const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
      //取得したpostデータの件数を元に生成するページ情報を持ったオブジェクトを作成
      const categoryTotalCountSplit = range(
        1,
        Math.ceil(filteringPostData.totalCount / 5)
      ).map((number) => ({
        params: { id: content.id, part: `${number}` },
      }))
      return categoryTotalCountSplit
    })
  )
  //id毎に分割されている配列を一つに纏める
  const paths: { params: Params }[] = []
  pathList.map((item) => {
    paths.push(...item)
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const offset = Number(params?.part) * 5 - 5
  const postContainer = await client.get({
    endpoint: 'posts',
    queries: {
      limit: 5,
      filters: `categories[contains]${params?.id}`,
      offset: offset,
    },
  })
  const pageCount = {
    totalCount: postContainer.totalCount,
    part: Number(params?.part),
  }
  const category: { name: string } = await client.get({
    endpoint: `categories/${params?.id}`,
  })

  return {
    props: {
      posts: postContainer.contents,
      pageCount: pageCount,
      categoryName: category.name,
    },
  }
}

export default CategoriesSplit
