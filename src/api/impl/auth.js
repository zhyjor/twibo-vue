import axios from 'axios'
import {HOST_CONCIG, KEY_CONFIG, API_ROUTER_CONFIG} from '../../api/config/api-list'
import {logger} from '../../utils/logger'

export const oauthPost = (code, okCB, errCB) => {
  let authData = {
    client_id: KEY_CONFIG.app_key,
    client_secret: KEY_CONFIG.app_secret,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: KEY_CONFIG.redirect_uri
  }
  let config = {
    method: 'post',
    url: API_ROUTER_CONFIG.oauth_post,
    baseURL: HOST_CONCIG.host,
    data: authData,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios(config).then((response) => {
    logger('oauthPost-ok', 'oauthPost response succeed')
    okCB(response)
  }).catch((err) => {
    logger(err)
    errCB(err)
  })
}
