export default function filter(array) {
  return array
    .filter(
      (value, idx, quote) =>
        idx === quote.findIndex(i => i.author === value.author)
    )
    .filter(idx => idx.author)
}
