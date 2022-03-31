import Axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import qs from "qs";

const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

class GTRequest {
  instance: AxiosInstance
  pending = new Map();
  constructor(config: AxiosRequestConfig) {
    this.instance = Axios.create(config)
    this.instance.interceptors.request.use(
      (config) => { 
        this.removePending(config) // 在请求开始前，对之前的请求做检查取消操作
        this.addPending(config) // 将当前请求添加到 pending 中
        // let token = localStorage.getItem('token') || encodeURIComponent('无token')
        // if (token) {
        //   config.headers.Authorization = `${token}`;
        // }
        return config
      },
      (error) => {
        // 错误抛到业务代码
        window.$message.error('服务器异常，请联系管理员！')
        return Promise.reject(error.name)
      }
    )

    //全局响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        this.removePending(response) // 在请求结束后，移除本次请求
        const status = response.status
        let msg = ''
        if (status < 200 || status >= 300) {
          // 处理http错误，抛到业务代码
          msg = showStatus(status)
          if (typeof response.data === 'string') {
            response.data = { msg }
          } else {
            response.data.msg = msg
          }
        }
        return response
      },
      (error) => {
        if (Axios.isCancel(error)) {
          console.log('repeated request: ' + error.message)
        } else {
          window.$message.error('请求超时或服务器异常，请检查网络或联系管理员！')
        }
        console.log('全局响应失败拦截')
        return Promise.reject(error.name)

      }
    )
  }

  //加入泛型限定，返回数据类型为T，
  request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    console.log(this.pending)
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  returnUrl(config: AxiosRequestConfig) {
    return [
      config.method,
      config.url,
      qs.stringify(config.params),
      qs.stringify(config.data)
    ].join('&')

  }

  addPending(config: AxiosRequestConfig) {
    const url = this.returnUrl(config)
    config.cancelToken = config.cancelToken || new Axios.CancelToken(cancel => {
      if (!this.pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
        this.pending.set(url, cancel)
      }
    })
  }

  removePending(config: AxiosRequestConfig) {
    const url = this.returnUrl(config)
    if (this.pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
      const cancel = this.pending.get(url)
      cancel(url)
      this.pending.delete(url)
    }
  }

  clearPending() {
    for (const [url, cancel] of this.pending) {
      cancel(url)
    }
    this.pending.clear()
  }
}


export default GTRequest
