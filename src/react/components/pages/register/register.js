import './register.css'

let ticketno

export default function Register() {
	return (
		<>
			<div class="registersec">
				<h1>Register</h1>
				<RegisterWelcome />
			</div>
		</>
	)
}

function RegisterPerson() {
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
					<div className="forminput inputcontainer">
						<label htmlFor="socialsincluded">
							Do you want socials included?
						</label>
						<input type="checkbox" name="socials" id="socialsincluded" />
					</div>

					<div className="forminput">
						<label for="sports">Choose sports</label>

						<select name="sports" id="sports" multiple>
							<option value="football">Football</option>
							<option value="basketball">Basketball</option>
							<option value="cricket">Cricket</option>
							<option value="tabletennis">Table Tennis</option>
							<option value="badminton">Badminton</option>
							<option value="volleyball">Volleyball</option>
							<option value="snooker">Snooker</option>
							<option value="egames">E-games</option>
							<option value="chess">Chess</option>
							<option value="ludo">Ludo</option>
							<option value="eatingchallenge">Khao</option>
						</select>
					</div>
				</form>
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
					CNIC -if above 18 <br /> B Form If under age
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
