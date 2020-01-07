import { Entry } from '../model/Entry'
import { PayloadRow } from '../model/Payload'
import { getHash } from './getHash'
import { getSubject } from './getSubject'
import { praseFromBrackets } from './parseFromBrackets'
import { parseSchoolClass } from './parseSchoolClass'
import { stripHtml } from './stripHtml'
import { EffectiveOld } from '../model/EffectiveOld'

export function formatEntries(rows: PayloadRow[]): Entry[] {
	return rows.map(
		(row: PayloadRow): Entry => {
			return {
				schoolClass: parseSchoolClass(row.group),
				subject: getSubject(row.data[3]),
				hours: row.data[0],
				time: row.data[1],
				teacher: praseFromBrackets(row.data[5]),
				room: praseFromBrackets(row.data[4]).map(prefixRoom),
				type:
					stripHtml(row.data[6]).replace('Raumänderung', '') ||
					undefined,
				message: stripHtml(row.data[7]) || undefined,
				hash: getHash(
					row.group + ((<unknown>row.data) as string[]).join()
				),
			}
		}
	)
}

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
