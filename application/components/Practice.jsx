import { Image, StyleSheet, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { Link } from "expo-router";

export default function Practice() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Image
        style={styles.bgimg}
        source={require("../assets/practice_bg.png")}
        resizeMode="contain"
      ></Image>
      <View>
        <AbhayaText style={styles.title}>Explore & Learn</AbhayaText>
      </View>
      <View style={styles.card}>
        <AbhayaText
          style={{
            color: "white",
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          Dive into the path of learning in your language
        </AbhayaText>
        <Link href="/resources/practice/module">
          <View style={styles.buttonBg}>
            <AbhayaText>See Modules</AbhayaText>
          </View>
        </Link>
      </View>
      <View style={styles.card}>
        <AbhayaText
          style={{
            color: "white",
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          Learn by Yourself
        </AbhayaText>
        <Link href="/resources/practice/learn">
          <View style={styles.buttonBg}>
            <AbhayaText>Learn</AbhayaText>
          </View>
        </Link>
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
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#98B5F7",
    position: "absolute",
    top: -200,
  },
  bgimg: {
    width: "100%",
    // height: "100%",
    position: "absolute",
    bottom: -100,
  },
  title: {
    marginTop: 160,
    fontSize: 40,
    marginBottom: 120,
  },
  card: {
    backgroundColor: "#1253E3",
    width: 300,
    borderRadius: 20,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    display: "flex",
    marginBottom: 20,
  },
  buttonBg: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
