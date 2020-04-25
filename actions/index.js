import axios from 'axios'
import Cookies from 'js-cookie'
import { getCookieFromReq } from '../helpers/utils'

const setAuthHeader = () => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
  if(token) {
    return { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')}`}}
  }
  return undefined
}
export const getSecretData = aysnc (req) => {
  const url = 'http://localhost:3000/api/v1/secret' 
  return await axios.get('/api/v1/secret', setAuthHeader() ).then(response => {return response.data})
}

// export const getSecretDataServer = async (req) => {
//   return await axios.get('http://localhost:3000/api/v1/secret', setAuthHeader(req) ).then(response => {return response.data})
// }