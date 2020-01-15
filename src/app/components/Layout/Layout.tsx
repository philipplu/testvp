import React, { StatelessComponent } from 'react'
import styles from './Layout.module.scss'
import { bemModule } from '@jahed/bem/lib/bemModule'

const bem = bemModule(styles)

export const Content: StatelessComponent<React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>> = props => (
	<div className={[bem('content'), props.className].join(' ')}>
		{props.children}
	</div>
)
