import { PayloadMessage } from '../../model/Payload'
import { stripHtml } from './stripHtml'

export function formatMessages(payloadMessages: PayloadMessage[]): string[] {
	return payloadMessages.map(payloadMessage => stripHtml(payloadMessage.body))
}
