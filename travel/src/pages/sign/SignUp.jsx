import React from 'react'
import { LuLightbulb, LuLightbulbOff, LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

//CSS
import './sign.scss'

function SignUp() {

  
const navigate = useNavigate();
  
const handleBackPage = () =>{
  navigate('/');
}
  return (
    <div className="sign">
        <div className="sign-section">
          <div className="logo">
            <h1>Incrivelmente <br /> Orlando</h1>
          </div>

          <form action="">
            <div className="input-group">
              <input type="text" id='fullName' required autoComplete='none'/>
              <span>Nome Cadastrado</span>
            </div>
            <div className="input-group">
              <input type="email" id='email' required autoComplete='none'/>
              <span>Email</span>
            </div>

            <div className="btn-send">
              <button>Enviar Senha</button>
            </div>
          </form>

          <div className="light">
            <LuLightbulb />
          </div>

          <div className="backPage" onClick={handleBackPage}>
            <LuArrowLeft />
          </div>
        </div>
    </div>
  )
}

export default SignUp