import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { router } from "expo-router";

export default function ConnectHome() {
  return (
    <View style={styles.container}>
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
      <View>
      </View>
      <View style={styles.model}>
        <View>

        </View>
          <View style={styles.navBar}>
            <View style={styles.messageCard}>
                <View></View>
                <View></View>
            </View>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BBEFD",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  circle: {
    width: 264,
    height: 264,
    borderRadius: 1000,
    backgroundColor: "transparent",
    borderWidth: 40,
    borderColor: "#D7E5FF",
    position: "absolute",
  },
  model: {
    height: "70%",
    alignSelf: "stretch",
    backgroundColor: "#F8FBFB",
    zIndex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modelText: {
    fontSize: 24,
    color: "#1E2D5A",
    marginTop: 60,
  },
  modelButton: {
    backgroundColor: "#004AD1",
    width: 250,
    height: 50,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  modelButtonText: {
    fontSize: 24,
    color: "white",
  },
  image: {
    height: 340,
    width: 340,
    zIndex: 10,
    margin: 10,
    marginTop: 70,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  icon: {
    height: 30,
    width: 30,
    zIndex: 10,
    margin: 10,
  },
  navBar: {
    height: "12%",
    alignSelf: "stretch",
    backgroundColor: "grey",
    zIndex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageCard: {
    backgroundColor: "grey",
    zIndex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
