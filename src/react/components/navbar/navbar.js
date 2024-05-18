import { useState } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

export default function NavigationBar() {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<>
			<nav>
				<div className="logo">
					<Link to="/">
						<img src="resources/logo.webp" alt="ksf logo" />
						<p className="cinzel bold">Kharian Sports Fest</p>
					</Link>
				</div>
				<div
					className="toggle"
					onClick={() => {
						setMenuOpen(!menuOpen)
					}}
				>
					<Link to="#">
						<ion-icon name="menu-outline" />
					</Link>
				</div>
				<ul className="menu">
					<li>
						<Link to="#" className="futura">
							The Team
						</Link>
					</li>
					<li>
						<Link to="/register" className="futura">
							Register
						</Link>
					</li>
					<li>
						<Link to="/contact" className="futura">
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
