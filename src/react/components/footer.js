export default function Footer() {
	return (
		<>
			<link type="text/css" href="/footer.scss" />

			<div>
				<footer class="footer-long">
					<div id="footer-icon" className="footer-content">
						<img src="resources/logo.webp" alt="" />
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
			</div>
		</>
	)
}
