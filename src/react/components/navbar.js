export function NavigationBar() {
	return (
		<>
			<nav>
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
			</nav>
		</>
	)
}
