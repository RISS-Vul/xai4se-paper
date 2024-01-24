import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Task, Type, Output, Venue } from "../../types"

export type Filters = {
    task: Array<typeof Task>
    type: Array<typeof Type>
    output: Array<typeof Output>
    // task: Array<typeof Task>
    // explanation: Array<typeof Explanation>
    // method: Array<typeof Method>
	venue: Array<Venue>
	startYear?: number
	endYear?: number
	search: string
    filterStateAND: boolean
	showOriginal: boolean
	showNew: boolean
}

const initialState: Filters = {
	task: [],
	type: [],
	output: [],
	venue: [],
	startYear: undefined,
	endYear: undefined,
	search: "",
	filterStateAND: true,
	showOriginal: true,
	showNew: true
}

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: { 
		reset() {
			return initialState 
		},
		setData(state, action: PayloadAction<Array<typeof Task>>) {
			state.task = action.payload
		},
		setProblem(state, action: PayloadAction<Array<typeof Type>>) {
			state.type= action.payload
		},
		setModel(state, action: PayloadAction<Array<typeof Output>>) {
			state.output = action.payload
		},
		setVenue(state, action: PayloadAction<Array<Venue>>) {
			state.venue = action.payload
		},
		changeState(state, action: PayloadAction<boolean>) {
			state.filterStateAND = action.payload
		},
		setStartYear(state, action: PayloadAction<number | undefined>) {
			state.startYear = action.payload
		},
		setEndYear(state, action: PayloadAction<number | undefined>) {
			state.endYear = action.payload
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setShowOriginal(state, action: PayloadAction<boolean>) {
			state.showOriginal = action.payload
		},
		setShowNew(state, action: PayloadAction<boolean>) {
			state.showNew = action.payload
		}
	}
})

export const filtersReducer = filtersSlice.reducer
export const filtersActions = filtersSlice.actions