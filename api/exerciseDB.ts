/* import axios from "axios"
import { RAPID_API_KEY } from "@env"

const baseURL = "https://exercisedb.p.rapidapi.com"

const apiCall = async (url: string, params?: any) => {
	try {
		const options = {
			method: "GET",
			url,
			params,
			headers: {
				"X-RapidAPI-Key": RAPID_API_KEY,
				"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
			},
		}

		const res = await axios.request(options)
		return res.data
	} catch (error: any) {
		console.log("Error: ", error.message)
	}
}

export const fetchExecisesByBodyPart = async (bodyPart: any) => {
	let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyPart}`)

	return data
} */
