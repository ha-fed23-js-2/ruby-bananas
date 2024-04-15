import { createHashRouter } from 'react-router-dom'
import Root from './components/Root.jsx'
import EditMenu from './components/EditMenu/EditMenu.jsx'
import LoginPage from './components/Login/Login.jsx'
import Form from './components/Form/Form.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Thanks from './components/Thanks/Thanks.jsx'


const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
				path: '/thanks',
				element: <Thanks />
			},
			{
				path: '/login',
				element: <LoginPage />
			},
			{
				path: '/edit',
				element: <EditMenu />
			},
			{
				path: '/cart',
				element: <ShoppingCart />
			},
			{
				path: '/form',
				element: <Form />
			},
				{
				path: '/',
				element: <LandingPage />
			}
		]
	},

]);

export { router }