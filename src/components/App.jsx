import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import MenuPage from './MenuPage/Menu'
import EditMenu from './EditMenu/EditMenu'
import LoginPage from './Login/Login'

function App() {

  return (
  <>
    <LandingPage />
    <MenuPage />
    <EditMenu/>
    <LoginPage/>
    </>
  )
}

export default App
