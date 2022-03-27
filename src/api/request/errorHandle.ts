/**
* axios统一错误处理主要针对HTTP状态码错误
* @param {Object} err
*/
function errorHandle (err) {
  // 判断服务器响应
  if (err.response) {
    switch (err.response.status) {
      // 用户无权限访问接口
      case 401:
        console.log('未授权，请先登录~')
        break
      case 403:
        console.log('服务器拒绝访问~')
        break
      case 404:
        console.log('请求的资源不存在~')
        break
      case 500:
        console.log('服务器异常，请稍后再试~')
        break
    }
  } else if (err.message.includes('timeout')) {
    console.log('连接超时~')
  } else if (
    err.code === 'ECONNABORTED' ||
    err.message === 'Network Error' ||
    !window.navigator.onLine
  ) {
    console.log('网络已断开，请检查连接~')
  } else {
    // 进行其他处理
    console.log(err.stack)
  }
 }
 
 export default errorHandle
