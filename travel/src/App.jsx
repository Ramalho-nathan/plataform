import Login from './pages/login/Login';
import SignUp from './pages/sign/SignUp';
import Home from './pages/home/Home';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Home" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
