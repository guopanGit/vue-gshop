/*
触发mutation调用间接更新状态的对象
*/
import {
  reqCategory,
  reqPosition,
  reqShops,
  getUserInfo,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'
import {
  RECEIVE_CATEGORY,
  RECEIVE_POSITION,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCRMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './muctation-type'

export default {
  // 异步获取地址
  async position({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqPosition(geohash)

    commit(RECEIVE_POSITION, {position: result.data})
  },
  // 异步商铺列表
  async shops({commit, state},) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
  // 食品列表
  async category({commit}, callback) {
    const result = await reqCategory()
    commit(RECEIVE_CATEGORY, {category: result.data})
    callback && callback()
  },
  // 保存用户信息
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 获取用户信息
  async getUserInfo({commit}) {
    const result = await getUserInfo()
    if (result.code === 0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit}, ck) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      ck && ck()
    }
  },
  updateFoodCount({commit}, {food, isAdd}){
    if(isAdd){
       commit(INCRMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}
