import { Route, Routes } from 'react-router-dom'

import NavigationBar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Register from './components/register'
import Contact from './components/contact'

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
