import React from 'react'
import { LuDoorOpen, LuLightbulb, LuLightbulbOff, LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

//CSS
import './navbar.scss'

function Navbar({onSelectPage, activePage}) {

    const navigate = useNavigate();

    const handleExit = () =>{
        navigate('/')
    }

  return (
    <header>
        <div className="navbar-container">
            <div className="logo">
                <h1>Incrivelmente <br /> Orlando</h1>
            </div>

            <div className="navbar">
                <ul className="navlist">
                    <li onClick={() => onSelectPage('dashboard')} className={activePage === 'dashboard' ? 'active': ''}>DashBoard</li>
                    <li onClick={() => onSelectPage('orcamento')} className={activePage === 'orcamento' ? 'active': ''}>Orçamentos</li>
                    <li onClick={() => onSelectPage('pedidos')} className={activePage === 'pedidos' ? 'active': ''}>Pedidos</li>
                    <li onClick={() => onSelectPage('linkOrcamento')} className={activePage === 'linkOrcamento' ? 'active': ''}>Link para Orçamento</li>
                    <li onClick={() => onSelectPage('config')} className={activePage === 'config' ? 'active': ''}>Configurações</li>
                </ul>
            </div>

            <div className="options">
                <div className="mode">
                    <p>Claro/Escuro <LuLightbulb /></p>
                </div>
                <div className="exit" onClick={handleExit}>
                    <p>Sair <LuDoorOpen /></p>
                </div>
            </div>

            <div className="close-navbar">
                <LuArrowLeft />
            </div>
        </div>
    </header>
  )
}

export default Navbar