import axios from 'axios'
import Cookies from 'js-cookie'
import { getCookieFromReq } from '../helpers/utils'

const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt')
  if (token) {
    return { headers: { authorization: `Bearer ${Cookies.getJSON('jwt')}` } }
  }
  return undefined
}

export const getSecretData = async (req) => {
  const url = 'http://localhost:3000/api/v1/secret'
  return axios.get(url, setAuthHeader(req)).then(response => { return response.data })
}
