import React, { StatelessComponent } from 'react'
import { version } from '../../../../package.json'
import { bem } from '@jahed/bem'
import { Link } from '../Typography/Typography'

interface Props {
	lastUpdate: string
}

const Footer: StatelessComponent<Props> = ({ lastUpdate }) => (
	<div className={bem('footer')}>
		<span>
			<strong>Stand:</strong>
			{lastUpdate}
		</span>
		<Link
			href="https://gitlab.com/philippluehmann/vertretungsplan"
			target="_blank"
		>
			GitLab
		</Link>
		{version}
	</div>
)

export { Footer }
