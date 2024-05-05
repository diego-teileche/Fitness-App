import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useRouter } from "expo-router"

export default function Exercises() {
	const router = useRouter()

	return (
		<View className="mt-20">
			<Text>Exercises</Text>

			<TouchableOpacity onPress={() => router.back()}>
				<Text>Go back</Text>
			</TouchableOpacity>
		</View>
	)
}
