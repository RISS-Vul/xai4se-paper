import schema from "../db/schema.json"

const properties = schema.items.properties


// This creates an object with the schema.json enum as both keys and values. 
// The synstax is a bit weird, but this is what typescript would compile a type to.
// Because of the syntax it can be used to get the correct types using typeof (creating a normal object does not work)
export let Task: any
(function (Task) {
	properties["Type of Task"].items.enum.forEach((val) => {
		Task[val] = val
	})
})(Task || (Task = {}))

export let Type: any
(function (Type) {
	properties["Type"].items.enum.forEach((val) => {
		Type[val] = val
	})
})(Type || (Type = {}))

export let Output: any
(function (Output) {
	properties["Type of Output"].items.enum.forEach((val) => {
		Output[val] = val
	})
})(Output || (Output = {}))

// export let Model: any
// (function (Model) {
// 	properties["Type of Model to be Explained"].items.enum.forEach((val) => {
// 		Model[val] = val
// 	})
// })(Model || (Model = {}))

// export let Task: any
// (function (Task) {
// 	properties["Type of Task"].items.enum.forEach((val) => {
// 		Task[val] = val
// 	})
// })(Task || (Task = {}))

// export let Method: any
// (function (Method) {
// 	properties["Method used to explain"].items.enum.forEach((val) => {
// 		Method[val] = val
// 	})
// })(Method || (Method = {}))

export interface Paper {
    Title: string
    url: string
    Year: string
    Venue: VenueType
    Authors: Array<string>
    "Type of Task": Array<typeof Task>
    "Type": Array<typeof Type>
    "Type of Output": Array<typeof Output>
    // "Type of Task": Array<typeof Task>
    //"Type of Explanation": Array<typeof Explanation>
    // "Method used to explain": Array<typeof Method>
    // Abstract: string
    // Comment?: string
     Date?: Date,
    IsOld?: boolean
}

export type VenueType = {
    isOld: boolean,
    value: Venue | string
}

export enum Venue {
    ESECFSE = "ESEC/FSE",
    ASE = "ASE",
    QRS = "QRS",
    TOSEM = "TOSEM",
    NeurIPS = "NeurIPS",
    ICPC = "ICPC",
    ISSRE = "ISSRE",
    Other = "Other"
}

