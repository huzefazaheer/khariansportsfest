import { Route, Routes } from 'react-router-dom'

import NavigationBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Register from './pages/register/register'
import Contact from './pages/contact/contact'
import Team from './pages/team/team'
import About from './pages/about/about'
import Tickets from './pages/tickets/tickets'

export default function App() {
	return (
		<>
			<NavigationBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/theteam" element={<Team />} />
				<Route path="/tickets" element={<Tickets />} />
				<Route path="/register" element={<Register />} />
			</Routes>

			<Footer />
		</>
	)
}
