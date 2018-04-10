import {USERINFO} from '../mutations-type'
import {saveUserInfo} from '../../utils/user-storage'
import * as api from '../../api/impl/userInfo'
import {logger} from '../../utils/logger'
import {token} from '../getters'

const state = {userInfo: {}}
const mutations = {
  // login and save token
  [USERINFO] (state, userInfo) {
    // save in state
    state.userInfo = userInfo
    logger('user', 'save store succeed')
    console.log(userInfo)
    // save in localStorage
    saveUserInfo(userInfo)
  }
}

const actions = {
  // code
  getUserInfo: ({commit}, uid) => {
    api.getUserInfo(uid, null, response => {
        commit(USERINFO, response)
      },
      err => {
        console.log(err)
      }
    )
  },
  getUser: ({ commit }) => {
    /* eslint-disable */
    const userInfo = getUserInfo()
    if (userInfo) {
      commit(USERINFO, JSON.parse(token))
    }
  }
}

export default {
  state,
  actions,
  mutations
}


