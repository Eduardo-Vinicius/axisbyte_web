'use server'

import { cookies } from 'next/headers'

export async function setAuthCookies(
  uid: string
) {
  const cookieStore = await cookies()
  
  cookieStore.set('uid', uid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })
}

export async function getAuthCookies(){
  const cookieStore = await cookies()
  
  var uid = cookieStore.get('uid');

  return {
    uid,
  };
}

export async function setRefreshToken(
  refreshtoken: string,
  access_token: string,
) {
  const cookieStore = await cookies()
    
  cookieStore.set('authToken', access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })

  cookieStore.set('refreshToken', refreshtoken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  })
}

export async function clearAuthCookies() {
  const cookieStore = await cookies()
  cookieStore.delete('authToken')
  cookieStore.delete('refreshToken')
  cookieStore.delete('is_signup_finished')
  cookieStore.delete('plan')
}

