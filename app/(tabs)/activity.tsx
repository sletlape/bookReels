import { View, ScrollView } from "react-native";
import ActivityItem from "../../components/ActivityItem";

export default function Activity() {
  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <ActivityItem
        icon="comment-outline"
        text="You commented on The Midnight Library"
        timestamp="2 hours ago"
      />
      <ActivityItem
        icon="heart-outline"
        text="You liked a paragraph in Dune"
        timestamp="1 day ago"
      />
      <ActivityItem
        icon="bookmark-outline"
        text="You bookmarked a section in The Martian"
        timestamp="3 days ago"
      />
    </ScrollView>
  );
}
