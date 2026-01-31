//import './App.css'
import { Outlet } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />   
    <Outlet />
    
  
    </>


  )
}

export default App
