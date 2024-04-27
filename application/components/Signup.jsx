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
import { FIREBASE_AUTH } from "../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const auth = FIREBASE_AUTH;
  const signUp = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        alert("Signup in successful");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Signup in failed" + error.message);
      });
  };
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
            Hi! Welcome
          </AbhayaText>
          <AbhayaText style={styles.welcomeDesc}>
            Please enter your details{" "}
          </AbhayaText>
        </View>
        <SafeAreaView>
          <View style={styles.inputContainer}>
          <AbhayaText style={styles.signinText}>Sign Up</AbhayaText>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholder="Name"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Your Email"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -25,
              }}
            >
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
                style={{ marginLeft: -50 }}
                onPress={() => setShowPassword(!showPassword)}
              />
            </View>
          </View>
        </SafeAreaView>
        {/* <ExternalLink href="https:google.com">test</ExternalLink> */}
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={styles.signinSection}>
            <TouchableOpacity onPress={signUp}>
              <Image
                source={require("../assets/icons/signin-button.png")}
                style={{ height: 60, marginRight: -0 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupContainer}>
          <AbhayaText>Have an account?</AbhayaText>
          <Link href="/signin">
            <AbhayaText>Sign in</AbhayaText>
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
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
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
    marginTop: 20,
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
