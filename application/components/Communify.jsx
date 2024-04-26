import { Image, StyleSheet, Text, View } from "react-native";

export default function Expressify() {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.aboutContainer}>
        <Text style={styles.heading2}>Nexus</Text>
        <Image
          source={require("../assets/icons/gear.png")}
          style={styles.gear}
        />
      </View>
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../assets/icons/expressify.png")}
          style={styles.image}
        />
        <Text style={styles.heading}>Expressify</Text>
        <View style={styles.waveBox}></View>
        {/* <View style={styles.textBox}></View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "right",
    height: "100%",
    width: "100%",
    top: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    fontFamily: "Planquin-Black",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Planquin-Black",
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 1,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    color: "#000",
    zIndex: 10,
    marginTop: -40,
  },
  heading2: {
    fontSize: 30,
    fontFamily: "Planquin-Black",
    color: "#000",
  },
  aboutContainer: {
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
  welcomeContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  waveBox: {
    height: 100,
    width: 300,
    overflow: "hidden",
    backgroundColor: "transparent",
    borderColor: "#000",
    borderWidth: 2,
    marginTop: 10,
  },
//   textBox: {
//     height: 100,
//     width: 300,
//     backgroundColor: "transparent",
//     borderColor: "#F7DEB5",
//     borderWidth: 2,
//     borderRadius: 10,
//     elevation: 5,
//     marginTop: 10,
//   },
});
