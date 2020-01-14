import { bemModule } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import cssModule from './day-section.module.scss'
import { Day } from '../../../model/Day'
import { DayHeader } from '../DayHeader/DayHeader'
import { ClassSection } from '../ClassSection/ClassSection'

interface Props {
	day: Day
}

const bem = bemModule(cssModule)

const DaySection: FunctionComponent<Props> = ({ day }) => {
	return (
		<div>
			<DayHeader day={day} />
			{day.messages.map(message => (
				<pre>{message}</pre>
			))}
			{day.entries.map(schoolClass => (
				<ClassSection
					schoolClass={schoolClass}
					key={schoolClass.schoolClass}
				/>
			))}
			<span>{day.lastUpdate}</span>
		</div>
	)
}

export { DaySection }
