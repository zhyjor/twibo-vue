import axios from 'axios'
import {HOST_CONCIG, API_ROUTER_CONFIG, DEBUG} from '../../api/config/api-list'
import {logger} from '../../utils/logger'
import store from '../../store/'

let data = {}
export const getUserInfo = (userId, userName, okCallback, errorCallback) => {
  if (DEBUG) {
    okCallback(data.userInfo)
    return
  }

  const accesstoken = store.getters.token.access_token
  var requestData = {
    access_token: accesstoken,
    uid: userId,
    screen_name: userName
  }

  var config = {
    method: 'get',
    url: API_ROUTER_CONFIG.userinfo,
    baseURL: HOST_CONCIG.host,
    params: requestData,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  axios(config)
    .then(function (response) {
      logger('oauthPost-ok', 'getUserInfo response succeed')
      okCallback(response.data)
    })
    .catch(function (error) {
      console.log(error)
      errorCallback(error)
    })
}
