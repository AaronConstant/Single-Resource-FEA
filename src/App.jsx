import { Routes, Route } from 'react-router-dom'
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


function App() {

  return (
      <div className='app-container'>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/herbs/index' element={<Index/>}/> 
          {/* <Route path='/herbs/about' element={<About/>}/>  */}
          <Route path='/herbs/login' element={<LogIn/>}/> 
          {/* <Route path='/herbs/studies' element={<Studies/>}/> */}
          <Route path='/herbs/cart' element={<Cart/>}/>
          <Route path='/herbs/new' element={<New/>}/> 
          <Route path='/herbs/:id' element={<Show/>}/> 
          <Route path='/herbs/:id/edit' element={<Edit/>}/> 
          <Route path='*' element={<FourOFour/>}/> 
        </Routes>
      </div>
  )
}


export default App
