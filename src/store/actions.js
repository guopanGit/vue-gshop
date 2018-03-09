/*
触发mutation调用间接更新状态的对象
*/
import {
  reqCategory,
  reqPosition,
  reqShops
} from '../api'
import {
  RECEIVE_CATEGORY,
  RECEIVE_POSITION,
  RECEIVE_SHOPS
} from './muctation-type'

export default {
  // 异步获取地址
  async Position ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqPosition(geohash)
    commit(RECEIVE_POSITION, {position: result.data})
  }
}
