import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Streak() {
  return (
    <View className="bg-gray-800 p-4 rounded-lg items-center">
      <Text className="text-white text-lg">Reading Streak</Text>
      <View className="flex-row items-center mt-2">
        <MaterialCommunityIcons name="fire" color="#FDBA74" size={24} />
        <Text className="text-orange-300 text-2xl font-bold ml-2">15 days</Text>
      </View>
    </View>
  );
}
