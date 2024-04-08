import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import MenuPage from './MenuPage/Menu'
import EditMenu from './EditMenu/EditMenu'
import LoginPage from './Login/Login'
import Form from './Form/Form'
import Footer from './Footer/Footer'

function App() {

  return (
  <>
      <LandingPage/>
      <MenuPage />
      <EditMenu />
      <Footer />
    </>
  )
}

export default App
