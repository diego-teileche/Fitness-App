import React from "react"
import { Stack } from "expo-router"
import "react-native-reanimated"
import { LogBox } from "react-native"

export default function _layout() {
	LogBox.ignoreLogs(["Warning: Failed prop type"])

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Exercises"
				options={{ presentation: "fullScreenModal" }}
			/>
			<Stack.Screen
				name="ExerciseDetails"
				options={{ presentation: "modal" }}
			/>
		</Stack>
	)
}
