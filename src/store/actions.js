/*
vuex 管理的状态对象
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-type'
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

export default {
  //异步获取当前
async getAddress({commit,state}){
  const {latitude,longitude} = state
  const geohash = `${latitude},${longitude}`
  const result = await reqAddress(geohash)
  const address = result.data


  commit (RECEIVE_ADDRESS,{address})
},
  // 异步获取食品分类列表
  async getCategorys({commit}){
    const result = await reqCategorys()
    const categorys = result.data
    commit (RECEIVE_CATEGORYS,{categorys})
  },

  // 异步获取单家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops(longitude,latitude)
    const shops = result.data
    commit (RECEIVE_SHOPS,{shops})
  }



}
