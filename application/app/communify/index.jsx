import { StyleSheet, Text, View } from "react-native";
import GradientBackground from "../../components/GradientBackground";
import Expressify from "../../components/Expressify";

export default function Index() {
  return (
    <GradientBackground styles={styles.container}>
      <Expressify />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        fontFamily: "Planquin-Black",
      },
})
