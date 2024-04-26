import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import {
  useFonts,
  AbhayaLibre_400Regular,
  AbhayaLibre_500Medium,
  AbhayaLibre_600SemiBold,
  AbhayaLibre_700Bold,
  AbhayaLibre_800ExtraBold,
} from '@expo-google-fonts/abhaya-libre';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    AbhayaLibre_400Regular,
    AbhayaLibre_500Medium,
    AbhayaLibre_600SemiBold,
    AbhayaLibre_700Bold,
    AbhayaLibre_800ExtraBold
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="communify/index"
          options={{
            headerShown: true,
            headerTitle: "Expressify",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              color: "black",
            },
          }}
        />
        <Stack.Screen
          name="signin/index"
          options={{
            headerShown: false,
            headerTitle: "Signin",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              color: "black",
            },
          }}
        />
        <Stack.Screen
          name="signup/index"
          options={{
            headerShown: false,
            headerTitle: "Signin",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              color: "black",
            },
          }}
        />
        <Stack.Screen
          name="forgot-password/index"
          options={{
            headerShown: false,
            headerTitle: "Signin",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              color: "black",
            },
          }}
        />
      </Stack>
      
    </ThemeProvider>
  );
}
