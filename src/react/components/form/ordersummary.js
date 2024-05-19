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
				<p>
					Name: {personData.firstname} {personData.lastname}
				</p>
				<p>Gender: {personData.gender.label}</p>
				<p>Age: {personData.age}</p>
				<p>CNIC: {personData.cnic}</p>
				<p>Socials included: {personData.socials.label}</p>
				<p>Games: {sportslist}</p>

				<h5>Your total is: {calculateTotal()}</h5>
			</div>
		</>
	)
}
