import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ExternalLink } from "./ExternalLink";
import { Link, router } from "expo-router";
import AbhayaText from "./AbhayaText";

export default function Signin() {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}></View>
      <View style={styles.aboveCircles}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Image
              source={require("../assets/icons/left-arrow.png")}
              style={{ height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.navSide}>
            <AbhayaText style={styles.navText}>Expressify</AbhayaText>
            <Image
              source={require("../assets/icons/message.png")}
              style={{ height: 20, marginTop: 4 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.welcomeContainer}>
          <AbhayaText style={styles.welcomeTitle} type={"800ExtraBold"}>
          Oh, no ! I{"\n"} forgot 
          </AbhayaText>
        </View>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Your Email"
            />
            <Link href="/forgot-password">
              <AbhayaText style={{
                fontSize: 30,
              }}>Forgot password</AbhayaText>
            </Link>
          </View>
        </SafeAreaView>
        {/* <ExternalLink href="https:google.com">test</ExternalLink> */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={styles.signinSection}>
            <AbhayaText style={styles.signinText}></AbhayaText>
            <TouchableOpacity>
              <Image
                source={require("../assets/icons/signin-button.png")}
                style={{ height: 60, marginRight: -100 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupContainer}>
          <AbhayaText>Don't have an account?</AbhayaText>
          <Link href="/signup">
            <AbhayaText>Sign up</AbhayaText>
          </Link>
        </View>
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
  circle3: {
    width: 300,
    height: 300,
    borderRadius: 1000,
    backgroundColor: "#B0CBFF",
    position: "absolute",
    top: -29,
    left: 300,
    zIndex: 1,
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
    color: "#fff",
    fontSize: 29,
  },
  navSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    gap: -20,
  },
  welcomeTitle: {
    fontSize: 40,
    color: "#fff",
    marginTop: 10,
  },
  welcomeDesc: {
    fontSize: 20,
    color: "#fff",
  },
  aboveCircles: {
    zIndex: 100,
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    marginTop:10
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  signinSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "between",
    alignItems: "center",
    gap: 130,
    margin: 0,
    marginTop: 70,
  },
  signinText: {
    fontSize: 30,
  },
  signupContainer: {
    display: "flex",
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
