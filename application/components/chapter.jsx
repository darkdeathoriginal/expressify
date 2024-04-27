import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { router } from "expo-router";
import { useState } from "react";
const googleTTS = require("google-tts-api");
import { Audio } from "expo-av";

const options = [
  {
    name: "Axe",
    imagePath: require("../assets/axe.png"),
  },
  {
    name: "Bike",
    imagePath: require("../assets/bike.png"),
  },
  {
    name: "Cat",
    imagePath: require("../assets/cat.png"),
  },
];
export default function Module() {
  const [selected, setSelected] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={[styles.circle, { top: undefined, bottom: -500 }]}></View>
      <View style={styles.nav}>
        <AbhayaText style={styles.title}>Chapter</AbhayaText>
        <AbhayaText
          style={{
            color: "white",
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          1
        </AbhayaText>
      </View>
      <View style={styles.cardContainer}>
        {(!selected || selected == "axe") && (
          <TouchableOpacity
            onPress={() => {
              setSelected("axe");
              if (selected == "axe") {
                setSelected(null);
              }
            }}
          >
            <Image
              source={require("../assets/axe.png")}
              style={styles.card}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {(!selected || selected == "bike") && (
          <TouchableOpacity
            onPress={() => {
              setSelected("bike");
              if (selected == "bike") {
                setSelected(null);
              }
            }}
          >
            <Image
              source={require("../assets/bike.png")}
              style={styles.card}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {(!selected || selected == "cat") && (
          <TouchableOpacity
            onPress={() => {
              setSelected("cat");
              if (selected == "cat") {
                setSelected(null);
              }
            }}
          >
            <Image
              source={require("../assets/cat.png")}
              style={styles.card}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {selected && (
        <View
          style={{
            display: "flex",
            direction: "col",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AbhayaText
            style={{
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {selected}
          </AbhayaText>
          <TouchableOpacity onPress={async()=>{
            const url = await googleTTS.getAudioUrl(selected, {
                lang: 'en',
                slow: false,
              });
              console.log(url);
              const { sound: playbackObject } = await Audio.Sound.createAsync(
                { uri: url },
                { shouldPlay: true }
              );
                await playbackObject.playAsync();
              
          }}>
            <Image
              source={require("../assets/alert.png")}
              style={{
                height: 50,
                marginTop: 20,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
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
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    gap: 10,
    marginTop: 190,
  },
  card: {
    height: 120,
    borderRadius: 10,
  },
  nav: {
    display: "flex",
    flexDirection: "col",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    alignItems: "center",
    marginTop: 30,
  },
});
