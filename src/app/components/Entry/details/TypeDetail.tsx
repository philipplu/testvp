import React, { FunctionComponent } from 'react'
import { ListItemDetail } from '../../List/List'
import { DetailProps } from '../DetailProps'

const TypeDetail: FunctionComponent<DetailProps> = ({ entry, forceShow }) =>
	entry.type ? (
		<ListItemDetail shown={forceShow}>{entry.type}</ListItemDetail>
	) : null

export { TypeDetail }
