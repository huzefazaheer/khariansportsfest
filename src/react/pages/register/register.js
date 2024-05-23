import './register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getDatabase, push, ref } from 'firebase/database'

import RegisterPerson from '../../components/form/registerform'
import OrderSummary from '../../components/form/ordersummary'

export default function Register() {
	function writeUserData(person) {
		const db = getDatabase()

		let sportslist = []
		for (let i = 0; i < personData.sports.length; i++) {
			sportslist.push(personData.sports[i].value)
		}

		push(ref(db, 'participants/' + person.cnic), {
			name: person.firstname + ' ' + person.lastname,
			gender: person.gender.value,
			age: person.age,
			phone: person.phone,
			socials: person.socials.value,
			games: sportslist,
		})
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
		if (Object.keys(data.sports).length === 0 && data.socials.label == 'No') {
			_error.sports = 'You must choose atleast one sport or socials'
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

	const formtitles = [
		'',
		'Enter your details',
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
		<OrderSummary personData={personData} setPersonData={setPersonData} />,
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
							id={page == 0 || page == 3 ? 'disabled' : ''}
							onClick={(e) => {
								e.preventDefault()
								setpage((currpage) => currpage - 1)
							}}
						>
							Back
						</button>
						<button
							class="button-dark"
							id={page == 0 || page == 3 ? 'onlybutton' : ''}
							onClick={(e) => {
								e.preventDefault()
								if (page == 1) {
									//validate form
									if (validateRegisteration(personData)) {
										console.log('Valid response')
										setpage((currpage) => currpage + 1)
									} else {
										console.log('Invalid response')
									}
								} else if (page == 2) {
									// implement handing this data to database
									console.log(JSON.stringify(personData))
									writeUserData(personData)
									setpage((currpage) => currpage + 1)
								} else if (page == 3) {
									navigate('/')
								} else {
									setpage((currpage) => currpage + 1)
								}
							}}
						>
							{page == 2 ? 'Confirm Order' : page == 3 ? 'Go Back' : 'Next'}
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
					</li>
					<br />
					<li>
						<h5>In person</h5>
						<p>
							In person payments will be taken on the 27th of May, 6:00 evening,
							in Kharian Cantt
						</p>
					</li>
				</ul>
			</div>
		</>
	)
}
