import './contact.css'

export default function Contact() {
	function writeUserData(contact) {
		const db = getDatabase()

		push(ref(db, 'issues/' + contact.email), {
			personname: contact.name,
			issue: contact.issue,
		})
	}

	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		issue: '',
	})

	return (
		<>
			<div className="contactsec">
				<div className="formcontainer">
					<div>
						<h1>Contact Us</h1>
					</div>
					<form method="post" action="#">
						<div className="inputcontainer">
							<div className="forminput">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									value={contactData.name}
									onChange={(e) =>
										setContactData({
											...contactData,
											personname: e.target.value,
										})
									}
								/>
							</div>
							<div className="forminput">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									name="email"
									id="email"
									value={contactData.email}
									onChange={(e) =>
										setContactData({
											...contactData,
											email: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="forminput textareainput">
							<label htmlFor="issue">What would you like help with?</label>
							<textarea
								name="issue"
								id="issue"
								defaultValue={''}
								value={contactData.issue}
								onChange={(e) =>
									setContactData({
										...contactData,
										issue: e.target.value,
									})
								}
							/>
						</div>
						<div className="buttongroup">
							<button
								className="button-dark"
								id="btn_submit"
								onClick={writeUserData(contactData)}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
