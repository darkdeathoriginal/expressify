import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { router } from "expo-router";

export default function Communify() {
  const [recording, setRecording] = useState(null);
  const [recordingStatus, setRecordingStatus] = useState("idle");
  const [audioPermission, setAudioPermission] = useState(null);
  const [speech, setSpeech] = useState("");

  async function startRecording() {
    try {
      // needed for IoS
      if (audioPermission) {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
      }

      const newRecording = new Audio.Recording();
      console.log("Starting Recording");
      await newRecording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await newRecording.startAsync();
      setSpeech("Recording...")
      setRecording(newRecording);
      setRecordingStatus("recording");
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  }

  async function stopRecording() {
    try {
      if (recordingStatus === "recording") {
        console.log("Stopping Recording");
        setSpeech("Processing...")
        await recording.stopAndUnloadAsync();
        const recordingUri = recording.getURI();
        console.log(recordingUri);
        const audio_file =
          "data:application/octet-stream;base64," +
          (await FileSystem.readAsStringAsync(recordingUri, {
            encoding: "base64",
          }));
        const output = await fetch("https://api.replicate.com/v1/predictions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer r8_MlWq2FAlgilmneGBJBi6oqlhXdrk4M03CR7P4",
          },
          body: JSON.stringify({
            version:
              "826801120720e563620006b99e412f7ed7b991dd4477e9160473d44a405ef9d9",
            input: {
              debug: false,
              vad_onset: 0.5,
              audio_file,
              batch_size: 64,
              vad_offset: 0.363,
              diarization: false,
              temperature: 0,
              align_output: false,
              language_detection_min_prob: 0,
              language_detection_max_tries: 5,
            },
          }),
        }).then((res) => res.json());
        if (output.error) {
          setSpeech("An error occured");
        }
        const url = output.urls.get;
        let resp = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer r8_MlWq2FAlgilmneGBJBi6oqlhXdrk4M03CR7P4",
          },
        }).then((res) => res.json());
        while (!resp.error && !resp.completed_at) {
          await new Promise((resolve) => {
            setTimeout(resolve, 1000);
          });
          resp = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer r8_MlWq2FAlgilmneGBJBi6oqlhXdrk4M03CR7P4",
            },
          }).then((res) => res.json());
          console.log(resp);
        }
        if (resp.error) {
          setSpeech("An error occured");
          return;
        }
        setRecording(null);
        setRecordingStatus("stopped");
        console.log(resp.output.segments.map((e) => e.text).join(" "));
        setSpeech(resp.output.segments.map((e) => e.text).join(" "));
        return;

        // Create a file name for the recording
        const fileName = `recording-${Date.now()}.caf`;

        // Move the recording to the new directory with the new file name

        // resert our states to record again
      }
    } catch (error) {
      console.error("Failed to stop recording", error);
    }
  }

  async function handleRecordButtonPress() {
    if (recording) {
      const audioUri = await stopRecording(recording);
      if (audioUri) {
        console.log("Saved audio file to", savedUri);
      }
    } else {
      await startRecording();
    }
  }

  useEffect(() => {
    // Simply get recording permission upon first render
    async function getPermission() {
      await Audio.requestPermissionsAsync()
        .then((permission) => {
          console.log("Permission Granted: " + permission.granted);
          setAudioPermission(permission.granted);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // Call function to get permission
    getPermission();
    // Cleanup upon first render
    return () => {
      if (recording) {
        stopRecording();
      }
    };
  }, []);

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
        <AbhayaText style={styles.navText}>Communify</AbhayaText>
      </View>
      <View>
        <AbhayaText style={styles.desc}>
          Hi, speak into the microphone
        </AbhayaText>
      </View>
      <View>
        <Image
          source={require("../assets/speech.png")}
          style={{ height: 280 }}
          resizeMode="contain"
        />
      </View>
      <View>
        <AbhayaText style={styles.transcribed}>{speech}</AbhayaText>
      </View>
      <View>
        <View style={styles.footerContainer}>
          <Image
            source={require("../assets/mic_send.png")}
            style={{ height: 50 }}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={startRecording}>
            <Image
              source={require("../assets/mic_full.png")}
              style={{ height: 100 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={stopRecording}>
            <Image
              source={require("../assets/mic_cancel.png")}
              style={{ height: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D7E5FF",
    height: "100%",
    width: "100%",
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
  desc: {
    fontSize: 20,
  },
  transcribed: {
    fontSize: 20,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginBottom: 50,
    gap: -80,
  },
});
