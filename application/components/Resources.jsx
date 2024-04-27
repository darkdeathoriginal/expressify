import { Link, router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AbhayaText from "./AbhayaText";
import { FIREBASE_AUTH } from "../firebaseconfig";

const options = [
  {
    title: "Practice",
    imagePath: require("../assets/icons/practice.png"),
    path: "/resources/practice",
  },
  // {
  //   title: "Connect",
  //   imagePath: require("../assets/icons/connect.png"),
  //   path: "/resources/connect",
  // },
];

export default function Resources() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>
      <Image source={require("../assets/icons/resources.png")} style={styles.fullImage} resizeMode="contain"/>
      <View style={styles.welcomeContainer}>
        <View style={styles.titleContainer}>
          <AbhayaText style={styles.heading}>Resources</AbhayaText>
        </View>
        <View style={styles.group}>
          {options.map((option) => (
            <View style={styles.optionsContainer} key={option.title}>
              <Image source={option.imagePath} style={styles.image} resizeMode="contain"/>
              <Link href={option.path}>
                <View style={styles.optionTitleContainer}>
                  <View style={styles.rectangle}>
                    <AbhayaText style={styles.text}>{option.title}</AbhayaText>
                  </View>
                </View>
              </Link>
            </View>
          ))}
          <TouchableOpacity onPress={()=>{
            FIREBASE_AUTH.signOut()
            router.push('/signin')
          }}>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    top: -409,
    left: -200,
    zIndex: 3,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 10,
  },
  rectangle: {
    backgroundColor: "white",
    width: 300,
    height: "contain",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: -80,
  },
  optionTitleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    marginTop: -450,
  },
  heading: {
    fontSize: 50,
    color: "white",
  },
  heading2: {
    fontSize: 30,
    color: "#000",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
  welcomeContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    height: "100%",
    zIndex: 100,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    overflow: "hidden",
    marginTop: -190,
    marginLeft: 30,
  },
  fullImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 100,
    marginBottom:-150,
    zIndex: 1000,
    alignSelf: "center",
    justifyContent: "center",
  },
});
