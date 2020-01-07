import { EffectiveOld } from '../model/EffectiveOld'
import { stripHtml } from './stripHtml'

export function praseFromBrackets(input: string): EffectiveOld[] {
	return stripHtml(input)
		.split(', ')
		.map(
			(item: string): EffectiveOld => {
				const matchOld = /\(([^)]+)\)/.exec(item)
				if (matchOld) {
					return { effective: item.split(' ')[0], old: matchOld[1] }
				}
				return { effective: item }
			}
		)
		.filter(element => element.effective !== '')
}
