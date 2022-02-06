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
      <section className="prose prose-custom mb-12 max-w-none prose-h2:border-b-2 prose-h2:border-commonBlack/40 prose-h2:pb-1 prose-h3:underline prose-h3:decoration-commonBlack/40 prose-h3:decoration-dotted prose-h3:underline-offset-4 prose-em:bg-commonBlack/5 prose-em:px-1 prose-em:not-italic prose-code:bg-commonBlack/5 dark:prose-invert dark:prose-h2:border-commonWhite/60 dark:prose-h3:decoration-commonWhite/60 dark:prose-em:bg-commonWhite/20 dark:prose-code:bg-commonWhite/20">
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
