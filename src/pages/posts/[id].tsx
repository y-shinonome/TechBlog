import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { client } from '../../api/microCMS'
import CustomLink from '../../components/customLink'
import CustomImage from '../../components/customImage'
import Pager from '../../components/pager'

type props = {
  source: MDXRemoteSerializeResult
  post: post
  pages: {
    id: string
    title: string
  }[]
}

type params = {
  id: string
}

const components = {
  a: CustomLink,
  image: CustomImage,
}

dayjs.extend(timezone)
dayjs.extend(utc)

const Post: React.FC<props> = ({ source, post, pages }) => {
  const publishDate = dayjs(post.publishedDate)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')
  const updatedDate = dayjs(post.updatedDate)
    .tz('Asia/Tokyo')
    .format('YYYY年MM月DD日')
  //投稿記事一覧のリストから現在のページのindexを返す
  const index = pages.findIndex((page) => page.id === post.id)

  return (
    <>
      <div className="h-[60vw] max-h-[600px] md:h-[50vw] relative mx-6 sm:mx-0">
        <Image
          src={post.heroImage.url}
          alt={post.title}
          blurDataURL={`${post.heroImage.url}?w=20&h=20`}
          placeholder="blur"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <section className="p-1 w-full">
        <div className="mb-10 mx-6 sm:mx-0">
          <div className="flex flex-wrap mt-5">
            <time dateTime={post.publishedDate.toString()} className="mr-5">
              {publishDate}に公開
            </time>
            {publishDate !== updatedDate && (
              <time dateTime={post.updatedDate.toString()}>
                {updatedDate}に更新
              </time>
            )}
          </div>
          <div className="flex mt-5">
            <ul className="flex flex-wrap">
              {post.categories.map((category, index) => (
                <li key={index} className="m-1">
                  <Link href={`/posts/categories/${category.id}/1`}>
                    <a>{category.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="prose mt-5 max-w-none">
            <MDXRemote {...source} components={components} />
          </div>
        </div>
        <Pager pages={pages} index={index} />
      </section>
    </>
  )
}

export const getStaticPaths = async () => {
  //microCMS_APIからpostsデータのidのみを全件取得する
  const PostData = await client.get({
    endpoint: 'posts',
    queries: { fields: 'id' },
  })
  //ルーティングの情報を持ったparamsオブジェクトを配列の形で格納する
  const paths = PostData.contents.map((content: { id: string }) => ({
    params: content,
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<props, params> = async ({
  params,
}) => {
  const id = params?.id
  const PostData: post = await client.get({ endpoint: 'posts', contentId: id })
  const source = PostData.body
  const mdxSource = await serialize(source)
  const pageData = await client.get({
    endpoint: 'posts',
    queries: { limit: 1000, fields: 'id,title' },
  })

  return {
    props: {
      source: mdxSource,
      post: PostData,
      pages: pageData.contents,
    },
  }
}

export default Post
