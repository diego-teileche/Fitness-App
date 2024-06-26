import { View, Text, TouchableOpacity, Image } from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { StatusBar } from "expo-status-bar"
import Ionicons from "react-native-vector-icons/Ionicons"
import ExercisesList from "@/components/ExercisesList"
import { ScrollView } from "react-native-virtualized-view"
import { fetchExercisesByBodyPart } from "@/api/exerciseDB"

const Exercises = () => {
	const router = useRouter()
	const [exercises, setExercises] = useState([])
	const item = useLocalSearchParams()

	const getExercises = useCallback(async (bodypart: any) => {
		let data = await fetchExercisesByBodyPart(bodypart)

		setExercises(data)
	}, [])

	useEffect(() => {
		if (item) getExercises(item.name)
	}, [item])

	return (
		<ScrollView>
			<StatusBar style="light" />

			<Image
				// @ts-ignore
				source={item.image}
				style={{ width: wp(100), height: hp(45) }}
				className="rounded-b-[40px]"
			/>

			<TouchableOpacity
				className="bg-rose-500 flex justify-center items-center pr-1 mx-4 absolute rounded-full"
				style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
				onPress={() => router.back()}
			>
				<Ionicons name="caret-back-outline" size={hp(4)} color="white" />
			</TouchableOpacity>

			<View className="mx-4 space-y-3 mt-4">
				<Text
					style={{ fontSize: hp(3) }}
					className="font-semibold text-neutral-700"
				>
					{item.name} exercises
				</Text>
				<View className="mb-10">
					<ExercisesList data={exercises} />
				</View>
			</View>
		</ScrollView>
	)
}

export default Exercises
