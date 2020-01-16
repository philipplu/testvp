import React, { StatelessComponent } from 'react'
import arrowPath from '../../img/arrow-right.svg'
import styles from './Icon.module.scss'
import { bemModule } from '@jahed/bem'

const bem = bemModule(styles)

class IconType {
	public static ARROW = arrowPath
}

type Props = React.DetailedHTMLProps<
	React.ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
> & {
	type: string
}

const Icon: StatelessComponent<Props> = ({ type, className, ...props }) => (
	<div
		className={[bem('icon'), className].join(' ')}
		style={{ backgroundImage: `url(${type})` }}
		{...props}
	/>
)

export { IconType, Icon }
