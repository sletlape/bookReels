import { Text, View, TextInput, Pressable } from "react-native";
import { useAuth } from "../context/AuthContext";
import { router } from "expo-router";
import { useState } from "react";

export default function Signup() {
  const { login } = useAuth(); // Simulate login on signup for now
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-2xl font-bold text-white mb-8">Sign Up</Text>
      <TextInput
        className="w-4/5 bg-gray-800 text-white rounded-lg p-4 mb-4"
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        className="w-4/5 bg-gray-800 text-white rounded-lg p-4 mb-4"
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        className="w-4/G bg-gray-800 text-white rounded-lg p-4 mb-8"
        placeholder="Confirm Password"
        placeholderTextColor="#9CA3AF"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Pressable
        className="w-4/5 bg-teal-500 rounded-lg p-4"
        onPress={() => login()}
      >
        <Text className="text-white text-center font-bold">Sign Up</Text>
      </Pressable>
      <Pressable
        className="mt-4"
        onPress={() => router.push("/(auth)/login")}
      >
        <Text className="text-white">Already have an account? Log in</Text>
      </Pressable>
    </View>
  );
}
