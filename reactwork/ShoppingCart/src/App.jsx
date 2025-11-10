import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import MainLayout from './component/MainLayout'

function App(){
   return(
    <>
    {/* <h2>Welcome to Shopping cart</h2> */}
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Registration/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/MainLayout' element={<MainLayout/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
   )
}

export default App
