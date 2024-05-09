import { View, Text } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

export default function ExerciseDetails() {
	const item = useLocalSearchParams()

	return (
		<View>
			<Text>ExerciseDetails</Text>
		</View>
	)
}
