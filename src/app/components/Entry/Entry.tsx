import { bemModule } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import cssModule from './entry.module.scss'
import { Entry as IEntry } from '../../../model/Entry'
import { ListItem, ListItemContent, ListItemDetails } from '../List/List'
import { TeacherDetail } from './details/TeacherDetail'
import { RoomDetail } from './details/RoomDetail'
import { TypeDetail } from './details/TypeDetail'
import { InfoDetail } from './details/InfoDetail'
import { TimeDetail } from './details/TimeDetail'

interface Props {
	entry: IEntry
}

const bem = bemModule(cssModule)

const Entry: FunctionComponent<Props> = ({ entry }) => {
	return (
		<ListItem>
			<ListItemContent
				primaryText={entry.subject}
				secondaryText={entry.hours}
			/>
			<ListItemDetails>
				<TeacherDetail entry={entry} forceShow={false} />
				<RoomDetail entry={entry} forceShow={false} />
				<TypeDetail entry={entry} forceShow={false} />
				<InfoDetail entry={entry} forceShow={false} />
				<TimeDetail entry={entry} forceShow={false} />
			</ListItemDetails>
		</ListItem>
	)
}

export { Entry }
