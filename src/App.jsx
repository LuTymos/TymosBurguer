import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import List from './pages/List/List'
import Sacola from './pages/Sacola/Sacola'
import Admin from './pages/Admin/Admin'



function App() {

  

  return (
    <div className="App">
      <BrowserRouter>


      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/list' element={<List/>}/>
      <Route path='/sacola' element={<Sacola/>}/>
      <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Nav/>
      </BrowserRouter>
    </div>
  )
}

export default App
