import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Badge({ icon, name }: { icon: any; name: string }) {
  return (
    <View className="items-center bg-gray-800 p-4 rounded-lg">
      <MaterialCommunityIcons name={icon} color="#A78BFA" size={32} />
      <Text className="text-violet-300 mt-2">{name}</Text>
    </View>
  );
}

export default function Badges() {
  return (
    <View className="mt-8">
      <Text className="text-white text-lg font-bold mb-2">Badges</Text>
      <View className="flex-row justify-around">
        <Badge icon="bird" name="Early Bird" />
        <Badge icon="book-open-page-variant" name="Dedicated Reader" />
        <Badge icon="account-group" name="Social Butterfly" />
      </View>
    </View>
  );
}
