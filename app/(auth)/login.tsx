import { Text, View, TextInput, Pressable } from "react-native";
import { useAuth } from "../context/AuthContext";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-2xl font-bold text-white mb-8">Login</Text>
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
        className="w-4/5 bg-gray-800 text-white rounded-lg p-4 mb-8"
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable
        className="w-4/5 bg-teal-500 rounded-lg p-4"
        onPress={() => login()}
      >
        <Text className="text-white text-center font-bold">Login</Text>
      </Pressable>
      <Pressable
        className="mt-4"
        onPress={() => router.push("/(auth)/signup")}
      >
        <Text className="text-white">Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
}
