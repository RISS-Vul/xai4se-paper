import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Task, Type, Output, Paper, Venue } from "../../types"


const initialState: Paper & { Comment?: string } = {
	Title: "",
	url: "",
	Year: "2020",
	Venue: {
		isOld: true,
		value: ""
	},
	Authors: [],
	"Type of Task": [],
	"Type": [],
	"Type of Output": []
}

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setTitle(state, action: PayloadAction<string>) {
			state.Title = action.payload
		},
		setDoi(state, action: PayloadAction<string>) {
			state.url = action.payload
		},
		setYear(state, action: PayloadAction<number>) {
			state.Year = action.payload.toString()
		},
		setAuthors(state, action: PayloadAction<Array<string>>) {
			state.Authors = action.payload
		},
		setIsOldVenue(state, action: PayloadAction<boolean>) {
			state.Venue.isOld = action.payload
		},
		setVenue(state, action: PayloadAction<Venue | string>) {
			state.Venue.value = action.payload
		},
		setTask(state, action: PayloadAction<Array<typeof Task>>) {
			state["Type of Task"] = action.payload
		},
		settype(state, action: PayloadAction<Array<typeof Type>>) {
			state["Type"] = action.payload
		},
		setOutput(state, action: PayloadAction<Array<typeof Output>>) {
			state["Type of Output"] = action.payload
		},
		setComment(state, action: PayloadAction<string>) {
			if (action.payload) {
				state.Comment = action.payload
			} else {
				delete state.Comment
			}
		}
	}
})

export const formReducer = formSlice.reducer
export const formActions = formSlice.actions
