import './team.css'

export default function Team() {
	return (
		<>
			<div className="teamsec">
				<div className="teamcontainer">
					<div className="row">
						<h1>Our Team</h1>
						<p className="futura-lt">
							Meet the formidable team behind the Kharian Sports Fest, a dynamic
							group of organizers dedicated to delivering an unparalleled
							athletic extravaganza. With a passion for sports and a commitment
							to excellence, they work tirelessly to ensure every aspect of the
							event is executed flawlessly, promising an unforgettable
							experience for all participants and spectators.
						</p>
					</div>
					<div className="row imgrow">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/ahsan.jpg?alt=media&token=20435fdf-b580-4382-91ba-0b607197bc8f'
							}
							name={'Ahsan Raza'}
							title={'Director KSF'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/hamza.jpg?alt=media&token=d9557e83-c557-4edd-a197-577871f85e64'
							}
							name={'Hamza Ahmed Noor'}
							title={'Director KSF'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/moiz.jpg?alt=media&token=1a8c134c-1c38-4631-81a3-aed1edae869b'
							}
							name={'Moiz Akhtar'}
							title={'Director KSF'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/imad.jpg?alt=media&token=75e0044e-e46a-4df6-a9dd-d9ec59fcacd5'
							}
							name={'Imad Brother'}
							title={'Director Finance'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/murtaza.jpg?alt=media&token=7b5aad92-9cd9-4562-9664-1c3c798afb8b'
							}
							name={'Murtaza Ahmed Abbas Naqvi'}
							title={'Director Logistics'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/wasti.jpg?alt=media&token=b685f07a-b5a8-4ce3-8c74-de9dd7520817'
							}
							name={'Wasti Lethargic'}
							title={'Director Registerations'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/huzefa.jpg?alt=media&token=8a8b07a4-59b3-4f8a-b13d-5a0faa1f2733'
							}
							name={'Huzefa Zaheer'}
							title={'Director IT'}
						/>

						<div style={{ clear: 'both' }} />
					</div>
				</div>
			</div>
		</>
	)
}

function Personimg({ imgsrc, name, title }) {
	return (
		<>
			<div className="coloumn">
				<div className="imgbox">
					<img src={imgsrc} alt="picture of person" />
				</div>
				<div className="details">
					<h3>
						<span className="name">{name}</span> <br />
						<span className="title">{title}</span>{' '}
					</h3>
				</div>
			</div>
		</>
	)
}
