import './register.css'
import { useState } from 'react'

import RegisterPerson from '../../components/form/registerform'
import OrderSummary from '../../components/form/ordersummary'

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
							Account title: Hamza Ahmed Noor Account # 12287901592403 <br />
							Bank: HBL
						</p>
					</li>
				</ul>
			</div>
		</>
	)
}
