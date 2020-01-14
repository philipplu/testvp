export function parseSchoolClass(schoolClass: string): string {
	return schoolClass.replace('Jg', '')
}
