import GTRequest from './http'
import Config from './config'

export const R = new GTRequest(Config)

interface BannerParams {
  page: number
}


export class HomeService {
  static async getBanner(params: BannerParams) {
    return R.request({
      url: '/banner',
      params
    })
  }
  static async getBanner1(params: BannerParams) {
    return R.request({
      url: '/banner1',
      params
    })
  }
}
