import './register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { getDatabase, push, ref } from 'firebase/database'

import RegisterPerson from '../../components/form/registerform'
import RegisterDetail from '../../components/form/registerdetail'
import OrderSummary from '../../components/form/ordersummary'

export default function Register() {
	async function writeUserData(person) {
		const db = getDatabase()
		const firestoredb = getFirestore()
		let sportslist = [{}]
		for (let i = 0; i < personData.sports.length; i++) {
			let _game = {
				name: null,
				teamname: null,
				agegroup: null,
				gametype: null,
				gameslist: [],
			}
			_game.name = personData.sports[i].value
			if (personData.sports[i].teamname) {
				_game.teamname = personData.sports[i].teamname
			}
			if (personData.sports[i].agegroup) {
				_game.agegroup = personData.sports[i].agegroup.value
			}
			if (personData.sports[i].gametype) {
				_game.gametype = personData.sports[i].gametype.value
			}
			if (personData.sports[i].games) {
				for (let x = 0; x < personData.sports[i].games.length; x++) {
					_game.gameslist.push(personData.sports[i].games[x].value)
				}
			}
			sportslist.push(_game)
		}

		push(ref(db, 'participants/'), {
			cnic: person.cnic,
			name: person.firstname + ' ' + person.lastname,
			gender: person.gender.value,
			age: person.age,
			phone: person.phone,
			socials: person.socials.value,
			games: sportslist,
			amount: bill,
		})

		// setDoc(doc(firestoredb, 'participants', person.cnic), {
		// 	name: person.firstname + ' ' + person.lastname,
		// 	gender: person.gender.value,
		// 	age: person.age,
		// 	phone: person.phone,
		// 	socials: person.socials.value,
		// 	games: sportslist,
		// })
	}

	const validateRegisteration = (data) => {
		const strEmpty = 'Field can not be empty'
		const idRegex = /(\d{5}-)(\d{7}-)(\d{1})/
		const phoneRegex = /([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/
		let _error = {
			firstname: '',
			lastname: '',
			gender: '',
			age: '',
			cnic: '',
			phone: '',
			socials: '',
			sports: '',
		}
		let noError = true
		if (!data.firstname) {
			_error.firstname = strEmpty
			noError = false
		} else {
			_error.firstname = ''
		}
		if (!data.lastname) {
			_error.lastname = strEmpty
			noError = false
		} else {
			_error.lastname = ''
		}
		if (!data.age) {
			_error.age = strEmpty
			noError = false
		} else if (data.age < 6) {
			_error.age = 'Age can not be less than 6'
			noError = false
		} else if (data.age > 50) {
			_error.age = 'Age can not be more than 50'
			noError = false
		} else {
			_error.age = ''
		}
		if (!data.gender) {
			_error.gender = strEmpty
			noError = false
		} else {
			_error.gender = ''
		}
		if (!data.socials) {
			_error.socials = strEmpty
			noError = false
		} else {
			_error.socials = ''
		}
		if (Object.keys(data.sports).length === 0) {
			_error.sports = 'You must choose atleast one sport'
			noError = false
		} else if (Object.keys(data.sports).length > 3) {
			_error.sports = 'You can only choose three sports max'
			noError = false
		} else {
			_error.sports = ''
		}

		if (!data.phone) {
			_error.phone = strEmpty
			noError = false
		} else if (phoneRegex.test(data.phone) == false) {
			_error.phone = 'Invalid phone number'
			noError = false
		} else {
			_error.phone = ''
		}

		if (!data.cnic) {
			_error.cnic = strEmpty
			noError = false
		} else if (idRegex.test(data.cnic) == false) {
			_error.cnic = 'Invalid cnic number'
			noError = false
		} else {
			_error.cnic = ''
		}

		setErrors(_error)

		return noError
	}
	const [gamelist, setgamelist] = useState([])
	const validateDetail = (data) => {
		const strEmpty = 'Field can not be empty'
		const strNoAge = 'Age group can not be empty'
		let noError = true
		let _error = {
			badminton: '',
			tabletennis: '',
			football: '',
			volleyball: '',
			basketball: '',
			cricket: '',
			egames: '',
		}
		let _pointers = {
			badminton: 0,
			tabletennis: 0,
			football: 0,
			volleyball: 0,
			basketball: 0,
			cricket: 0,
			egames: 0,
		}
		let sportslist = []
		for (let i = 0; i < data.sports.length; i++) {
			sportslist.push(data.sports[i].value)
			_pointers[data.sports[i].value] = i
		}

		if (sportslist.includes('egames')) {
			const egamesRef = data.sports[_pointers.egames]
			if (egamesRef.games.length == 0) {
				_error.egames = 'You have to select atleast one game'
				noError = false
			} else if (!egamesRef.teamname && gamelist.includes('pubg')) {
				_error.egames = strEmpty
				noError = false
			} else {
				_error.egames = ''
			}
		}

		if (sportslist.includes('badminton')) {
			const badmintonRef = data.sports[_pointers.badminton]
			if (!badmintonRef.gametype) {
				_error.badminton = 'Must choose either singles or doubles'
				noError = false
			} else if (
				!badmintonRef.teamname &&
				badmintonRef.gametype.value == 'two'
			) {
				_error.badminton = strEmpty
				noError = false
			} else if (!badmintonRef.agegroup) {
				_error.badminton = strNoAge
				noError = false
			} else {
				_error.badminton = ''
			}
		}

		if (sportslist.includes('tabletennis')) {
			const tabletennisRef = data.sports[_pointers.tabletennis]
			if (!tabletennisRef.gametype) {
				_error.tabletennis = 'Must choose either singles or doubles'
				noError = false
			} else if (
				!tabletennisRef.teamname &&
				tabletennisRef.gametype.value == 'two'
			) {
				_error.tabletennis = strEmpty
				noError = false
			} else if (!tabletennisRef.agegroup) {
				_error.tabletennis = strNoAge
				noError = false
			} else {
				_error.tabletennis = ''
			}
		}

		if (sportslist.includes('football')) {
			const footballRef = data.sports[_pointers.football]
			if (!footballRef.teamname) {
				_error.football = strEmpty
				noError = false
			} else if (!footballRef.agegroup) {
				_error.football = strNoAge
				noError = false
			} else {
				_error.football = ''
			}
		}

		if (sportslist.includes('cricket')) {
			const cricketRef = data.sports[_pointers.cricket]
			if (!cricketRef.teamname) {
				_error.cricket = strEmpty
				noError = false
			} else if (!cricketRef.agegroup) {
				_error.cricket = strNoAge
				noError = false
			} else {
				_error.cricket = ''
			}
		}

		if (sportslist.includes('volleyball')) {
			const volleyballRef = data.sports[_pointers.volleyball]
			if (!volleyballRef.teamname) {
				_error.volleyball = strEmpty
				noError = false
			} else if (!volleyballRef.agegroup) {
				_error.volleyball = strNoAge
				noError = false
			} else {
				_error.volleyball = ''
			}
		}

		if (sportslist.includes('basketball')) {
			const basketballRef = data.sports[_pointers.basketball]
			if (!basketballRef.teamname) {
				_error.basketball = strEmpty
				noError = false
			} else if (!basketballRef.agegroup) {
				_error.basketball = strNoAge
				noError = false
			} else {
				_error.basketball = ''
			}
		}

		setErrors2(_error)

		return noError
	}

	const [errors, setErrors] = useState({
		firstname: '',
		lastname: '',
		gender: '',
		age: '',
		cnic: '',
		phone: '',
		socials: '',
		sports: '',
	})
	const [errors2, setErrors2] = useState({
		badminton: '',
		tabletennis: '',
		football: '',
		volleyball: '',
		basketball: '',
		cricket: '',
		egames: '',
	})
	const navigate = useNavigate()
	const [page, setpage] = useState(0)
	const [personData, setPersonData] = useState({
		firstname: '',
		lastname: '',
		gender: '',
		age: '',
		cnic: '',
		phone: '',
		socials: '',
		sports: [],
	})
	const [bill, setBill] = useState(0)
	const formtitles = [
		'',
		'Enter your details',
		'Tell us more about ' + personData.firstname,
		'Order Summary',
		'Purchase Confirmed',
	]
	let form = [
		<RegisterWelcome />,
		<RegisterPerson
			personData={personData}
			setPersonData={setPersonData}
			errors={errors}
			setErrors={setErrors}
		/>,
		<RegisterDetail
			personData={personData}
			setPersonData={setPersonData}
			errors={errors2}
			seterrors={setErrors2}
			gamelist={gamelist}
			setgamelist={setgamelist}
		/>,
		<OrderSummary
			personData={personData}
			setPersonData={setPersonData}
			setBill={setBill}
		/>,
		<RegisterEnd />,
	]

	return (
		<>
			<div class="registersec">
				<h1>Register</h1>
				<h2 id="formtitles">{formtitles[page]}</h2>

				<form method="post" to="#">
					{form[page]}

					<div className="buttongroup">
						<button
							disabled={page == 0}
							class="button-light"
							id={page == 0 || page == 4 ? 'disabled' : ''}
							onClick={(e) => {
								e.preventDefault()
								if (page == 2) {
									setPersonData({ ...personData, sports: [] })
								}
								setpage((currpage) => currpage - 1)
							}}
						>
							Back
						</button>
						<button
							class="button-dark"
							id={page == 0 || page == 4 ? 'onlybutton' : ''}
							onClick={(e) => {
								e.preventDefault()
								if (page == 1) {
									//validate form
									if (validateRegisteration(personData)) {
										console.log('Valid response')
										// console.log(JSON.stringify(personData))
										setpage((currpage) => currpage + 1)
									} else {
										console.log('Invalid response')
									}
								} else if (page == 2) {
									// validate detail form
									if (validateDetail(personData)) {
										console.log('Valid response')
										// console.log(JSON.stringify(personData))
										setpage((currpage) => currpage + 1)
									} else {
										console.log('Invalid response')
									}
								} else if (page == 3) {
									console.log(JSON.stringify(personData))
									writeUserData(personData)
									setpage((currpage) => currpage + 1)
								} else if (page == 4) {
									navigate('/')
								} else {
									setpage((currpage) => currpage + 1)
								}
							}}
						>
							{page == 3 ? 'Confirm Order' : page == 4 ? 'Go Back' : 'Next'}
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

function RegisterWelcome() {
	return (
		<>
			<div className="formcontainer">
				<h4>Please keep the following id documents at hand</h4>
				<ul>
					<li>
						<p>CNIC (if above 18)</p>
					</li>
					<li>
						<p>B Form (if under age)</p>
					</li>
					<p>
						<br />
						(Early bird discount) Price for one game only is PKR 1450/- and for
						one game with socials included is PKR 2000/-
					</p>
					<p>
						<em>any additional games cost PKR 500/game</em>
					</p>
				</ul>

				{/* <div class="forminput">
					<label for="name">
						Enter the number of tickets you would like to purchase
					</label>
					<input type="text" name="name" id="name" />
				</div> */}
			</div>
		</>
	)
}

function RegisterEnd() {
	return (
		<>
			<div className="formcontainer">
				<h4>Thank you for registering to Kharian Sports Fest</h4>
				<p>Below are the ways you can submit your payment</p>
				<ul>
					<li>
						<h5>Online Payment</h5>
						<p>
							Account title: Hamza Ahmed Noor Account # 12287901592403 <br />
							Bank: HBL
						</p>
						<p>
							Please send the screenshot of proof of payment to one of these
							numbers on whatsapp
						</p>
						<ul>
							<li className="Futura">+92-330-5740212</li>
							<li className="Futura">+92-347-5368049</li>
						</ul>
					</li>
					<br />
					<li>
						<h5>In person</h5>
						<p>
							In person payments will be taken on the 29th of May, 6:00 evening,
							in Lemon Pepper, Kharian Cantt
						</p>
						<p>For any queries do not hesitate to contact us</p>
						<p>+92-327-0766997</p>
					</li>
				</ul>
			</div>
		</>
	)
}
