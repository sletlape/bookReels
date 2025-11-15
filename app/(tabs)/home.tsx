import { View } from "react-native";
import Streak from "../../components/Streak";
import LastRead from "../../components/LastRead";
import ActivityFeed from "../../components/ActivityFeed";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Streak />
      <LastRead />
      <ActivityFeed />
    </View>
  );
}
