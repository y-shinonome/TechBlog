//microcms-js-sdkのcreateClient関数のための型拡張
namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_SERVICE_DOMAIN: string
    readonly MICROCMS_API_KEY: string
  }
} 

type post = {
  id: string
  title: string
  heroImage: {
    url: string
  }
  categories: [
    {
      name: string
      id: string
    }
  ]
  description: string
  body: string
  publishedDate: Date
  updatedDate: Date
}