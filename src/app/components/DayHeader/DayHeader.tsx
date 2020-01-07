import { bemModule } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import cssModule from './day-header.module.scss'
import { Day } from '../../../model/Day'

interface Props {
	day: Day
}

const bem = bemModule(cssModule)

const DayHeader: FunctionComponent<Props> = ({ day }) => {
	return (
		<div>
			<h1>{day.weekday}</h1>
			<h2>{day.date}</h2>
			<ul>
				{day.affectedElements.map(affecedElement => (
					<li key={affecedElement}>{affecedElement}</li>
				))}
			</ul>
		</div>
	)
}

export { DayHeader }
