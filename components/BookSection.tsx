import { Text, View, FlatList } from "react-native";
import BookCard from "./BookCard";
import { books } from "../constants/books";

type BookSectionProps = {
  title: string;
};

export default function BookSection({ title }: BookSectionProps) {
  return (
    <View className="mt-4">
      <Text className="text-white text-lg font-bold mb-2">{title}</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookCard id={item.id} title={item.title} cover={item.cover} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
