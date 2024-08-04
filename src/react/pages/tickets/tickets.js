import './tickets.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDatabase, push, ref } from 'firebase/database'

import RegisterTicket from '../../components/form/ticketform'
import TicketOrderSummary from '../../components/form/ticketordersummary'

export default function Tickets() {
	async function writeUserData(person) {
		const db = getDatabase()

		push(ref(db, 'tickets/'), {
			name: person.name,
			email: person.email,
			type: person.ticket.value,
			amount: bill,
		})
	}

	const validateRegisteration = (data) => {
		const strEmpty = 'Field can not be empty'
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		let _error = {
			name: '',
			email: '',
			ticket: '',
		}
		let noError = true
		if (!data.name) {
			_error.name = strEmpty
			noError = false
		} else {
			_error.name = ''
		}
		if (!data.email) {
			_error.email = strEmpty
			noError = false
		} else if (emailRegex.test(data.email) == false) {
			_error.email = 'Invalid email address'
			noError = false
		} else {
			_error.email = ''
		}

		if (!data.ticket) {
			_error.ticket = 'Please select a ticket type'
			noError = false
		} else {
			_error.ticket = ''
		}

		setErrors(_error)

		return noError
	}

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		ticket: '',
	})

	const navigate = useNavigate()
	const [page, setpage] = useState(0)
	const [personData, setPersonData] = useState({
		name: '',
		email: '',
		ticket: '',
	})

	const [bill, setBill] = useState(0)

	const formtitles = [
		'',
		'What type of ticket',
		'Order Summary',
		'Purchase Confirmed',
	]
	let form = [
		<TicketWelcome />,
		<RegisterTicket
			personData={personData}
			setPersonData={setPersonData}
			errors={errors}
		/>,
		<TicketOrderSummary personData={personData} setBill={setBill} />,
		<TicketEnd />,
	]

	return (
		<>
			<div class="registersec">
				<h1>Purchase Tickets</h1>
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

function TicketWelcome() {
	return (
		<>
			<div className="formcontainer">
				<h4>Kharian Sports Fest offers two types of tickets</h4>
				<ul>
					<li>
						<p>Standard</p>
						<br />
						<p>PKR 1500/-</p>
					</li>
					<p>
						<br />
						We are thrilled to announce BAYYAN are going to be performing on the
						29th of June at Dream City Kharian
					</p>
					<p>
						<br />
						<em>Rights of admission reserved</em>
					</p>
				</ul>
			</div>
		</>
	)
}

function TicketEnd() {
	return (
		<>
			<div className="formcontainer">
				<h4>Thank you for purchasing a ticket for Kharian Sports Fest</h4>
				<p>Below are the ways you can submit your payment</p>
				<ul>
					<li>
						<h5>Online Payments</h5>
						<br />
						<ul>
							<li>
								<h4>Bank transfer</h4>
								<p>
									Account title: Hamza Ahmed Noor Account # 12287901592403{' '}
									<br />
									Bank: HBL
								</p>
								<br />
							</li>

							<li>
								<h4>Jazzcash</h4>
								<p>
									Account title: Syed Hassan Mehdi <br />
									Account number: 03270766997
								</p>
							</li>

							<li>
								<br />
								<h4>
									Please send the screenshot of proof of payment to one of these
									numbers on whatsapp You will be emailed your ticket once
									payment has been confirmed
								</h4>
								<ul>
									<li className="futura">+92-330-5740212</li>
									<li className="futura">+92-347-5368049</li>
								</ul>
							</li>
						</ul>
					</li>
					<br />
				</ul>
			</div>
		</>
	)
}
