import { View, ScrollView } from "react-native";
import { useState } from "react";
import SegmentedControl from "../../components/SegmentedControl";
import BookmarkItem from "../../components/BookmarkItem";

export default function Bookmarks() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <SegmentedControl
        options={["Bookmarks", "My Notes"]}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
      <ScrollView>
        {selectedIndex === 0 ? (
          <BookmarkItem
            bookTitle="The Midnight Library"
            chapterTitle="Chapter 1"
            paragraph="Between life and death there is a library, and within that library, the shelves go on forever."
          />
        ) : (
          <BookmarkItem
            bookTitle="The Midnight Library"
            chapterTitle="Chapter 1"
            paragraph="This is a personal note."
          />
        )}
      </ScrollView>
    </View>
  );
}
