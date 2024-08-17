import { useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"



export default function Login() {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassWord, setInputPassWord] = useState('')
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <section>
      <div className="login-div">
        <form className="login" onSubmit={e => handleForm(e)}>
          <div className="logo-container">
            <img alt="logo" className="logo" src="/assets/logo.svg" />
            <h2 className="company-name">Sheer Solutions</h2>
          </div>
          <div className="input-div">
            <label>E-mail:</label>
            <input type="email"
              placeholder="Digite seu e-mail..."
              onChange={e => setInputEmail(e.target.value)}
              required
              maxLength={30}
              value={inputEmail} />
          </div>
          <div className="input-div">
            <label>Senha:</label>
            <input type="password"
              placeholder="Digite sua senha..."
              onChange={e => setInputPassWord(e.target.value)}
              required
              maxLength={20}
              value={inputPassWord} />
          </div>
          <button type="submit" className="btn-login">Entrar</button>
          <p>Obs: Faça login com qualquer e-mail e senha.</p>

        </form>

      </div>


    </section>

  )
}
