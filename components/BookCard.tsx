import { Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";

type BookCardProps = {
  id: string;
  title: string;
  cover: string;
};

export default function BookCard({ id, title, cover }: BookCardProps) {
  return (
    <Pressable className="mr-4" onPress={() => router.push(`/book/${id}`)}>
      <Image
        source={{ uri: cover }}
        className="w-32 h-48 rounded-lg"
      />
      <Text className="text-white mt-2 w-32">{title}</Text>
    </Pressable>
  );
}
