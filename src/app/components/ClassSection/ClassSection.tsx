import { bemModule } from '@jahed/bem'
import React, { FunctionComponent, useContext } from 'react'
import { SchoolClass } from '../../../model/SchoolClass'
import cssModule from './ClassSection.module.scss'
import { Entry } from '../Entry/Entry'
import { ListGroup, ListGroupTitle } from '../List/List'
import { AppContext } from '../../context/AppContext'

interface Props {
	schoolClass: SchoolClass
}

const bem = bemModule(cssModule)

const ClassSection: FunctionComponent<Props> = ({ schoolClass }) => {
	const { activeClass } = useContext(AppContext)
	return (
		<ListGroup
			hidden={!!activeClass && activeClass !== schoolClass.schoolClass}
		>
			<ListGroupTitle>{schoolClass.schoolClass}</ListGroupTitle>
			{schoolClass.entries.map(entry => (
				<Entry entry={entry} key={entry.hash} />
			))}
		</ListGroup>
	)
}

export { ClassSection }
