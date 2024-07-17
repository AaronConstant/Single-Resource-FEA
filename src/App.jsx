import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Index from './Pages/Index'
import About from './Pages/About'
import LogIn from './Pages/LogIn'
import New from './Pages/New'
import Show from './Pages/Show'
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import NavBar from './Components/NavBar'
// import Herb from './Components/Herb'
// import Herbs from './Components/Herbs'
// import HerbDetails from './Components/HerbDetails'
// import HerbNewForm from './Components/HerbNewForm'
// import HerbEditForm from './Components/HerbEditForm'



function App() {

  return (
      <div className='app-container'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/herbs/index' element={<Index/>}/> 
          <Route path='/herbs/about' element={<About/>}/> 
          <Route path='/herbs/login' element={<LogIn/>}/> 
          <Route path='/herbs/new' element={<New/>}/> 
          <Route path='/herbs/:id' element={<Show/>}/> 
          <Route path='/herbs/:id/edit' element={<Edit/>}/> 
          <Route path='*' element={<FourOFour/>}/> 
        </Routes>
      </div>
  )
}

export default App
