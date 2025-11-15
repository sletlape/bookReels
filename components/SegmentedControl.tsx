import { View, Pressable, Text } from "react-native";

type SegmentedControlProps = {
  options: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export default function SegmentedControl({
  options,
  selectedIndex,
  onSelect,
}: SegmentedControlProps) {
  return (
    <View className="flex-row bg-gray-800 rounded-lg p-1">
      {options.map((option, index) => (
        <Pressable
          key={option}
          className={`flex-1 p-2 rounded-lg ${
            selectedIndex === index ? "bg-teal-500" : ""
          }`}
          onPress={() => onSelect(index)}
        >
          <Text
            className={`text-center font-bold ${
              selectedIndex === index ? "text-white" : "text-gray-400"
            }`}
          >
            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
