import { parseSchoolClass } from './parseSchoolClass'
import { sortSchoolClasses } from './sortSchoolClasses'

export function formatAffectedElements(affectedElements: string[]): string[] {
	return affectedElements.map(parseSchoolClass).sort(sortSchoolClasses)
}
