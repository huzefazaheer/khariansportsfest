import { useState } from 'react'

import Select from 'react-select'

export default function OrderSummary({ personData, setPersonData }) {
	let sportslist = ''
	for (let i = 0; i < personData.sports.length; i++) {
		sportslist = sportslist + personData.sports[i].label + '\n'
	}

	return (
		<>
			<div className="formcontainer">
				<p>
					Name: {personData.firstname} {personData.lastname}
				</p>
				<p>Gender: {personData.gender.label}</p>
				<p>Age: {personData.age}</p>
				<p>CNIC: {personData.cnic}</p>
				<p>Socials included: {personData.socials.label}</p>
				<p>Games: {sportslist}</p>
			</div>
		</>
	)
}
