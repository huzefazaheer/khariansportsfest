import React from 'react'

import { createRoot } from 'react-dom/client'

export function Hero() {
	return (
		<>
			<div className="hero-img">
				<img src="resources/logo.webp" alt="" />
				<p className="hero-text">
					Kharian
					<br />
					Sports Fest
				</p>
			</div>
			<p className="hero-subtext">
				Sed sit amet lectus bibendum, sodales ipsum et, ullamcorper ex.
				Curabitur gravida, est in maximus condimentum, urna nunc varius nisl.
			</p>
			<div className="hero-buttons">
				<a href="#" className="button-alternative">
					Learn More
				</a>
				<a href="/register" className="button-dark">
					Register Now
				</a>
			</div>
		</>
	)
}

export function CallToAction() {
	return (
		<>
			<div className="left">
				<h3 className="futura-lt">Don’t miss it.</h3>
				<p className="futura date">
					Last date to register is <span className="date">12/24/1947</span>
				</p>
				<a href="/register" className="button-light">
					Register Now
				</a>
			</div>
			<img src="resources/school.webp" alt="picture of gak" />
		</>
	)
}

export function Location() {
	return (
		<>
			<h1>
				Garrison Academy <br />
				Kharian Cantt
			</h1>
			<img src="resources/location.webp" alt="location of gak" />
			<p id="address">Abrar Colony, Kharian Cantt, Kharian, Gujrat, Punjab</p>
		</>
	)
}
