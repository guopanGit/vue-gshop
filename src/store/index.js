/*
vuex核心管理对象store对象模块
*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './muctations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
