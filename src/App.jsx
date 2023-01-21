import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onSnapshot, doc, query, collection, getDocs } from 'firebase/firestore'
import { db, storage, auth } from './firebase'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import List from './pages/List/List'
import Sacola from './pages/Sacola/Sacola'
import Admin from './pages/Admin/Admin'
import { useEffect } from 'react'



function App() {

  const [lanches, setLanches] = useState([])


  useEffect(() => {

    onSnapshot( collection(db, "lanches"), (snapshot)=>{
      setLanches(snapshot.docs.map(function(document){
        return {info:document.data()}
      }))

      console.log(lanches)
    })

  }, [])



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home lanches={lanches} />} />
          <Route path='/list' element={<List lanches={lanches} />} />
          <Route path='/sacola' element={<Sacola />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  )
}

export default App
