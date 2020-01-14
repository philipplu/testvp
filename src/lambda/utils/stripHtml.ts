import { AllHtmlEntities } from 'html-entities'

const { decode } = new AllHtmlEntities()

export function stripHtml(html: string): string {
	return decode(html.replace(/<[^>]+>/g, ''))
}
