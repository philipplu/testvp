import { bemModule } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import cssModule from './DaySection.module.scss'
import { Day } from '../../../model/Day'
import { DayOverview } from '../DayOverview/DayOverview'
import { ClassSection } from '../ClassSection/ClassSection'
import {
	List,
	ListGroup,
	ListGroupTitle,
	ListItem,
	ListItemContent,
} from '../List/List'

interface Props {
	day: Day
}

const bem = bemModule(cssModule)

const DaySection: FunctionComponent<Props> = ({ day }) => {
	return (
		<div className={bem('day-section')}>
			<DayOverview day={day} />
			{!!day.messages.length && (
				<div className={bem('messages-section')}>
					<List>
						<ListGroup>
							<ListGroupTitle>i</ListGroupTitle>
							{day.messages.map(message => (
								<ListItem key={message}>
									<ListItemContent
										primaryText={message}
										growing
									/>
								</ListItem>
							))}
						</ListGroup>
					</List>
				</div>
			)}
			<List>
				{day.entries.map(schoolClass => (
					<ClassSection
						schoolClass={schoolClass}
						key={schoolClass.schoolClass}
					/>
				))}
			</List>
		</div>
	)
}

export { DaySection }
