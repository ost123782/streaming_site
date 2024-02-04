import { md5 } from 'js-md5';

export function hashPassword (noHashPassword: string) : string {
  return md5.hmac.hex(noHashPassword, 'HEIL HITLER!')
}