import { View, Text, FlatList, TouchableOpacity } from "react-native"
import React from "react"
import { useRouter } from "expo-router"
import { Image } from "expo-image"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import Animated, { FadeInDown } from "react-native-reanimated"

interface ExercisesListProps {
	data: any
}

interface ExercisesCardProps {
	item: any
	router: any
	index: any
}

const ExercisesList: React.FC<ExercisesListProps> = ({ data }) => {
	const router = useRouter()

	return (
		<View>
			<FlatList
				data={data}
				numColumns={2}
				keyExtractor={(item) => item.name}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
				columnWrapperStyle={{ justifyContent: "space-between" }}
				renderItem={({ item, index }) => (
					<ExercisesCard router={router} index={index} item={item} />
				)}
			/>
		</View>
	)
}

const ExercisesCard: React.FC<ExercisesCardProps> = ({
	item,
	router,
	index,
}) => {
	return (
		<Animated.View
			entering={FadeInDown.duration(400)
				.delay(index * 200)
				.springify()
				.damping(4)}
		>
			<TouchableOpacity
				className="flex py-3 space-y-2"
				onPress={() =>
					router.push({ pathname: "/ExerciseDetails", params: item })
				}
			>
				<View className="bg-neutral-200 shadow rounded-[25px]">
					<Image
						source={{ uri: item.gifUrl }}
						contentFit="cover"
						style={{ width: wp(44), height: wp(52) }}
						className="rounded-[25px]"
					/>
				</View>

				<Text
					style={{ fontSize: hp(1.7) }}
					className="text-neutral-700 font-semibold ml-1 tracking-wide"
				>
					{item?.name?.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
				</Text>
			</TouchableOpacity>
		</Animated.View>
	)
}

export default ExercisesList
