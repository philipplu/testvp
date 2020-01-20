import React, { FunctionComponent, useState } from 'react'
import { useData } from '../../hooks/useData'
import cssModule from './app.module.scss'
import { bemModule } from '@jahed/bem'
import { DaySection } from '../DaySection/DaySection'
import { Footer } from '../Footer/Footer'
import '../../styles/main.scss'
import { AppContextProvider } from '../../context/AppContext'
import { Nullable } from '../../../model/Nullable'
import { useActiveClass } from '../../hooks/useActiveClass'
import { allAffectedElements } from '../../util/allAffectedElements'
import { RefreshButton } from '../RefreshButton/RefreshButton'

const bem = bemModule(cssModule)

const App: FunctionComponent = () => {
	const { data, refresh, isRefreshing } = useData()
	const [activeClass, setActiveClass] = useActiveClass(
		allAffectedElements(data)
	)
	const [activeEntry, setActiveEntry] = useState<Nullable<number>>(null)

	if (data.length === 0) {
		return null
	}

	return (
		<AppContextProvider
			value={{
				activeClass,
				setActiveClass,
				activeEntry,
				setActiveEntry,
				isRefreshing,
				refresh,
			}}
		>
			<div className={bem('app')}>
				<RefreshButton />
				{data.map(day => (
					<DaySection day={day} key={day.date}></DaySection>
				))}
				<Footer lastUpdate={data?.[0]?.lastUpdate}></Footer>
			</div>
		</AppContextProvider>
	)
}

export { App }
