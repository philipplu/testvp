import React, { FunctionComponent, Fragment } from 'react'
import { Changeable } from '../../../model/Changeable'

interface Props {
	changeables: Changeable[]
}

const ChangeableList: FunctionComponent<Props> = ({ changeables }) => (
	<Fragment>
		{changeables.map(({ effective, previous }) => (
			<Fragment>
				{previous && (
					<Fragment>
						<span>{previous}</span>
						arrow
					</Fragment>
				)}
				{effective}
			</Fragment>
		))}
	</Fragment>
)

export { ChangeableList }
