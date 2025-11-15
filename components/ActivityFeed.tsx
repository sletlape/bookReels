import { Text, View } from "react-native";

export default function ActivityFeed() {
  return (
    <View className="bg-gray-800 p-4 rounded-lg mt-4">
      <Text className="text-white text-lg">Activity Feed</Text>
      <View className="mt-2">
        <Text className="text-gray-400">Alice commented on Chapter 3 of Dune</Text>
        <Text className="text-gray-400">Bob liked a paragraph in The Martian</Text>
      </View>
    </View>
  );
}
