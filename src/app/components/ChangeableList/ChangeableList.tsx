import React, { FunctionComponent, Fragment } from 'react'
import { Changeable } from '../../../model/Changeable'
import { IconType, Icon } from '../Icon/Icon'
import styles from './chnageable-list.module.scss'
import { bemModule } from '@jahed/bem'

const bem = bemModule(styles)

interface Props {
	changeables: Changeable[]
}

const ChangeableList: FunctionComponent<Props> = ({ changeables }) => (
	<Fragment>
		{changeables.map(({ effective, previous }, index) => (
			<div className={bem('item')} key={effective + previous}>
				{previous && (
					<Fragment>
						<span>{previous}</span>
						<Icon className={bem('icon')} type={IconType.ARROW} />
					</Fragment>
				)}
				{effective}

				{index !== changeables.length - 1 && ', '}
			</div>
		))}
	</Fragment>
)

export { ChangeableList }
