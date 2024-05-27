import { Link } from 'react-router-dom'

import './footer.css'

export default function Footer() {
	return (
		<>
			<div>
				<footer class="footer-long">
					<div id="footer-icon" className="footer-content">
						<img src="resources/logo.webp" alt="" />
						<p>Kharian Sports Festival</p>
						<div className="icons">
							<a href="https://www.instagram.com/khariansportsfest/">
								<ion-icon name="logo-instagram" />
							</a>
							<a href="mailto:khariansportsfest@gmail.com">
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
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/">The Games</Link>
								</li>
							</ul>
						</div>
						<div className="footer-content">
							<ul>
								<li>
									<h4>The Team</h4>
								</li>
								<li>
									<Link to="/theteam#heads">Event Directors</Link>
								</li>
								<li>
									<Link to="/theteam#directorate">Directorate</Link>
								</li>
								<li>
									<Link href="/theteam">Game Heads</Link>
								</li>
							</ul>
						</div>
						<div className="footer-content">
							<ul>
								<li>
									<h4>Contact Us</h4>
								</li>
								<li>
									<Link to="/contact">Contact Staff</Link>
								</li>
								<li>
									<a href="mailto:khariansportsfest@gmail.com?subject=Sponsor details">
										Sponsor Relations
									</a>
								</li>
							</ul>
						</div>
					</div>
				</footer>
				<footer className="footer-short">
					<p>© Kharian Sports Fest 2024</p>
				</footer>
			</div>
		</>
	)
}
