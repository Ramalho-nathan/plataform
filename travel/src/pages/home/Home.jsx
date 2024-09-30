import React, { useState } from 'react'
import Navbar from '../../component/navbar/Navbar'

//CSS
import './home.scss'


function Home() {

  const [activePage, setActivePage] = useState('dashboard');

  const handleSelectPage = (page) =>{
    setActivePage(page)
  }

  return (
    <div className="home">
        <Navbar onSelectPage={handleSelectPage} activePage={activePage} />

        <div className="container-home">
          <div className="title">
            <h1>Bem-Vindo, Nathan</h1>
            
          </div>

          <div className="stacks">

            <div className="card-stats">
              <h3>Orçamentos semana</h3>
              <span style={{color:'red'}}>00,00</span>
            </div>

            <div className="card-stats">
              <h3>Orçamentos Mês</h3>
              <span style={{color:'blue'}}>00,00</span>
            </div>

            <div className="card-stats">
              <h3>Orçamentos Pendentes</h3>
              <span style={{color:'violet'}}>00,00</span>
            </div>

          </div>

          <div className="pages">
            {activePage === 'dashboard' && <h1> Dashboard</h1>}
            {activePage === 'orcamento' && <h1> Orçamentos</h1>}
            {activePage === 'pedidos' && <h1>Pedidos</h1>}
            {activePage === 'linkOrcamento' && <h1>Link para Orçamento</h1>}
            {activePage === 'config' && <h1> Configurações</h1>}
          </div>
        </div>
    </div>
  )
}

export default Home