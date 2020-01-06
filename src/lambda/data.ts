import { APIGatewayEvent, Context } from 'aws-lambda'
import { test } from './test'
import { getData } from './getData'
import { getDate } from './getDate'

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

	const todayData = await getData(getDate(), 0)

	console.log(JSON.stringify(todayData))

	if (lastUpdate === todayData.payload.lastUpdate) {
		return {
			statusCode: 200,
			body: JSON.stringify({
				lastUpdate,
			}),
		}
	}

	const tomorrowData = await getData(getDate(), 1)
	return {
		statusCode: 200,
		body: JSON.stringify({
			today: todayData,
			tomorrow: tomorrowData,
			lastUpdate: todayData.payload.lastUpdate,
		}),
	}
}
