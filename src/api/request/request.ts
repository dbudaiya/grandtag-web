import axios from 'axios' // 引入 axios 库
import qs from 'qs' // qs 模块，用来系列化 post 类型的数据
import store from '@/store' // 状态管理，用于设置 token 或者调用自定义的接口方法
import errorHandle from './errorHandle' // 统一的错误响应处理
import { getToken } from '@/utils/auth' // 从 localStorage 中获取 token


class HttpRequest {
  // 设置默认值为空方便使用 devServer 代理
  constructor(baseURL = '') {
    this.defaultConfig = { // 默认配置
      baseURL,
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      timeout: 1000 * 10, // 请求超时时间
      isErrorHandle: false // 是否开启全局错误响应提示，默认关闭
    }
  }

  /**
   * 创建 axios 实例
   *
   * @param {Object} options 用户自定义配置
   * @return {Axios} 返回 axios 实例
   * @memberof HttpRequest
   */
  createAxiosInstance(options) {
    const axiosInstance = axios.create()
    // 默认配置和用户自定义配置合并
    const newOptions = this.mergeOptions(this.defaultConfig, options)
    // 调用拦截器
    this.interceptors(axiosInstance)
    // 返回实例
    return axiosInstance(newOptions)
  }

  /**
   * 合并配置
   *
   * @param {Object} source 原配置项
   * @param {Object} target 目标配置项
   * @return {Object} 返回新配置
   * @memberof HttpRequest
   */
  mergeOptions(source, target) {
    if (typeof target !== 'object' || target == null) {
      return source
    }
    return Object.assign(source, target)
  }


  /**
 * 拦截器
 *
 * @param {Axios} instance
 * @memberof HttpRequest
 */
  interceptors(instance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      const { headers, method, params, data } = config
      // 每次请求都携带 token
      const token = getToken() || ''
      token && (headers.Authorization = token)

      // 如果 Content-type 类型不为 'multipart/form-data;' （文件上传类型 ）
      if (!headers['Content-Type'].includes('multipart')) {
        // 如果请求方式为 post 方式，设置 Content-type 类型为 'application/x-www-form-urlencoded; charset=UTF-8'
        (method === 'post') && (headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8')
        // 根据 contentType 转换 data 数据
        const contentType = headers['Content-Type']
        // Content-type类型 'application/json;'，服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
        // Content-type类型 'application/x-www-form-urlencoded;'，服务器收到的raw body(原始数据) name=nowThen&age=18
        const paramData = (method === 'get') ? params : data
        contentType && (config.data = contentType.includes('json') ? JSON.stringify(paramData) : qs.stringify(paramData))
      }
      return config
    }, (error) => {
      // 处理响应错误
      this.defaultConfig.isErrorHandle && errorHandle(error)
      return Promise.reject(error)
    })

    // 响应拦截器
    instance.interceptors.response.use((response) => {
      const { status, data } = response

      // 正常响应
      if (status === 200 || (status < 300 || status === 304)) {
        if (data.code === 401) {
          // token 错误或者过期，需要重新登录，并清空 store 和 localstorge 中的 token
          store.dispatch('user/toLogin') // 跳转到登录界面
        }
        // 返回数据
        return Promise.resolve(data)
      }
      return Promise.reject(response)
    }, (error) => {
      // 处理响应错误
      this.defaultConfig.isErrorHandle && errorHandle(error)
      return Promise.reject(error)
    })
  }


}


export default HttpRequest
