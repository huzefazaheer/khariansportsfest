import { Route, Routes } from 'react-router-dom'

import NavigationBar from './components/navbar'
import Footer from './components/footer/footer'
import Home from './components/home'
import Register from './components/register'

export default function App() {
	return (
		<>
			<NavigationBar />

			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/register" element={<Register />} />
			</Routes>

			<Footer />
		</>
	)
}
