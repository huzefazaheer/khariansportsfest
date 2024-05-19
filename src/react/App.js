import { Route, Routes } from 'react-router-dom'

import NavigationBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Register from './pages/register/register'
import Contact from './pages/contact/contact'

export default function App() {
	return (
		<>
			<NavigationBar />

			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contact" element={<Contact />} />
				{/* <Route path="/about" element={<About />} /> */}
			</Routes>

			<Footer />
		</>
	)
}
