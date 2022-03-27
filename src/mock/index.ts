import { Random, mock } from 'mockjs'

interface MockData {
  name: string
  qq: number
  ntime: string
  stars: number
  add: string
  status: boolean
}

var data = function () {
  let chartDatasskc: MockData | [] = [];   //Array<any>
  Array.from({ length: 20 }, function () {
    chartDatasskc.push({
      "name": Random.cname(),//随机生成中文名字
      'qq': /^\d{8,10}$/,
      "mtime": Random.datetime(),//随机生成日期时间
      "stars": Random.natural(0, 5),//随机生成1-5的数字
      "add": Random.region(),
      'status|1': [true, false]
    })
  })

  return mock(chartDatasskc)
}


// 仅做示例: 通过GET请求返回一个名字数组
export default [
  {
    url: "/api/getUsers",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "ok",
        data
      }
    }
  }
]
