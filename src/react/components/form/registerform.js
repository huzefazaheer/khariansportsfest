import { useState } from 'react'

import Select from 'react-select'

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

const genderoptions = [
	{ value: 'm', label: 'Male' },
	{ value: 'f', label: 'Female' },
]

export default function RegisterPerson({ personData, setPersonData }) {
	return (
		<>
			<div className="formcontainer">
				{/* <form method="post" action="#"> */}
				<div className="inputcontainer">
					<div className="forminput">
						<label htmlFor="namefirst">First Name</label>
						<input
							type="text"
							name="firstname"
							id="namefirst"
							value={personData.firstname}
							onChange={(event) =>
								setPersonData({
									...personData,
									firstname: event.target.value,
								})
							}
							required
						/>
					</div>
					<div className="forminput">
						<label htmlFor="namelast">Last Name</label>
						<input
							type="text"
							name="lastname"
							id="namelast"
							value={personData.lastname}
							onChange={(event) =>
								setPersonData({ ...personData, lastname: event.target.value })
							}
							required
						/>
					</div>
				</div>
				<div className="inputcontainer">
					<div className="forminput gender">
						<label htmlFor="gender">Gender</label>
						<Select
							id="gender"
							className="react-select-container"
							classNamePrefix="react-select"
							options={genderoptions}
							value={personData.gender}
							onChange={(value) =>
								setPersonData({ ...personData, gender: value })
							}
						/>
					</div>
					<div className="forminput">
						<label htmlFor="age">Age</label>
						<input
							type="number"
							name="age"
							id="age"
							value={personData.age}
							onChange={(event) =>
								setPersonData({ ...personData, age: event.target.value })
							}
						/>
					</div>
				</div>
				<div className="inputcontainer">
					<div className="forminput">
						<label htmlFor="cnic">CNIC Number</label>
						<input
							type="tel"
							pattern="(\d{5}-)(\d{7}-)(\d{1})"
							placeholder="XXXXX-XXXXXXX-X"
							name="cnic"
							id="cnic"
							value={personData.cnic}
							onChange={(event) =>
								setPersonData({ ...personData, cnic: event.target.value })
							}
						/>
					</div>
					<div className="forminput">
						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={personData.phone}
							onChange={(event) =>
								setPersonData({ ...personData, phone: event.target.value })
							}
						/>
					</div>
				</div>
				<div className="inputcontainer">
					<label htmlFor="socialsincluded">Do you want socials included?</label>
					<Select
						id="socialsincluded"
						className="react-select-container"
						classNamePrefix="react-select"
						options={socialsoptions}
						value={personData.socials}
						onChange={(value) =>
							setPersonData({ ...personData, socials: value })
						}
					/>
				</div>
				<div className="inputcontainer">
					<label for="sports">Choose sports</label>

					<Select
						id="sports"
						className="react-select-container"
						classNamePrefix="react-select"
						options={options}
						value={personData.sports}
						onChange={(selectedOption) => {
							setPersonData({ ...personData, sports: selectedOption })
						}}
						isMulti={true}
					/>
				</div>
				{/* </form> */}
			</div>
		</>
	)
}
