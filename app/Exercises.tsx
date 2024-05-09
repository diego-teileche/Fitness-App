import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	ImageSourcePropType,
} from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { demoExercises } from "@/constants"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { StatusBar } from "expo-status-bar"
import Ionicons from "react-native-vector-icons/Ionicons"

const Exercises = () => {
	const router = useRouter()
	const item = useLocalSearchParams()
	const [exercises, setExercises] = useState(demoExercises)

	/* useEffect(() => {
		if (item) getExercises(item.name)
	}, [item])
	
	const getExercises = async (bodyPart: any) => {
		let data = await fetchExecisesByBodyPart()
	} */

	return (
		<ScrollView>
			<StatusBar style="light" />

			<Image
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
		</ScrollView>
	)
}

export default Exercises
