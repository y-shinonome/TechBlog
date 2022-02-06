import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja-JP">
        <Head prefix="article: https://ogp.me/ns/article# website: https://ogp.me/ns/article#" />
        <body className="bg-commonWhite text-commonBlack duration-300 dark:bg-commonBlack dark:text-commonWhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
