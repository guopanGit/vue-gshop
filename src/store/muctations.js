/*
直接更新状态
*/
import {
  RECEIVE_CATEGORY,
  RECEIVE_POSITION,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from './muctation-type'

export default {
  [RECEIVE_POSITION](state, {position}) {
    state.position = position
  },
  [RECEIVE_CATEGORY](state, {category}) {
    state.category = category
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  }
}
