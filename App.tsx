import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
