import { Filters } from "../redux/slices/filters"
import { Paper, Task, Type, Output, Venue } from "../types"
import { isSomeEnum, isEnumArray } from "./utils"

// Function that checks if an object is of type Paper. 
// Uses typescript typeguards to ensure that objects that pass the checks are actually given type Paper
export function isPaper(paper: any): paper is Paper {
	return "url" in paper 
        && "Title" in paper 
        && "Year" in paper 
        && "Venue" in paper 
		&& (paper["Venue"]["isOld"] && isSomeEnum(Venue)(paper["Venue"]["value"]) || !paper["Venue"]["isOld"])
        && "Authors" in paper 
        && "Type of Task" in paper
        && isEnumArray(Task)(paper["Type of Task"])
        && "Type" in paper
        && isEnumArray(Type)(paper["Type"])
        && "Type of Output" in paper
        && isEnumArray(Output)(paper["Type of Output"])
}

// Array of the type of X, used throughout the project for consistency
export const typeArray: (keyof Paper)[] = ["Type of Task", "Type", "Type of Output"]

// Map from name of type object to type of X string
export const enumKeyMap: Record<keyof Omit<Filters, "filterStateAND" | "startYear" | "endYear" | "search" | "showOriginal" | "showNew" >, keyof Paper> = {
	task: "Type of Task",
	type: "Type",
	output: "Type of Output",
	venue: "Venue",
}

// returns the dedicated color to the given type of X/Venue given. Colors are 
export const getColor = (type: keyof Paper) => {
	switch (type) {
	case "Type of Task":
		return "magenta"
        
	case "Type":
		return "green"

	case "Type of Output":
		return "geekblue"

	case "Venue": 
		return "cyan"
                
	default:
		return "gold"
	}
}
