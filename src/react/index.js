import React from 'react'

import { createRoot } from 'react-dom/client'

import { Hero, CallToAction, Location } from './home/home'

function NavigationBar() {
	return (
		<>
			<div className="logo">
				<a href="/">
					<img src="resources/logo.webp" alt="ksf logo" />
					<p className="cinzel bold">Kharian Sports Fest</p>
				</a>
			</div>
			<div className="toggle">
				<a href="#">
					<ion-icon name="menu-outline" />
				</a>
			</div>
			<ul className="menu">
				<li>
					<a href="#" className="futura">
						The Team
					</a>
				</li>
				<li>
					<a href="/register" className="futura">
						Register
					</a>
				</li>
				<li>
					<a href="/contact" className="futura">
						Contact Us
					</a>
				</li>
			</ul>
		</>
	)
}

function Footer() {
	return (
		<>
			<footer class="footer-long">
				<div id="footer-icon" className="footer-content">
					<img src="../resources/logo.webp" alt="" />
					<p>Kharian Sports Festival</p>
					<div className="icons">
						<a className="red" href="#">
							<ion-icon name="logo-instagram" />
						</a>
						<a className="gold" href="#">
							<ion-icon name="mail-outline" />
						</a>
					</div>
				</div>
				<div className="footer-right">
					<div className="footer-content">
						<ul>
							<li>
								<h4>Navigate</h4>
							</li>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">The Games</a>
							</li>
						</ul>
					</div>
					<div className="footer-content">
						<ul>
							<li>
								<h4>The Team</h4>
							</li>
							<li>
								<a href="#">Director</a>
							</li>
							<li>
								<a href="#">Asst. Director</a>
							</li>
							<li>
								<a href="#">Event Head</a>
							</li>
						</ul>
					</div>
					<div className="footer-content">
						<ul>
							<li>
								<h4>Contact Us</h4>
							</li>
							<li>
								<a href="/contact">Contact Staff</a>
							</li>
							<li>
								<a href="#">Investor Relations</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<footer className="footer-short">
				<p>© Kharian Sports Fest 2024</p>
			</footer>
		</>
	)
}

const navbar = document.getElementById('navigation')
const nav = createRoot(navbar)
nav.render(<NavigationBar />)

const footer = document.getElementById('footer')
const foot = createRoot(footer)
foot.render(<Footer />)

const herosec = document.getElementById('hero')
const hero = createRoot(herosec)
hero.render(<Hero />)

const calltoactionsec = document.getElementById('calltoaction')
const call = createRoot(calltoactionsec)
call.render(<CallToAction />)

const locationsec = document.getElementById('location')
const location = createRoot(locationsec)
location.render(<Location />)
