import './quote.css'

export default function Quote({ data }) {
  return (
    <div class='quote'>
      <div class='quote-content'>
        <span>X</span>
        <p>{data}</p>
      </div>
    </div>
  )
}
