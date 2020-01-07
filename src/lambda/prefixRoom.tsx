import { Changeable } from '../model/Changeable'

export function prefixRoom(changeable: Changeable): Changeable {
	const isNumber: RegExp = /^\d+$/
	if (isNumber.test(changeable.effective)) {
		changeable.effective = `R${changeable.effective}`
	}
	if (changeable.previous && isNumber.test(changeable.previous)) {
		changeable.previous = `R${changeable.previous}`
	}
	return changeable
}
