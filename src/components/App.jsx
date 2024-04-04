import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import MenuPage from './MenuPage/Menu'
import EditMenu from './EditMenu/EditMenu'

function App() {

  return (
  <>
    <LandingPage />
    <MenuPage />
    <EditMenu/>
    </>
  )
}

export default App
