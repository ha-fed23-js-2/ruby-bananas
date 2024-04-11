import { useState } from 'react'
import './Root.css'
import LandingPage from './LandingPage/LandingPage'

import Header from './Header/Header'



import { Link, NavLink, Outlet } from "react-router-dom"

const Root = () => (
	<div className="app">

	<main>
		<Outlet/>
	</main>
	</div>

)

export default Root