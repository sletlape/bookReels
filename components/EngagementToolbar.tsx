import { View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EngagementToolbar() {
  return (
    <View className="absolute bottom-20 right-4 space-y-6">
      <Pressable>
        <MaterialCommunityIcons name="heart-outline" color="white" size={32} />
      </Pressable>
      <Pressable>
        <MaterialCommunityIcons name="comment-outline" color="white" size={32} />
      </Pressable>
      <Pressable>
        <MaterialCommunityIcons name="note-plus-outline" color="white" size={32} />
      </Pressable>
      <Pressable>
        <MaterialCommunityIcons name="bookmark-outline" color="white" size={32} />
      </Pressable>
    </View>
  );
}
