import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Index from './Pages/Index'
// import About from './Pages/About'
import LogIn from './Pages/LogIn'
import Cart from './Pages/Cart'
import New from './Pages/New'
import Show from './Pages/Show'
import Edit from './Pages/Edit'
// import Studies from './Pages/Studies'
import FourOFour from './Pages/FourOFour'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


const API = import.meta.env.VITE_BASE_URL

function App() {
  const [herbdata, setHerbData] = useState()

  useEffect(() => {
    fetch(`${API}/herbs`)
    .then(res => res.json())
    .then(res => {setHerbData(res)})
    .catch(err => console.log(err))
}, [])


  return (
      <div className='app-container'>
        <Header/>
        <NavBar herbdata={herbdata}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/herbs' element={<Index herbdata = { herbdata }/>}/> 
          {/* <Route path='/herbs/about' element={<About/>}/>  */}
          <Route path='/herbs/login' element={<LogIn/>}/> 
          {/* <Route path='/herbs/studies' element={<Studies/>}/> */}
          <Route path='/herbs/cart' element={<Cart/>}/>
          <Route path='/herbs/new' element={<New/>}/> 
          <Route path='/herbs/:id' element={<Show/>}/> 
          <Route path='/herbs/:id/edit' element={<Edit/>}/> 
          <Route path='*' element={<FourOFour/>}/> 
        </Routes>
        <Footer/>
      </div>
  )
}


export default App
