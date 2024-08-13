import { useState } from "react"
import { LuSend } from "react-icons/lu";
import './content.css'

export default function Content() {
  const [value, setValue] = useState('')

  function handleForm(e) {
    e.preventDefault()
  }

  return (
    <main class="main-container">
      <div class="form-wrapper">
        <form class="form-container">
          <textarea placeholder="Digite sua pergunta..." value={value}
            rows={10} cols={50} wrap="soft"
            onChange={(e) => setValue(e.target.value)}
            class="input-field"></textarea>
          <button onClick={(e) => handleForm(e)} type="submit"
            class="submit-button"><LuSend className="icon" /></button>
        </form>
      </div>
    </main>
  )
}
