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
    <LandingPage id="#landing"/>
      <MenuPage id="#menu" />
    <EditMenu/>
    <LoginPage/>
    <Form/>
    <Footer />
    </>
  )
}

export default App
