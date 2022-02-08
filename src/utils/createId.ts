export const createId = () => {
  return Math.floor(new Date().getTime() * Math.random() * 1000).toString(16)
}
