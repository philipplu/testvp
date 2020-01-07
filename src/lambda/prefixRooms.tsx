import { EffectiveOld } from '../model/EffectiveOld'

export function prefixRoom(effectiveOld: EffectiveOld): EffectiveOld {
	const isNumber: RegExp = /^\d+$/
	if (isNumber.test(effectiveOld.effective)) {
		effectiveOld.effective = `R${effectiveOld.effective}`
	}
	if (effectiveOld.old && isNumber.test(effectiveOld.old)) {
		effectiveOld.old = `R${effectiveOld.old}`
	}
	return effectiveOld
}
