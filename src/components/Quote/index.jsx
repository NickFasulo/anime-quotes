import './quote.css'

export default function Quote({ data, handleClose }) {
  return (
    <div className='quote'>
      <div className='quote-content'>
        <span onClick={() => handleClose()}>✕</span>
        <p>"{data}"</p>
      </div>
    </div>
  )
}
