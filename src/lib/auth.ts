import { serialize, parse } from "cookie";

const COOKIE_NAME = "session_customer";
const MAX_AGE = 60 * 60 * 24; // 1 day

export function setSessionCookie(res: any, customerKey: string) {
  const cookie = serialize(COOKIE_NAME, customerKey, {
    httpOnly: true,
    path: "/",
    maxAge: MAX_AGE,
    sameSite: "lax"
  });
  res.setHeader("Set-Cookie", cookie);
}

export function clearSessionCookie(res: any) {
  const cookie = serialize(COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax"
  });
  res.setHeader("Set-Cookie", cookie);
}


export function serializeSessionCookie(customerKey: string) {
  return serialize(COOKIE_NAME, customerKey, {
    httpOnly: true,
    path: "/",
    maxAge: MAX_AGE,
    sameSite: "lax"
  });
}

export function getCustomerKeyFromCookies(): string | null {
  if (typeof window === 'undefined') return null;
  
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  return cookies[COOKIE_NAME] || null;
}


export function getSessionCustomer(req: any): string | null {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  return cookies[COOKIE_NAME] || null;
}

export function getCustomerKeyFromServerCookies(): string | null {
  const { cookies } = require('next/headers');
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  return sessionCookie?.value || null;
}
