import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import MenuPage from './MenuPage/Menu'
import EditMenu from './EditMenu/EditMenu'
import LoginPage from './Login/Login'
import Form from './Form/Form'

import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
  <>
  <nav>
	<ul>
		<li>
	<Link to="/">Hem</Link>
	<Link to="/meny">Meny</Link>
	<Link to="/redigera">Redigera</Link>
	<Link to="/login">Login</Link>
	<Link to="/form">Form</Link>
	 </li>
	  </ul>
	  </nav>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/meny" element={<MenuPage/>} />
    <Route path="/redigera" element={<EditMenu/>} />
	<Route path="/login" element={<LoginPage/>} />
	<Route path="/form" element={<Form/>} />
	  </Routes>
    </>
  )
}

export default App
