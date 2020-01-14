import React, { FunctionComponent, useState } from 'react'
import { useData } from '../../hooks/useData'
import cssModule from './app.module.scss'
import { bemModule } from '@jahed/bem'
import { DaySection } from '../DaySection/DaySection'
import { Footer } from '../Footer/Footer'
import '../../styles/main.scss'
import { AppContextProvider } from '../../context/AppContext'
import { Nullable } from '../../../model/Nullable'

const bem = bemModule(cssModule)

const App: FunctionComponent = () => {
	const { data, refresh } = useData()
	const [activeClass, setActiveClass] = useState<Nullable<string>>(null)
	const [activeEntry, setActiveEntry] = useState<Nullable<number>>(null)
	return (
		<AppContextProvider
			value={{
				activeClass,
				setActiveClass,
				activeEntry,
				setActiveEntry,
			}}
		>
			<div className={bem('app')}>
				{data.map(day => (
					<DaySection day={day} key={day.date}></DaySection>
				))}
				<button onClick={refresh}>refresh</button>
				<Footer></Footer>
			</div>
		</AppContextProvider>
	)
}

export { App }
