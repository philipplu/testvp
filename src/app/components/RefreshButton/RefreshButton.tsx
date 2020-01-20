import React, { FunctionComponent, useContext } from 'react'
import { bemModule } from '@jahed/bem'
import styles from './RefreshButton.module.scss'
import { Icon, IconType } from '../Icon/Icon'
import { AppContext } from '../../context/AppContext'

const bem = bemModule(styles)

const RefreshButton: FunctionComponent = () => {
	const { isRefreshing, refresh } = useContext(AppContext)
	return (
		<div
			className={bem('refresh-button', { refreshing: isRefreshing })}
			onClick={refresh}
		>
			{isRefreshing.toString()}
			<Icon type={IconType.REFRESH}></Icon>
		</div>
	)
}

export { RefreshButton }
