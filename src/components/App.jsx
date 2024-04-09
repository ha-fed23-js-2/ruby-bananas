import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import MenuPage from './MenuPage/Menu'
import EditMenu from './EditMenu/EditMenu'
import LoginPage from './Login/Login'
import Form from './Form/Form'
import Footer from './Footer/Footer'

import { Link, Route, Routes } from 'react-router-dom'

function App() {

	return (
		<>
		
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="#menu" element="#menu" />
				<Route path="/redigera" element={<EditMenu />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/form" element={<Form />} />
				<Route path="#footer" element='#footer' />
			</Routes>
		</>
	)
}

export default App
