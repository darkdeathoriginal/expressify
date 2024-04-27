import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { router } from "expo-router";
export default function Signify() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Image
            source={require("../assets/icons/communify_back.png")}
            style={{ height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <AbhayaText style={styles.navText}>Signify</AbhayaText>
      </View>
      <View style={styles.footer}>
      <Image
            source={require("../assets/camera.png")}
            style={{ height: 100 }}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/sig.png")}
            style={{ height: 100 }}
            resizeMode="contain"
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7E5FF",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 70,
  },
  navText: {
    fontSize: 35,
    marginLeft: 10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 70,
  },
});
