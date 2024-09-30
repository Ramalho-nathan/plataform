import React, { useState } from 'react'
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

//CSS
import './mobile.scss'
import './Login.scss'

function Login() {

    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleMode = () =>{
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    }

    const handleResetPassword = () => {
        navigate('/signup');
    }

  return (
    <div className={`login ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="section-login">
            <div className="logo">
                <h1>Incrivelmente <br /> Orlando</h1>
            </div>
            <form action="">
                <div className="input-group">
                    <input type="text" id='name' required autoComplete='none'/>
                    <span>Login</span>
                </div>
                <div className="input-group">
                    <input type="password" id='password' required autoComplete='none'/>
                    <span>Senha</span>
                </div>

                <div className="line"></div>

                <div className="btn-send">
                    <button>Acessar Minha conta</button>
                </div>
            </form>

            <div className="goSign">
                <p>esqueceu sua Senha? <span onClick={handleResetPassword}> Redefinir Senha</span></p>
            </div>
        </div>

        <div className="light" onClick={toggleMode}>
            {darkMode ? <LuLightbulbOff /> : <LuLightbulb />}
        </div>
    </div>
  )
}

export default Login