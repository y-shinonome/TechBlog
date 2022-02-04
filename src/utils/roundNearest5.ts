export const roundNearest5 = (x: number) => {
  return (Math.round((x * 2) / 10) * 10) / 2
}
