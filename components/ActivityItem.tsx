import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ActivityItemProps = {
  icon: any;
  text: string;
  timestamp: string;
};

export default function ActivityItem({ icon, text, timestamp }: ActivityItemProps) {
  return (
    <View className="flex-row items-center bg-gray-800 p-4 rounded-lg mt-4">
      <MaterialCommunityIcons name={icon} color="#9CA3AF" size={24} />
      <View className="ml-4 flex-1">
        <Text className="text-white">{text}</Text>
        <Text className="text-gray-400 text-xs mt-1">{timestamp}</Text>
      </View>
    </View>
  );
}
