import { View, Text, Image } from "react-native";

export default function ProfileHeader() {
  return (
    <View className="items-center">
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
        className="w-24 h-24 rounded-full"
      />
      <Text className="text-white text-2xl font-bold mt-4">Jane Doe</Text>
      <View className="flex-row mt-4 space-x-8">
        <View className="items-center">
          <Text className="text-white font-bold text-lg">15</Text>
          <Text className="text-gray-400">Streak</Text>
        </View>
        <View className="items-center">
          <Text className="text-white font-bold text-lg">5</Text>
          <Text className="text-gray-400">Books Read</Text>
        </View>
        <View className="items-center">
          <Text className="text-white font-bold text-lg">70%</Text>
          <Text className="text-gray-400">Progress</Text>
        </View>
      </View>
    </View>
  );
}
