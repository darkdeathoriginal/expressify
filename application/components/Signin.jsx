import { Image, StyleSheet, Text, View } from "react-native";

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>
      <View style={styles.aboveCircles}>
        <View style={styles.nav}>
          <Image
            source={require("../assets/icons/left-arrow.png")}
            style={{ height: 20 }}
            resizeMode="contain"
          />
          <View style={styles.navSide}>
          <Text style={styles.navText}>Expressify</Text>
          <Image
            source={require("../assets/icons/message.png")}
            style={{ height: 20,marginTop:4 }}
            resizeMode="contain"
          />
          </View>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Hi! Welcome</Text>
          <Text style={styles.welcomeDesc}>Please enter your details </Text>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    height: "100%",
    width: "100%",
    fontFamily: "Planquin-Black",
    backgroundColor: "#D7E5FF",
  },
  circle: {
    width: 398,
    height: 398,
    borderRadius: 500 / 2,
    backgroundColor: "#9BBEFD",
    position: "absolute",
    top: -292,
    left: -163,
    zIndex: 5,
  },
  circle2: {
    width: 700,
    height: 700,
    borderRadius: 1000,
    backgroundColor: "#367CFED9",
    position: "absolute",
    top: -459,
    left: -200,
    zIndex: 3,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    alignItems: "center",
    marginTop: 30,
  },
  navText: {
    fontFamily: "",
    color: "#fff",
    fontSize: 29,
  },
  navSide:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin:0,
    gap: -20,
  },
  welcomeTitle: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
    marginTop:10
  },
  welcomeDesc: {
    fontSize: 20,
    color: "#fff",
  },
  aboveCircles:{
    zIndex:100
  },
  welcomeContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
});
