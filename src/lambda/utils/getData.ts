import fetch from 'node-fetch'
import { defaultOptions } from './defaultOptions'
import { Payload } from '../../model/Payload'

const getData = async (date: number, dateOffset: number): Promise<Payload> =>
	(
		await fetch(
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
	).json()

export { getData }
