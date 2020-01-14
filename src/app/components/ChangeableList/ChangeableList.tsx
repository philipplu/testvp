import React, { FunctionComponent, Fragment } from 'react'
import { Changeable } from '../../../model/Changeable'
import Arrow from '../../img/arrow-right.svg'

interface Props {
	changeables: Changeable[]
}

const ChangeableList: FunctionComponent<Props> = ({ changeables }) => (
	<Fragment>
		{changeables.map(({ effective, previous }, index) => (
			<Fragment key={effective + previous}>
				{index !== 0 && ', '}
				{previous && (
					<Fragment>
						<span>{previous}</span>
						{Arrow}
					</Fragment>
				)}
				{effective}
			</Fragment>
		))}
	</Fragment>
)

export { ChangeableList }
