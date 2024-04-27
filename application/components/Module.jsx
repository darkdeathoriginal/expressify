import { StyleSheet, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { router } from "expo-router";

export default function Module() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={[styles.circle, { top: undefined, bottom: -500 }]}></View>
      <View>
        <AbhayaText style={styles.title}>
          Dive into the path of learning in your language
        </AbhayaText>
      </View>
      <View style={styles.megaContainer}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => {
              router.push("/resources/practice/chapter");
            }}
          >
            <View style={styles.card}>
              <AbhayaText>Chapter</AbhayaText>
              <AbhayaText style={{ fontSize: 20 }}>1</AbhayaText>
            </View>
          </TouchableOpacity>
          <View style={styles.card}>
            <AbhayaText>Chapter</AbhayaText>
            <AbhayaText style={{ fontSize: 20 }}>2</AbhayaText>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <AbhayaText>Chapter</AbhayaText>
            <AbhayaText style={{ fontSize: 20 }}>3</AbhayaText>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "",
    height: "100%",
    width: "100%",
    backgroundColor: "#D7E5FF",
  },
  circle: {
    width: 600,
    height: 600,
    borderRadius: 10000,
    backgroundColor: "#98B5F7",
    position: "absolute",
    top: -340,
  },
  title: {
    color: "white",
    fontSize: 25,
    marginTop: 120,
    marginHorizontal: 20,
  },
  megaContainer: {
    marginTop: 150,
    gap: 20,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    gap: 20,
  },
  card: {
    width: 110,
    height: 110,
    borderRadius: 10,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderColor: "#367CFED9",
    borderWidth: 2,
    paddingVertical: 5,
  },
});
