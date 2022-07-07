
import { useState } from 'react'
import './App.css'

import netflixLogo from"./assets/img/netflixlogo.png"
import facebookLogo from"./assets/img/Facebook_logo.png"


function App() {
const [count,setCount]=useState(0)
function add(){
  setCount((state)=>state+=1)
}
  return (
    <div>
       <div className="header">
      <div className="logo">
        <a href="#">
          <img src= {netflixLogo}  alt="" />
        </a>
      </div>
    </div>

    <div className="login_body">
      <div className="login_box">
        <h2>Entrar</h2>
        <form>
          <div className="input_box">
            <input
              required
              type="email"
              placeholder="Email ou número de telefone"
            />
          </div>

          <div className="input_box">
            <input required type="password" placeholder="Senha" />
          </div>

          <div>
            <button className="submit">Entrar</button>
          </div>
        </form>

        <div className="support">
          <div className="remeber">
            <span
              ><input
                type="checkbox"
                style={{margin: '0', padding: '0', height:
                '13px'}}
            /></span>
            <span>Lembre-se de mim</span>
          </div>
          <div className="help">
            <a href="#"> Precisa de Ajuda? </a>
          </div>
        </div>

        <div className="login_footer">
          <div className="login_facebook">
            <span
              ><img height="20px" src= {facebookLogo} alt=""
            /></span>
            <span><a href="#">Conectar com Facebook</a></span>
          </div>
          <div className="sign_up">
            <p>Novo por aqui? <a href="#">Assine agora.</a></p>
          </div>
          <div className="terms">
            <p>
              Esta página é protegida pelo Google reCAPTCHA para garantir que
              você não é um robo. <a href="#">Saiba mais</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
