import { bemModule } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import { SchoolClass } from '../../../model/SchoolClass'
import cssModule from './class-section.module.scss'
import { Entry } from '../Entry/Entry'
import { ListGroup, ListGroupTitle } from '../List/List'

interface Props {
	schoolClass: SchoolClass
}

const bem = bemModule(cssModule)

const ClassSection: FunctionComponent<Props> = ({ schoolClass }) => {
	return (
		<ListGroup>
			<ListGroupTitle>{schoolClass.schoolClass}</ListGroupTitle>
			{schoolClass.entries.map(entry => (
				<Entry entry={entry} key={entry.hash} />
			))}
		</ListGroup>
	)
}

export { ClassSection }
