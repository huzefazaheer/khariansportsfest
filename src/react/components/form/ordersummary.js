export default function OrderSummary({ personData, setPersonData }) {
	let sportslist = ''
	for (let i = 0; i < personData.sports.length; i++) {
		sportslist = sportslist + personData.sports[i].label + '\n'
	}

	function calculateTotal() {
		let total = 2000
		if (personData.socials.label == 'Yes' && personData.sports.length >= 1) {
			total = total + 1000
		}
		if (personData.sports.length > 1) {
			total = total + 500 * (personData.sports.length - 1)
		}

		return total
	}

	return (
		<>
			<div className="formcontainer">
				<tbody>
					<tr>
						<td>
							<p>Name:</p>
						</td>
						<td>
							<p>
								{personData.firstname} {personData.lastname}
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>Gender:</p>
						</td>
						<td>
							<p>{personData.gender.label}</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>Age:</p>
						</td>
						<td>
							<p>{personData.age}</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>CNIC:</p>
						</td>
						<td>
							<p>{personData.cnic}</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>Phone number:</p>
						</td>
						<td>
							<p>{personData.phone}</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>Socials included:</p>
						</td>
						<td>
							<p>{personData.socials.label}</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>Games:</p>
						</td>
						<td>
							<p>{sportslist}</p>
						</td>
					</tr>
				</tbody>
				<h5>Your total is: {calculateTotal()}</h5>
			</div>
		</>
	)
}
