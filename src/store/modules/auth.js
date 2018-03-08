import {LOGIN, LOGOUT} from '../mutations-type'
import {saveToken, clearToken, getToken} from '../../utils/token-storage'
import {oauthPost} from '../../api/impl/auth'

const state = {
  token: {},
  login: false,
  logout: true
}

const mutations = {
  [LOGIN] (state, token) {
    state.token = token
    state.login = true
    state.logout = false
    // save token
    saveToken(token)
  },
  [LOGOUT] (state) {
    state.token = {}
    state.login = false
    state.logout = true
    // clear token
    clearToken()
  }
}

const actions = {
  // oauth2.0的授权方式
  login: ({commit}, code) => {
    oauthPost(
      code, response => {
        commit(LOGIN, response.data)
      },
      err => {
        console.log(err)
      })
  },
  getToken: ({commit}) => {
    const token = getToken()
    if (token) {
      commit(LOGIN, JSON.parse(token))
    }
  }
}

export default {
  state,
  actions,
  mutations
}
