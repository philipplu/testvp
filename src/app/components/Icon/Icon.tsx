import React, { StatelessComponent } from 'react'
import arrowPath from '../../img/arrow-right.svg'
import styles from './icon.module.scss'
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
	<img className={bem('icon') + ' ' + className} src={type} {...props} />
)

export { IconType, Icon }
