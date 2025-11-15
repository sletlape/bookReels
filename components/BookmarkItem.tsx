import { Text, View } from "react-native";

type BookmarkItemProps = {
  bookTitle: string;
  chapterTitle: string;
  paragraph: string;
};

export default function BookmarkItem({
  bookTitle,
  chapterTitle,
  paragraph,
}: BookmarkItemProps) {
  return (
    <View className="bg-gray-800 p-4 rounded-lg mt-4">
      <Text className="text-white font-bold">{bookTitle} - {chapterTitle}</Text>
      <Text className="text-gray-400 mt-2">"{paragraph}"</Text>
    </View>
  );
}
