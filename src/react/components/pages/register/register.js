import Select from 'react-select'

import './register.css'
import { useState } from 'react'

const options = [
	{ value: 'football', label: 'Football' },
	{ value: 'basketball', label: 'Basketball' },
	{ value: 'cricket', label: 'Cricket' },
	{ value: 'tabletennis', label: 'Table Tennis' },
	{ value: 'badminton', label: 'Badminton' },
	{ value: 'volleyball', label: 'Volleyball' },
	{ value: 'snooker', label: 'Snooker' },
	{ value: 'egames', label: 'E-games' },
	{ value: 'chess', label: 'Chess' },
	{ value: 'ludo', label: 'Ludo' },
	{ value: 'eatingchallenge', label: 'Khao' },
]

const socialsoptions = [
	{ value: 'yes', label: 'Yes' },
	{ value: 'no', label: 'No' },
]

export default function Register() {
	const [page, setpage] = useState(0)
	const formtitles = ['', 'Person 1', 'Person 2']
	const form = [
		<RegisterWelcome />,
		<RegisterPerson />,
		<RegisterPerson />,
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
						disabled={page == 3}
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

function RegisterPerson() {
	const [selectedOptions, setSelectedOptions] = useState([])

	return (
		<>
			<div className="formcontainer">
				<form
					method="post"
					action="https://script.google.com/macros/s/AKfycbzq3ijSrPnLDrGfxil897bGdcA3U3VgGk1E2vxm3e7Rn0z3v7_7LKV95qAYS_koQgM6/exec"
				>
					<div className="inputcontainer">
						<div className="forminput">
							<label htmlFor="namefirst">First Name</label>
							<input type="text" name="firstname" id="namefirst" />
						</div>
						<div className="forminput">
							<label htmlFor="namelast">Last Name</label>
							<input type="text" name="lastname" id="namelast" />
						</div>
					</div>
					<div className="inputcontainer">
						<div className="forminput">
							<label htmlFor="age">Age</label>
							<input type="number" name="age" id="age" />
						</div>
						<div className="forminput">
							<label htmlFor="cnic">CNIC Number</label>
							<input
								type="tel"
								pattern="(\d{5}-)(\d{7}-)(\d{1})"
								placeholder="XXXXX-XXXXXXX-X"
								name="cnic"
								id="cnic"
							/>
						</div>
					</div>
					<div className="inputcontainer">
						<div className="forminput">
							<label htmlFor="email">Email Address</label>
							<input type="email" name="email" id="email" />
						</div>

						<div className="forminput">
							<label htmlFor="phone">Phone Number</label>
							<input type="tel" name="phone" id="phone" />
						</div>
					</div>
					<div className="inputcontainer">
						<label htmlFor="socialsincluded">
							Do you want socials included?
						</label>
						<Select
							id="socialsincluded"
							className="react-select-container"
							classNamePrefix="react-select"
							options={socialsoptions}
						/>
					</div>

					<div className="inputcontainer">
						<label for="sports">Choose sports</label>

						<Select
							id="sports"
							className="react-select-container"
							classNamePrefix="react-select"
							options={options}
							value={selectedOptions}
							onChange={(selectedOption) => {
								setSelectedOptions(selectedOption)
							}}
							isMulti={true}
						/>
					</div>
				</form>
			</div>
		</>
	)
}

function RegisterWelcome() {
	return (
		<>
			const [ticketAmount, setTicketAmount] = useState('')
			<div className="formcontainer">
				<h4>Please keep your id documents at hand</h4>
				<p>
					CNIC (if above 18) <br /> B Form (if under age)
				</p>

				<div class="forminput">
					<label for="name">
						Enter the number of tickets you would like to purchase
					</label>
					<input type="text" name="name" id="name" />
				</div>
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
