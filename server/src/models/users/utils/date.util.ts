export function createDueDate () : string {
  let dateDue = new Date()
  dateDue.setMonth(dateDue.getMonth() + 1)
  return dateDue + ''
}