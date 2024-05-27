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
					<div className="row imgrow" id="heads">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fdirector_ahsanraza.jpeg?alt=media&token=2fad0a4e-d8c3-436b-b50e-314c173c791d'
							}
							name={'Ahsan Raza'}
							title={'Director KSF'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fdirector_hamzaahmednoor.jpeg?alt=media&token=508432f1-5ad2-4f2f-9baa-d673a4f38f9e'
							}
							name={'Hamza Ahmed Noor'}
							title={'Director KSF'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fdirector_moizakhtar.jpeg?alt=media&token=083170e1-8f4d-42b2-a6c9-f4b9ab256f81'
							}
							name={'Moiz Akhtar'}
							title={'Director KSF'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow imgcenter" id="directorate">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fheaddirectorate_ahmed.jpeg?alt=media&token=64bebf6d-932a-4269-b86e-5c03da39077d'
							}
							name={'Muhammad Ahmed'}
							title={'Head of directorate'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow imgcenter">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fsecurity_ibrahimkiyani.jpeg?alt=media&token=f345e834-21cb-4cff-8c42-91a1d71b9b24'
							}
							name={'Ibrahim Kiyani'}
							title={'Director Male Security'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Ffsecurity_zirvanawab.jpeg?alt=media&token=5fbf582b-b374-4f97-8844-89462d44b19f'
							}
							name={'Zirva Nawab'}
							title={'Director Female Security'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Ffinance_imadamir.jpeg?alt=media&token=9c189f87-c202-43bc-b1f6-7e215d6fbf63'
							}
							name={'Imad Amir'}
							title={'Director Finance'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fpublicrelations_syedkashan.jpeg?alt=media&token=9e9fb936-87bf-4e59-8b82-4f08902e0076'
							}
							name={'Syed Kashan'}
							title={'Director Public Relations'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Flogistics_murtazaabbas.jpeg?alt=media&token=9b11d9af-4eaa-4374-b75d-88555239a366'
							}
							name={'Murtaza Abbas'}
							title={'Director Logistics'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fmarketing_kaif.jpeg?alt=media&token=7dcda4c2-be52-43e7-bc52-7ee1b0a3cfa1'
							}
							name={'Kaif'}
							title={'Director Marketing'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow imgcenter">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fregisterations_abdullahwasif.jpeg?alt=media&token=a561e434-9fc7-46d8-bc51-692e7dafd636'
							}
							name={'Abdullah Wasif'}
							title={'Director Registrations'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fcoregisterations_ridakamal.jpeg?alt=media&token=05b0f47c-4f23-4d65-90d1-3d2673441b43'
							}
							name={'Rida Kamal'}
							title={'Co-Director Registrations'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow imgcenter">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fdecor_hibamurshid.jpeg?alt=media&token=5bcf50fd-d1d4-44f5-989f-f837eb6cb7d5'
							}
							name={'Hiba Murshid'}
							title={'Director Decor'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fcodecor_hira.jpeg?alt=media&token=1b7f39ee-9e72-4879-b590-43490466d314'
							}
							name={'Hira'}
							title={'Co-Director Decor'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow imgcenter">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fmedia_ryanjalil.jpeg?alt=media&token=3b24136e-a475-4bf2-b7f2-2edb7fe29649'
							}
							name={'Ryyan Jalil'}
							title={'Director Decor'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fcomedia_meerab.jpeg?alt=media&token=5e856aa5-f670-44b0-8768-3f24e058c5b9'
							}
							name={'Meerab'}
							title={'Co-Director Decor'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fmedia_haseebanwar.jpeg?alt=media&token=579dc620-eb88-4d12-86ef-1170987bacbb'
							}
							name={'Haseeb Anwar'}
							title={'Director Decor'}
						/>
						<div style={{ clear: 'both' }} />
					</div>
					<div className="row imgrow imgcenter">
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fit_huzefazaheer.jpeg?alt=media&token=1cb710be-01bf-41a6-a769-35086884dc36'
							}
							name={'Huzefa Zaheer'}
							title={'Director IT'}
						/>
						<Personimg
							imgsrc={
								'https://firebasestorage.googleapis.com/v0/b/khariansportsfest-fde2f.appspot.com/o/eventmanagers%2Fcoit_muhammadjawadamir.jpeg?alt=media&token=65b0ca9e-43d7-4579-8fe8-72bd1be7ac73'
							}
							name={'Muhammad Jawad Amir'}
							title={'Co-Director IT'}
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
					<img src={imgsrc} />
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
