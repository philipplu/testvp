import { useState, useEffect } from 'react'
import { Day } from '../../model/Day'

interface DataHook {
	data: Day[]
	refresh: () => Promise<void>
	isRefreshing: boolean
}

const DATA_KEY: string = 'data'

const useData = (): DataHook => {
	const localStorageData = localStorage.getItem(DATA_KEY)
	const defaultData: Day[] = localStorageData
		? JSON.parse(localStorageData)
		: []
	const [data, setData] = useState<Day[]>(defaultData)
	const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

	const refresh = async () => {
		setIsRefreshing(true)
		const response: Response = await fetch('/.netlify/functions/data')
		const days: Day[] = await response.json()
		localStorage.setItem(DATA_KEY, JSON.stringify(days))
		setData(days)
		setIsRefreshing(false)
	}

	useEffect(() => {
		refresh()
	}, [])

	return { data, refresh, isRefreshing }
}

export { useData }
