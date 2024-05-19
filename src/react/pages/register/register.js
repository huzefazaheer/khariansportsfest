import './register.css'
import { useState } from 'react'

import RegisterPerson from '../../components/form/registerform'
import OrderSummary from '../../components/form/ordersummary'

import { getDatabase, set, ref } from 'firebase/database'

export default function Register() {
	function writeUserData(person) {
		const db = getDatabase()

		let sportslist = []
		for (let i = 0; i < personData.sports.length; i++) {
			sportslist.push(personData.sports[i].value)
		}

		set(ref(db, 'participants/' + person.cnic), {
			name: person.firstname + ' ' + person.lastname,
			gender: person.gender.value,
			age: person.age,
			phone: person.phone,
			socials: person.socials.value,
			games: sportslist,
		})
	}

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
		<RegisterPerson personData={personData} setPersonData={setPersonData} />,
		<OrderSummary personData={personData} setPersonData={setPersonData} />,
		<RegisterEnd />,
	]

	return (
		<>
			<div class="registersec">
				<h1>Register</h1>
				<h2>{formtitles[page]}</h2>

				{form[page]}

				<div className="buttongroup">
					<button
						disabled={page == 0}
						class="button-light"
						onClick={() => {
							setpage((currpage) => currpage - 1)
						}}
					>
						Back
					</button>
					<button
						class="button-dark"
						onClick={() => {
							setpage((currpage) => currpage + 1)
							if (page == 3) {
								// implement handing this data to database
								console.log(JSON.stringify(personData))
								writeUserData(personData)
							}
						}}
					>
						{page == 3 ? 'Submit' : 'Next'}
					</button>
				</div>
			</div>
		</>
	)
}

function RegisterWelcome() {
	return (
		<>
			<div className="formcontainer">
				<h4>Please keep your id documents at hand</h4>
				<p>
					CNIC (if above 18) <br /> B Form (if under age)
				</p>

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
