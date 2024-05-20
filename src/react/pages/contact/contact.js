import './contact.css'

export default function Contact() {
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
								<input type="text" name="name" id="name" />
							</div>
							<div className="forminput">
								<label htmlFor="email">Email Address</label>
								<input type="email" name="email" id="email" />
							</div>
						</div>
						<div className="forminput textareainput">
							<label htmlFor="issue">What would you like help with?</label>
							<textarea name="issue" id="issue" defaultValue={''} />
						</div>
						<div className="buttongroup">
							<button className="button-dark" id="btn_submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
