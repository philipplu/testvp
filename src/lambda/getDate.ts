import { DateTime } from 'luxon'

export function getDate(): number {
	const { year, month, day } = DateTime.local().setZone('Europe/Berlin')
	return year * 10000 + month * 100 + day
}
