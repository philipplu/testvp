import { bemModule } from '@jahed/bem'
import React, { FunctionComponent, useContext } from 'react'
import cssModule from './entry.module.scss'
import { Entry as IEntry } from '../../../model/Entry'
import { ListItem, ListItemContent, ListItemDetails } from '../List/List'
import { TeacherDetail } from './details/TeacherDetail'
import { RoomDetail } from './details/RoomDetail'
import { TypeDetail } from './details/TypeDetail'
import { InfoDetail } from './details/InfoDetail'
import { TimeDetail } from './details/TimeDetail'
import { AppContext } from '../../context/AppContext'

interface Props {
	entry: IEntry
}

const bem = bemModule(cssModule)

const Entry: FunctionComponent<Props> = ({ entry }) => {
	const { setActiveEntry, activeEntry } = useContext(AppContext)
	const forceShow = activeEntry === entry.hash
	return (
		<ListItem onClick={() => setActiveEntry(forceShow ? null : entry.hash)}>
			<ListItemContent
				primaryText={entry.subject}
				secondaryText={entry.hours}
			/>
			<ListItemDetails>
				<TeacherDetail entry={entry} forceShow={forceShow} />
				{!!entry.room.length && (
					<RoomDetail entry={entry} forceShow={forceShow} />
				)}
				<TypeDetail entry={entry} forceShow={forceShow} />
				<InfoDetail entry={entry} forceShow={forceShow} />
				<TimeDetail entry={entry} forceShow={forceShow} />
			</ListItemDetails>
		</ListItem>
	)
}

export { Entry }
