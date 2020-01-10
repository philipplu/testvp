import { createContext, Dispatch, SetStateAction } from 'react'
import { Nullable } from '../../model/Nullable'

export interface IAppContext {
	activeClass: Nullable<string>
	setActiveClass: Dispatch<SetStateAction<Nullable<string>>>
	activeEntry: Nullable<number>
	setActiveEntry: Dispatch<SetStateAction<Nullable<number>>>
}

const AppContext = createContext<IAppContext>(undefined as never)

const AppContextConsumer = AppContext.Consumer
const AppContextProvider = AppContext.Provider

export { AppContext, AppContextConsumer, AppContextProvider }
