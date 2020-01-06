const fetch = require('node-fetch')

fetch(
	'https://stundenplan.hamburg.de/WebUntis/monitor/substitution/data?school=hh5872',
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			formatName: 'Schüler heute',
			schoolName: 'hh5872',
			date: 20200106,
			dateOffset: 0,
			strikethrough: true,
			mergeBlocks: true,
			showOnlyFutureSub: true,
			showBreakSupervisions: false,
			showTeacher: true,
			showClass: true,
			showHour: true,
			showInfo: true,
			showRoom: true,
			showSubject: true,
			groupBy: 1,
			hideAbsent: true,
			departmentIds: [],
			departmentElementType: -1,
			hideCancelWithSubstitution: true,
			hideCancelCausedByEvent: false,
			showTime: false,
			showSubstText: true,
			showAbsentElements: [],
			showAffectedElements: [1],
			showUnitTime: true,
			showMessages: true,
			showStudentgroup: false,
			enableSubstitutionFrom: true,
			showSubstitutionFrom: 1800,
			showTeacherOnEvent: false,
			showAbsentTeacher: true,
			strikethroughAbsentTeacher: true,
			activityTypeIds: [2, 3, 4],
			showEvent: false,
			showCancel: true,
			showOnlyCancel: false,
			showSubstTypeColor: true,
			showExamSupervision: false,
			showUnheraldedExams: false,
		}),
	}
)
	.then(request => request.json())
	.then(a => console.log(JSON.stringify(a)))
