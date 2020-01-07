import React, { FunctionComponent } from 'react'
import { useData } from '../../hooks/useData'
import cssModule from './app.module.scss'
import { bemModule } from '@jahed/bem'
import { DaySection } from '../DaySection/DaySection'

const bem = bemModule(cssModule)

const App: FunctionComponent = () => {
	const { data, refresh } = useData()
	return (
		<div className="App">
			{data.map(day => (
				<DaySection day={day} key={day.date}></DaySection>
			))}
			<code>{JSON.stringify(data)}</code>
			<button onClick={refresh}>refresh</button>
		</div>
	)
}

export default App
