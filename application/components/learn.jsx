import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { useState } from "react";
import { Audio } from "expo-av";
const googleTTS = require("google-tts-api");

export default function Learn() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <AbhayaText style={styles.title}>Learn by Yourself</AbhayaText>
      </View>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Enter text"
        />
      </View>
      <View>
      <Image
            source={require("../assets/old.png")}
            style={{
              height: 200,
              marginTop: 20,
            }}
            resizeMode="contain"
          />
      </View>
      <View>
        <TouchableOpacity
          onPress={async () => {
            if (text.length == 0) {
              return alert("Please enter a text");
            }

            const url = await googleTTS.getAudioUrl(text, {
              lang: "en",
              slow: false,
            });
            console.log(url);
            const { sound: playbackObject } = await Audio.Sound.createAsync(
              { uri: url },
              { shouldPlay: true }
            );
            await playbackObject.playAsync();
          }}
        >
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7E5FF",
  },
  title: {
    fontSize: 30,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
