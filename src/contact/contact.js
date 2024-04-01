import './contact.js'
import './style.css'

const name = document.getElementById('name')
const email = document.getElementById('email')
const issue = document.getElementById('issue')
const btn_submit = document.getElementById('btn_submit')

btn_submit.addEventListener('click', (e) => {
	function writeUserData(userId, name, email, complaint) {
		const db = getDatabase()
		set(ref(db, 'users/' + userId), {
			username: name,
			email: email,
			complaint: complaint,
		})
	}
	console.log('Complaint sent successfully')
})
