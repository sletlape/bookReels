import { View, ScrollView, Pressable, Text } from "react-native";
import ProfileHeader from "../../components/ProfileHeader";
import Badges from "../../components/Badges";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { logout } = useAuth();

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <ProfileHeader />
      <Badges />
      <Pressable
        className="bg-red-500 rounded-lg p-3 mt-8"
        onPress={() => logout()}
      >
        <Text className="text-white text-center font-bold">Logout</Text>
      </Pressable>
    </ScrollView>
  );
}
