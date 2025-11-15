import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";

export default function LastRead() {
  return (
    <View className="bg-gray-800 p-4 rounded-lg mt-4">
      <Text className="text-white text-lg">Last Read</Text>
      <Text className="text-gray-400 mt-2">The Midnight Library - Chapter 1</Text>
      <Pressable
        className="bg-teal-500 rounded-lg p-3 mt-4"
        onPress={() => router.push("/book/1")}
      >
        <Text className="text-white text-center font-bold">Continue Reading</Text>
      </Pressable>
    </View>
  );
}
