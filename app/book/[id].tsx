import { Text, View, FlatList, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { books } from "../../constants/books";
import EngagementToolbar from "../../components/EngagementToolbar";

const { height } = Dimensions.get("window");

export default function BookReel() {
  const { id } = useLocalSearchParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-900">
        <Text className="text-white">Book not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-900">
      <FlatList
        data={book.chapters[0].paragraphs}
        renderItem={({ item }) => (
          <View
            style={{ height }}
            className="justify-center p-8"
          >
            <Text className="text-white text-2xl leading-loose">{item}</Text>
            <EngagementToolbar />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
