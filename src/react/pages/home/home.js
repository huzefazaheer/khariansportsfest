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
					Igniting passion and camaraderie with electrifying and extraordinary
					athleticism. Join us for an unforgettable experience to compete
					against the best.
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
						Last date to register is <span className="date">24/6/2024</span>
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
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.711546463469!2d73.88316565064592!3d32.79595322783623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fa1a84b06ee73%3A0xb778b46716848759!2sAPS%26C%20Garrison%20Academy%20Kharian%20Cantt%20Campus!5e0!3m2!1sen!2s!4v1716766690042!5m2!1sen!2s"
					allowfullscreen="false"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
				<p id="address">Abrar Colony, Kharian Cantt, Kharian, Gujrat, Punjab</p>
			</div>
		</>
	)
}
