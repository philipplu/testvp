import React, { FunctionComponent } from 'react'
import { ListItemDetail } from '../../List/List'
import { DetailProps } from '../DetailProps'

const TypeDetail: FunctionComponent<DetailProps> = ({ entry }) =>
	entry.type ? (
		<ListItemDetail shown={true}>{entry.type}</ListItemDetail>
	) : null

export { TypeDetail }
