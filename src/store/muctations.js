/*
直接更新状态
*/
import {
  RECEIVE_CATEGORY,
  RECEIVE_POSITION,
  RECEIVE_SHOPS
} from './muctation-type'

export default {
  [RECEIVE_POSITION](state, {position}) {
    state.position = position
  }
}
