//microcms-js-sdkのcreateClient関数のための型拡張
namespace NodeJS {
  interface ProcessEnv {
    readonly SERVICE_DOMAIN: string
    readonly API_KEY: string
  }
} 
