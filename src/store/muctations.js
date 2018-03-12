/*
直接更新状态
*/
import Vue from 'vue'
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
}
from './muctation-type'

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
  },

  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count) { // count有值才减1
      food.count--
      if(food.count===0) {// 如果数量减为0, 从购物车中移除
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },

  [INCRMENT_FOOD_COUNT] (state, {food}) {
    if(!food.count){
      // 新添加的属性没有被劫持 ☞ 没有数据绑定 ☞ 更新数据,界面不变
      Vue.set(food, 'count', 1)
      state.shopCart.push(food) // 添加到购物车
    } else {
      food.count ++
    }
  }
}
