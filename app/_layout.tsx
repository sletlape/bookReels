import { AuthProvider, useAuth } from "./context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    // Prevent navigation until the router is ready
    if (segments.length === 0) {
      return;
    }

    if (isAuthenticated && inAuthGroup) {
      router.replace("/(tabs)/home");
    } else if (!isAuthenticated && !inAuthGroup) {
      router.replace("/(auth)/login");
    }

    // Hide the splash screen once we've determined the initial route
    SplashScreen.hideAsync();
  }, [isAuthenticated, segments]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
