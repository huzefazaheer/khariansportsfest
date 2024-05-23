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

export default function RegisterPerson({
	personData,
	setPersonData,
	errors,
	setErrors,
}) {
	// const validateRegisteration = (data, field) => {
	// 	const strEmpty = 'Field can not be empty'
	// 	const idRegex = /(\d{5}-)(\d{7}-)(\d{1})/
	// 	const phoneRegex =
	// 		/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/

	// 	switch (field) {
	// 		case 'firstname':
	// 			if (!data.firstname) {
	// 				setErrors({ ...errors, firstname: strEmpty })
	// 			} else {
	// 				setErrors({ ...errors, firstname: '' })
	// 			}
	// 			break
	// 		case 'lastname':
	// 			if (!data.age) {
	// 				setErrors({ ...errors, lastname: strEmpty })
	// 			} else {
	// 				setErrors({ ...errors, lastname: '' })
	// 			}
	// 			break
	// 		case 'gender':
	// 			if (!data.gender) {
	// 				setErrors({ ...errors, gender: strEmpty })
	// 			} else {
	// 				setErrors({ ...errors, gender: '' })
	// 			}
	// 			break
	// 		case 'socials':
	// 			if (!data.socials) {
	// 				setErrors({ ...errors, socials: strEmpty })
	// 			} else {
	// 				setErrors({ ...errors, socials: '' })
	// 			}
	// 			break
	// 		case 'sports':
	// 			if (!data.sports) {
	// 				setErrors({ ...errors, sports: strEmpty })
	// 			} else {
	// 				setErrors({ ...errors, sports: '' })
	// 			}
	// 			break
	// 		case 'phone':
	// 			if (!data.phone) {
	// 				setErrors({ ...errors, phone: strEmpty })
	// 				noError = false
	// 			} else if (phoneRegex.test(data.phone)) {
	// 				setErrors({ ...errors, phone: 'Invalid phone number' })
	// 				noError = false
	// 			} else {
	// 				setErrors({ ...errors, phone: '' })
	// 			}
	// 			break
	// 		case 'cnic':
	// 			if (!data.cnic) {
	// 				setErrors({ ...errors, cnic: strEmpty })
	// 				noError = false
	// 			} else if (idRegex.test(data.cnic)) {
	// 				setErrors({ ...errors, cnic: 'Invalid cnic number' })
	// 				noError = false
	// 			} else {
	// 				setErrors({ ...errors, cnic: '' })
	// 			}
	// 			break
	// 		default:
	// 			break
	// 	}
	// }

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
							onChange={(event) => {
								setPersonData({
									...personData,
									firstname: event.target.value,
								})
								// validateRegisteration(personData, 'firstname')
							}}
							required
						/>
						<p className="error">{errors.firstname}</p>
					</div>
					<div className="forminput">
						<label htmlFor="namelast">Last Name</label>
						<input
							type="text"
							name="lastname"
							id="namelast"
							value={personData.lastname}
							onChange={(event) => {
								setPersonData({ ...personData, lastname: event.target.value })
								// validateRegisteration(personData, 'lastname')
							}}
							required
						/>
						<p className="error">{errors.lastname}</p>
					</div>
				</div>
				<div className="inputcontainer">
					<div className="forminput dropdown">
						<label htmlFor="gender">Gender</label>
						<Select
							id="gender"
							className="react-select-container"
							classNamePrefix="react-select"
							options={genderoptions}
							value={personData.gender}
							onChange={(value) => {
								setPersonData({ ...personData, gender: value })
								// validateRegisteration(personData, 'gender')
							}}
						/>
						<p className="error">{errors.gender}</p>
					</div>
					<div className="forminput">
						<label htmlFor="age">Age</label>
						<input
							type="number"
							name="age"
							id="age"
							value={personData.age}
							onChange={(event) => {
								setPersonData({ ...personData, age: event.target.value })
								// validateRegisteration(personData, 'age')
							}}
						/>
						<p className="error">{errors.age}</p>
					</div>
				</div>
				<div className="inputcontainer">
					<div className="forminput">
						<label htmlFor="cnic">CNIC Number</label>
						<input
							type="tel"
							placeholder="XXXXX-XXXXXXX-X"
							name="cnic"
							id="cnic"
							value={personData.cnic}
							onChange={(event) => {
								setPersonData({ ...personData, cnic: event.target.value })
								// validateRegisteration(personData, 'cnic')
							}}
						/>
						<p className="error">{errors.cnic}</p>
					</div>
					<div className="forminput">
						<label htmlFor="phone">Phone Number</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={personData.phone}
							onChange={(event) => {
								setPersonData({ ...personData, phone: event.target.value })
								// validateRegisteration(personData, 'phone')
							}}
						/>
						<p className="error">{errors.phone}</p>
					</div>
				</div>
				<div className="inputcontainer">
					<label className="speciallabel" htmlFor="socialsincluded">
						Do you want socials included?
					</label>
					<div>
						<Select
							id="socialsincluded"
							className="react-select-container"
							classNamePrefix="react-select"
							options={socialsoptions}
							value={personData.socials}
							onChange={(value) => {
								setPersonData({ ...personData, socials: value })
								// validateRegisteration(personData, 'socials')
							}}
						/>
						<p className="error special">{errors.socials}</p>
					</div>
				</div>
				<div className="inputcontainer">
					<label className="speciallabel" for="sports">
						Choose sports
					</label>

					<div>
						<Select
							id="sports"
							className="react-select-container"
							classNamePrefix="react-select"
							options={options}
							value={personData.sports}
							onChange={(selectedOption) => {
								setPersonData({ ...personData, sports: selectedOption })
								// validateRegisteration(personData, 'sports')
							}}
							isMulti={true}
						/>

						<p className="error special">{errors.sports}</p>
					</div>
				</div>
				{/* </form> */}
			</div>
		</>
	)
}
