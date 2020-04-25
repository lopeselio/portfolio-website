export const getCookiesFromReq = (cookie) => {
  const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookie}=`))
  if (!cookie) { return undefined }
  return cookie.split('=')[1]
}
