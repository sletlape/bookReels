import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View className="bg-gray-800 rounded-lg p-3 flex-row items-center">
      <MaterialCommunityIcons name="magnify" color="#9CA3AF" size={20} />
      <TextInput
        className="text-white ml-2 flex-1"
        placeholder="Search by title or author"
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}
