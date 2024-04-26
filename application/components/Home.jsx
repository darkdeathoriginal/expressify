import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import GradientBackground from "./GradientBackground";



const options = [
  {
    title: "Expressify",
    imagePath: require("../assets/icons/expressify.png"),
    path:"/expressify"
  },
  {
    title: "Signify",
    imagePath: require("../assets/icons/signify.png"),
    path:"/signify"
  },
  {
    title: "Resources",
    imagePath: require("../assets/icons/resources.png"),
    path:"/resources"
  },
];

export default function Home() {
  const [fontsLoaded] = useFonts({
    'Planquin-Black': require('../assets/fonts/Palanquin_Dark/PalanquinDark-Regular.ttf'),
    'Planquin-Bold': require('../assets/fonts/Palanquin_Dark/PalanquinDark-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <GradientBackground styles={styles.container}>
      <View style={styles.innerContainer}>
        <View style= {styles.aboutContainer}>
          <Text style={styles.heading2}>Nexus</Text>
          <Image source={require("../assets/icons/gear.png")} style={styles.gear} />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.heading}>Welcome</Text>
          <View style={styles.group}>
            {options.map((option) => (
              <View style={styles.optionsContainer} key={option.title}>
                <Image source={option.imagePath} style={styles.image} />
                <Link href={option.path}>
                <View style={styles.optionTitleContainer}>
                  <View style={styles.rectangle}>
                    <Text style={styles.text}>{option.title}</Text>
                  </View>
                </View>
                </Link>
              </View>
            ))}
          </View>
        </View>
      </View>
      <Image
        source={require("../assets/robot.png")}
        style={styles.robot}
        resizeMode="contain"
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "right",
    height: "100%",
    width: "100%",
    top:100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    fontFamily: "Planquin-Black",
  },
  rectangle: {
    backgroundColor: "#343341",
    width: 250,
    height: "contain",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Planquin-Black",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: -20,
  },
  image: {
    height: 70, // specify your desired height
    width: 70, // specify your desired width
    borderRadius: 50, // to make it round, set borderRadius to half of the height (or width)
    overflow: "hidden", // necessary to make borderRadius work
    zIndex: 10,
  },
  optionTitleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  robot: {
    position: "absolute",
    bottom: -10,
    right: 20,
    width: 140,
  },
  heading:{
    fontSize: 50,
    fontWeight: "700",
    color: "#000",
  },
  heading2:{
    fontSize: 30,
    fontFamily: "Planquin-Black",
    color: "#000",
  },
  aboutContainer:{
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginRight: 50,
    gap: 10,
  },
  gear: {
    height: 40,
    width: 40, 
    borderRadius: 50, 
    overflow: "hidden",
    zIndex: 10,
  },
  welcomeContainer:{
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  }
});
