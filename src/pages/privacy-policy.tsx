import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { client } from '../utils/microCMS'
import Meta from '../components/meta'

type props = {
  title: string
  source: MDXRemoteSerializeResult
}

const PrivacyPolicy: React.FC<props> = ({ title, source }) => {
  return (
    <>
      <Meta subTitle={title} type="article" />
      <section className="prose mb-12 max-w-none">
        <MDXRemote {...source} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<props> = async () => {
  const pageData = await client.get({ endpoint: 'privacypolicy' })
  const mdxSource = await serialize(pageData.body)

  return {
    props: {
      title: pageData.title,
      source: mdxSource,
    },
  }
}

export default PrivacyPolicy
