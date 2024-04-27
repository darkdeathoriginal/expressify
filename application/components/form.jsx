import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
const speechOptions = [
  "I don’t use words or speech",
  "I use Yes/No signals to communicate",
  "I understand but can't speak",
  "My speech is partially understood by others",
  "I have fluent verbal communication",
];
export default function Form() {
  const [dropdown, setDropdown] = useState(false);
  const [selectedSpeech, setSelectedSpeech] = useState("");
  const [state, setState] = useState("age");
  const onAgeSelect = () => {
    console.log("Age selected");
    AsyncStorage.setItem("age", "8-12 years");
    setState("speech");
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressLine}></View>
        <View style={styles.progressDotContainer}>
          <View
            style={[
              styles.progressDot,
              { backgroundColor: state == "age" ? "white" : "#887E7E" },
            ]}
          ></View>
          <View
            style={[
              styles.progressDot,
              { backgroundColor: state == "speech" ? "white" : "#887E7E" },
            ]}
          ></View>
          <View style={styles.progressDot}></View>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/old.png")}
          style={{ height: 150 }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AbhayaText style={styles.title}>{state=="age"?"Pick your age":"Speech level"}</AbhayaText>
        <AbhayaText style={styles.desc}>
         { state=="age"?"This will help us personalize your\n experience":"Please select your  speech level"}
        </AbhayaText>
      </View>

      {state == "age" && (
        <View style={{ gap: -24 }}>
          <TouchableOpacity
            onPress={() => {
              setDropdown(!dropdown);
            }}
          >
            <View style={styles.selectBox}>
              <AbhayaText>Select age</AbhayaText>
              {dropdown ? (
                <Image
                  source={require("../assets/arrowup.png")}
                  style={{ height: 10 }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../assets/arrowdown.png")}
                  style={{ height: 10 }}
                  resizeMode="contain"
                />
              )}
            </View>
          </TouchableOpacity>
          {dropdown && (
            <View style={styles.selectBox2}>
              <TouchableOpacity onPress={onAgeSelect}>
                <AbhayaText>8-12 years</AbhayaText>
              </TouchableOpacity>
              <TouchableOpacity>
                <AbhayaText>13-17 years</AbhayaText>
              </TouchableOpacity>
              <TouchableOpacity>
                <AbhayaText>18+ years</AbhayaText>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      {state == "speech" && (
        <View>
          <View>
            {speechOptions.map((option) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    AsyncStorage.setItem("speech", option);
                    setSelectedSpeech(option);
                  }}
                  key={option}
                >
                  <View style={styles.speechContainer}>
                    <View
                      style={[
                        styles.speechDot,
                        {
                          backgroundColor:
                            selectedSpeech == option ? "white" : "#887E7E",
                        },
                      ]}
                    ></View>
                    <AbhayaText>{option}</AbhayaText>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          router.push("/");
        }}
      >
        <View style={styles.buttonContainer}>
          <View>
            <AbhayaText
              style={{
                fontSize: 20,
              }}
            >
              Continue
            </AbhayaText>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <View style={styles.gobackContainer}>
          <Image
            source={require("../assets/goback.png")}
            style={{ height: 10 }}
            resizeMode="contain"
          />
          <AbhayaText>Go back</AbhayaText>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#D7E5FF",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 0,
    height: "100%",
  },
  progressContainer: {
    display: "flex",
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginTop: 30,
  },
  progressLine: {
    width: "70%",
    height: 1,
    backgroundColor: "#887E7E",
  },
  progressDotContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    marginTop: -10,
  },
  progressDot: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#887E7E",
  },
  title: {
    fontSize: 29,
  },
  selectBox: {
    padding: 10,
    borderRadius: 5,
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  selectBox2: {
    padding: 10,
    borderRadius: 5,
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 1,
    borderTopWidth: 0,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    marginTop: 20,
    display: "flex",
    flexDirection: "col",
    gap: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: 150,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  gobackContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  speechContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  speechDot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#887E7E",
  },
});
