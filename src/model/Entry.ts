import { EffectiveOld } from './EffectiveOld'

export interface Entry {
	schoolClass: string
	subject: string
	hours: string
	time: string
	teacher: EffectiveOld[]
	room: EffectiveOld[]
	type?: string
	message?: string
	hash: number
}
