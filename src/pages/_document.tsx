import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head prefix="article: https://ogp.me/ns/article# website: https://ogp.me/ns/article#" />
        <body className="text-commonBlack bg-commonWhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
