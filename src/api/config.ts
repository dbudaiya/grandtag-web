export default {
  baseURL: process.env.NODE_ENV === 'development'
    ? "http://123.207.32.32:9001/"
    : "https://produceCommon.com",   //(生产线地址)
   timeout: 4000
}
