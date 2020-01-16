interface Subjects {
	[key: string]: string
}

const subjects: Subjects = {
	Ge: 'Geschichte',
	Geo: 'Geographie',
	Mat: 'Mathe',
	Eng: 'Englisch',
	Deu: 'Deutsch',
	Spo: 'Sport',
	Kun: 'Kunst',
	Mus: 'Musik',
	Lat: 'Latein',
	Rat: 'Klassenrat',
	Bio: 'Biologie',
	Rel: 'Religion',
	Phy: 'Physik',
	Orc: 'Orchester',
	KOrc: 'Klassenorchester',
}

const getSubject = (abbreviation: string): string =>
	subjects[abbreviation] ?? abbreviation

export { getSubject }
