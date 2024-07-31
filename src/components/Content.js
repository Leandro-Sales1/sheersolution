import { useState } from "react"
import { LuSend } from "react-icons/lu";

export default function Content() {
  const [value, setValue] = useState('')

  function handleForm(e){
    e.preventDefault()
  }

  return (
    <main className="w-5/6">
      <div className="w-full h-screen flex flex-col-reverse">
        <form className="bg-slate-500 rounded-sm h-24 gap-4 relative bottom-0 flex items-center justify-center">
          <input type="text" placeholder="Digite sua pergunta..." value={value} 
            onChange={(e) => setValue(e.target.value)}
            className="w-4/5 px-2 shadow-md border border-black rounded-lg h-[3.250rem] overflow-auto"></input>
          <button onClick={(e)=>handleForm(e)} type="submit"
            className=" bg-white rounded-lg shadow-md border border-black  p-2"><LuSend className="text-4xl"/></button>  
        </form>
      </div>
    </main>
  )
}
