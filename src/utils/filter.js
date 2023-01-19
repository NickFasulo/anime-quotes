export default function filter(array) {
  return array
    .filter(
      (value, idx, quote) =>
        idx === quote.findIndex(i => i.character === value.character)
    )
    .filter(idx => idx.character)
}
