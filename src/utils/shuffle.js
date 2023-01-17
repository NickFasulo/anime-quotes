export default function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.round(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
