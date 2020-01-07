import { Entry } from '../model/Entry'
import { PayloadRow } from '../model/Payload'
import { getHash } from './getHash'
import { getSubject } from './getSubject'
import { praseFromBrackets } from './parseFromBrackets'
import { parseSchoolClass } from './parseSchoolClass'
import { stripHtml } from './stripHtml'
import { Changeable } from '../model/Changeable'
import { SchoolClass } from '../model/SchoolClass'
import { sortSchoolClasses } from './sortSchoolClasses'
import { prefixRoom } from './prefixRoom'

export function formatEntries(rows: PayloadRow[]): SchoolClass[] {
	rows = rows.sort((a, b) =>
		sortSchoolClasses(parseSchoolClass(a.group), parseSchoolClass(b.group))
	)

	const schoolClassIndices: {
		[key: string]: number
	} = {}
	let index = 0

	const entries: SchoolClass[] = []

	for (const row of rows) {
		const schoolClass: string = parseSchoolClass(row.group)
		const entry: Entry = {
			schoolClass,
			subject: getSubject(row.data[3]),
			hours: row.data[0],
			time: row.data[1],
			teacher: praseFromBrackets(row.data[5]),
			room: praseFromBrackets(row.data[4]).map(prefixRoom),
			type:
				stripHtml(row.data[6]).replace('Raumänderung', '') || undefined,
			info: stripHtml(row.data[7]) || undefined,
			hash: getHash(
				row.group + ((row.data as unknown) as string[]).join()
			),
		}
		if (!Object.keys(schoolClassIndices).includes(schoolClass)) {
			entries.push({
				schoolClass,
				entries: [],
			})
			schoolClassIndices[schoolClass] = index
			index++
		}
		entries[schoolClassIndices[schoolClass]].entries.push(entry)
	}

	return entries
}
