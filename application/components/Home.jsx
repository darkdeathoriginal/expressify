import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const options = [
    {
      title: "Expressify",
      imagePath: require("../assets/icons/expressify.png"),
      path:"/expressify"
    },
    {
      title: "Signify",
      imagePath: require("../assets/icons/signify.png"),
      path:"/signin"
    },
    {
      title: "Resources",
      imagePath: require("../assets/icons/resources.png"),
      path:"/resources"
    },
  ];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>
      <View style={styles.welcomeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Expressify</Text>
            <Text style={{width: 300,color:"white"
            }}>Concentrate on the abilities your disability doesn't hinder and don't dwell on the things it interferes with</Text>
        </View>
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
    width: 250,
    height: "contain",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: -20,
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
    marginTop:-250
  },
  heading:{
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },
  heading2:{
    fontSize: 30,
    fontFamily: "Planquin-Black",
    color: "#000",
  },
  text: {
    fontSize: 30,
    color: "#000",
    fontFamily: "Planquin-Black",
  },
  welcomeContainer:{
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    height: "100%",
    zIndex:100,
  },
  titleContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    overflow: "hidden",
    marginTop:-100
  }
});
