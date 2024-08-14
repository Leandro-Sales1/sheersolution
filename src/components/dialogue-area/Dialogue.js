import './dialogue.css'

export default function Dialogue({ chat }) {
  return (
    <section className="dialogue-section">
      {chat.map((message, index) => (
        <div className='message-div' key={index}>
          <p className='label-message'> {message}</p>
          <label className='label-icon'></label>
        </div>
      ))
      }
    </section >
  )
}
