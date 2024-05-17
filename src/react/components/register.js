export default function Register() {
	return (
		<>
			<div className="formcontainer">
				<div>
					<h1>Register</h1>
				</div>
				<form
					method="post"
					action="https://script.google.com/macros/s/AKfycbzq3ijSrPnLDrGfxil897bGdcA3U3VgGk1E2vxm3e7Rn0z3v7_7LKV95qAYS_koQgM6/exec"
				>
					<div className="forminput">
						<label htmlFor="name">Full Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div className="forminput">
						<label htmlFor="age">Age</label>
						<input type="number" name="age" id="age" />
					</div>
					<div className="forminput">
						<label htmlFor="email">Email Address</label>
						<input type="email" name="email" id="email" />
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
					<div className="forminput">
						<label htmlFor="phone">Phone Number</label>
						<input type="tel" name="phone" id="phone" />
					</div>
					<input
						className="button-dark"
						type="button"
						defaultValue="Continue To Payment"
					/>
				</form>
			</div>
		</>
	)
}
