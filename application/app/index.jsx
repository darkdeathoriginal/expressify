import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "../components/Home";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseconfig";
import Signin from "../components/Signin";

export default function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    return unsubscribe; // Cleanup function to remove listener
  }, []);
  if (!user) return <Signin />;
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    height: "100%",
  },
});
