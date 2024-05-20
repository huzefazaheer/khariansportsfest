const inputType = Object.freeze({
	text: Symbol('text'),
	BLUE: Symbol('blue'),
	GREEN: Symbol('green'),
})

export default function Validate(inputtype, input) {
	if (input != null) {
		return true
	}
}
