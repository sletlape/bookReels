import { View, ScrollView } from "react-native";
import SearchBar from "../../components/SearchBar";
import BookSection from "../../components/BookSection";

export default function Library() {
  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <SearchBar />
      <BookSection title="Trending Now" />
      <BookSection title="Recently Added" />
      <BookSection title="Popular in Your Network" />
    </ScrollView>
  );
}
