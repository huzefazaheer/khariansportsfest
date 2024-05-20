import { Link } from 'react-router-dom'

import './home.css'

export default function Home() {
	return (
		<>
			<Hero />
			<Location />
			<CallToAction />
		</>
	)
}

function Hero() {
	return (
		<>
			<div id="hero" class="hero-sec">
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
					<Link to="/about" className="button-alternative">
						Learn More
					</Link>
					<Link to="/register" className="button-dark">
						Register Now
					</Link>
				</div>
			</div>
		</>
	)
}

function CallToAction() {
	return (
		<>
			<div id="calltoaction" class="calltoaction-sec">
				<div className="left">
					<h3 className="futura-lt">Don’t miss it.</h3>
					<p className="futura date">
						Last date to register is <span className="date">12/24/1947</span>
					</p>
					<Link to="/register" className="button-light">
						Register Now
					</Link>
				</div>
				<img src="resources/school.webp" alt="picture of gak" />
			</div>
		</>
	)
}

function Location() {
	return (
		<>
			<div id="location" class="location-sec">
				<h1>
					Garrison Academy <br />
					Kharian Cantt
				</h1>
				<img src="resources/location.webp" alt="location of gak" />
				<p id="address">Abrar Colony, Kharian Cantt, Kharian, Gujrat, Punjab</p>
			</div>
		</>
	)
}
