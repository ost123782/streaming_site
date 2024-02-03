export function createSessionId () : string {
  return Math.random().toString(36).substring(2,18)
}