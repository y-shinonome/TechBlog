import Head from 'next/head'

type props = {
  subTitle?: string
  description?: string
  imageUrl?: string
  type?: string
}

const Meta: React.FC<props> = ({
  subTitle,
  description = '職業プログラマではないけど趣味でエンジニアリングをしています。モノづくり好きが高じてJamstack構成の爆速ブログを作ってみました。',
  imageUrl = 'https://images.microcms-assets.io/assets/8fd73e43936d4dc891b4a5238994ad6b/f024a0c3614240b2811dbc43f7135ab7/cube.png',
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
