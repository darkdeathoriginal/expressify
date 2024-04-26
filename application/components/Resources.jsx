import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AbhayaText from "./AbhayaText";
import { Link, router } from "expo-router";

export default function Resources() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#3B89FD", "#003CD8"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0, 1]}
    >
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Image
            source={require("../assets/icons/connectleft.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View></View>
      </View>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/icons/expressify.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <AbhayaText style={styles.headerText}>Resources</AbhayaText>
      </View>
      <View style={styles.optionContainer}>
        <Link href={"/resources/practice"}>
          <View style={styles.rectangle}>
            <AbhayaText style={styles.optionsText}>Practice</AbhayaText>
          </View>
        </Link>
        <Link href={"/resources/connect"}>
          <View style={styles.rectangle}>
            <AbhayaText style={styles.optionsText}>Connect</AbhayaText>
          </View>
        </Link>
        <Link href={"/resources/events"}>
          <View style={styles.rectangle}>
            <AbhayaText style={styles.optionsText}>Events</AbhayaText>
          </View>
        </Link>
      </View>
      <View></View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "col",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 10,
  },
  headerText: {
    fontSize: 50,
  },
  optionContainer: {
    display: "flex",
    flexDirection: "col",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  rectangle: {
    backgroundColor: "white",
    width: 250,
    height: "contain",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  optionsText: {
    fontSize: 30,
    color: "#000",
  },
  gif: {
    width: 400,
    opacity: 0.5,
    bottom: 0,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 0,
    paddingHorizontal: 10,
  },
  icon: {
    height: 30,
    width: 30,
    zIndex: 10,
  },
});
