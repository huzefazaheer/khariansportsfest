import { useState } from 'react'
import { getDatabase, push, ref } from 'firebase/database'

import './contact.css'

export default function Contact() {
	// function writeUserData(contact) {
	// 	const db = getDatabase()

	// 	push(ref(db, 'issues/'), {
	// 		email: contact.email,
	// 		personname: contact.personname,
	// 		issue: contact.issue,
	// 	})
	// }

	const [result, setResult] = React.useState('')

	const onSubmit = async (event) => {
		event.preventDefault()
		setResult('Sending....')
		const formData = new FormData(event.target)

		formData.append('access_key', '2f05312f-ac65-4a57-abc2-91182e9a9855')

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		})

		const data = await response.json()

		if (data.success) {
			setResult('Complaint Sent Successfully')
			event.target.reset()
		} else {
			console.log('Error', data)
			setResult(data.message)
		}
	}

	return (
		<>
			<div className="contactsec">
				<div>
					<h1>Contact Us</h1>
				</div>
				{/* <form method="POST" action="https://api.web3forms.com/submit">
					<input
						type="hidden"
						name="access_key"
						value="2f05312f-ac65-4a57-abc2-91182e9a9855"
					></input>
					<div className="inputcontainer">
						<div className="forminput">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" required />
						</div>
						<div className="forminput">
							<label htmlFor="email">Email Address</label>
							<input type="email" name="email" id="email" required />
						</div>
					</div>
					<div className="forminput textareainput">
						<label htmlFor="issue">How can we help?</label>
						<textarea name="issue" id="issue" required />
					</div>
					<div class="h-captcha" data-captcha="true"></div>
					<div className="buttongroup">
						<input type="submit" className="button-dark" id="btn_submit">
							Submit
						</input>
					</div>
				</form>
				<script
					src="https://web3forms.com/client/script.js"
					async
					defer
				></script> */}
				<div>
					<form onSubmit={onSubmit}>
						<div className="inputcontainer">
							<div className="forminput">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" required />
							</div>
							<div className="forminput">
								<label htmlFor="email">Email Address</label>
								<input type="email" name="email" required />
							</div>
						</div>
						<div className="forminput textareainput">
							<label htmlFor="issue">How can we help?</label>
							<textarea name="message" required></textarea>
						</div>
						<div className="buttongroup">
							<button type="submit" id="btn_submit" className="button-dark">
								Submit Form
							</button>
						</div>
					</form>
					<h3 className="resulttxt">{result}</h3>
				</div>
			</div>
		</>
	)
}
