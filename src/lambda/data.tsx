import { APIGatewayEvent, Context } from 'aws-lambda'
import { getData } from './getData'
import { getDate } from './getDate'
import { Day } from '../model/Day'
import { Payload } from '../model/Payload'
import { parse } from './parse'

interface DataResponse {
	statusCode: number
	body: string
}

export async function handler(
	event: APIGatewayEvent,
	context: Context
): Promise<DataResponse> {
	const lastUpdate = event?.queryStringParameters?.lastUpdate

	console.log(lastUpdate)

	console.log(getDate())

	const daysToShow: number = 2
	const date: number = getDate()

	const requests: Promise<Payload>[] = []
	for (let dateOffset = 0; dateOffset < daysToShow; dateOffset++) {
		requests.push(getData(date, dateOffset))
	}

	const payloads: Payload[] = await Promise.all(requests)

	const days: Day[] = payloads.map(parse)

	return {
		statusCode: 200,
		body: JSON.stringify(days),
	}
}
