import './quote.css'

export default function Quote({ data, handleClose }) {
  return (
    <div class='quote'>
      <div class='quote-content'>
        <span onClick={() => handleClose()}>✕</span>
        <p>{data}</p>
      </div>
    </div>
  )
}
