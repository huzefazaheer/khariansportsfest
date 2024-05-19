import './register.css'
import { useState } from 'react'

import RegisterPerson from '../../components/form/registerform'

export default function Register() {
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

	const formtitles = ['', '', '']
	let form = [
		<RegisterWelcome />,
		<RegisterPerson personData={personData} setPersonData={setPersonData} />,
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
						disabled={page == 2}
						class="button-dark"
						onClick={() => {
							setpage((currpage) => currpage + 1)
						}}
					>
						Next
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
			</div>
		</>
	)
}
