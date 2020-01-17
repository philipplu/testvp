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
	Frz: 'Französich',
	Phi: 'Philosophie',
}

const getSubject = (abbreviation: string): string => {
	if (abbreviation[0] === 'S') {
		const subject = subjects[abbreviation.substr(1)]
		if (subject !== undefined) {
			return `${subject} Seminar`
		}
	}
	return subjects[abbreviation] ?? abbreviation
}

export { getSubject }
