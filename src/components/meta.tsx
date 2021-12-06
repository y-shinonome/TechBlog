import Head from 'next/head'

type props = {
  subTitle?: string
  description?: string
  imageUrl?: string
  type?: string
}

const Meta: React.FC<props> = ({
  subTitle,
  description = '',
  imageUrl = 'https://images.microcms-assets.io/assets/8fd73e43936d4dc891b4a5238994ad6b/db3bd44fb11b4a9b8d7baeb0703f7fd8/sample.png',
  type = 'website',
}) => {
  const title =
    typeof subTitle !== 'undefined' ? `${subTitle} | TECH BLOG` : 'TECH BLOG'
  const pageUrl = typeof window !== 'undefined' ? document.location.href : ''

  return (
    <Head>
      <meta content={description} name="description" />
      <title>{title}</title>
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  )
}

export default Meta
