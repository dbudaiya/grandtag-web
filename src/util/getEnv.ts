// 第一步               loadEnv 引入
import { loadEnv } from 'vite';
import _ from 'lodash'


// 第三步 传 要读取的 参数 key
const getEnv = function (env: string) {
  return loadEnv(_.last(process.argv), process.cwd())[env]
}

export default getEnv
