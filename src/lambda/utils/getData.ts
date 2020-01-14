import fetch from 'node-fetch'
import { defaultOptions } from './defaultOptions'
import { Payload } from '../../model/Payload'

export async function getData(
	date: number,
	dateOffset: number
): Promise<Payload> {
	const request = await fetch(
		'https://stundenplan.hamburg.de/WebUntis/monitor/substitution/data?school=hh5872',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...defaultOptions,
				date,
				dateOffset,
			}),
		}
	)

	console.log(
		JSON.stringify({
			...defaultOptions,
			date,
			dateOffset,
		})
	)
	return request.json()
}
