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

	return (
		<>
			<div className="contactsec">
				<div>
					<h1>Contact Us</h1>
				</div>
				<form method="POST" action="https://api.web3forms.com/submit">
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
			</div>
			<script src="https://web3forms.com/client/script.js" async defer></script>
		</>
	)
}
