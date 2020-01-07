import { Entry } from "./Entry";

export interface Day {
    weekday: string
    date: string
    affectedElements: string[]
    messages: string[]
    entries: Entry[]
}
