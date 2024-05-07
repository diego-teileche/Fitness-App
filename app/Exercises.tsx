import { View, Text, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"

export default function Exercises() {
	const router = useRouter()
	const item = useLocalSearchParams()
	const [exercises, setExercises] = useState([])

	/* useEffect(() => {
		if (item) getExercises(item.name)
	}, [item])
	
	const getExercises = async (bodyPart: any) => {
		let data = await fetchExecisesByBodyPart()
	} */

	return (
		<View className="mt-20">
			<Text>Exercises</Text>

			<TouchableOpacity onPress={() => router.back()}>
				<Text>Go back</Text>
			</TouchableOpacity>
		</View>
	)
}
