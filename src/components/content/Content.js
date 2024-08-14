import { useState } from "react"
import { LuSend } from "react-icons/lu";
import './content.css'
import Dialogue from "../dialogue-area/Dialogue";



export default function Content() {
  const [value, setValue] = useState('')
  const [chat, setChat] = useState([])


  function handleForm(e) {
    e.preventDefault()
    setChat([...chat, value])
    setValue('')
  }

  return (
    <main className="main-container">
      <Dialogue chat={chat} />
      <div className="form-wrapper">
        <form className="form-container">
          <textarea placeholder="Digite sua pergunta..." value={value}
            rows={10} cols={50} wrap="soft"
            onChange={(e) => setValue(e.target.value)}
            className="input-field"></textarea>
          <button onClick={(e) => handleForm(e)} type="submit"
            className="submit-button"><LuSend className="icon" /></button>
        </form>
      </div>
    </main>
  )
}
