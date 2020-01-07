import React, { FunctionComponent } from 'react'
import { useData } from '../hooks/useData'

const App: FunctionComponent = () => {
	const { data, refresh } = useData()
	return (
		<div className="App">
			<code>{JSON.stringify(data)}</code>
			<button onClick={refresh}>refresh</button>
		</div>
	)
}

export default App
