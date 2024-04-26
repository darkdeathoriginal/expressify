import { StyleSheet, Text, View } from "react-native";
import GradientBackground from "../../components/GradientBackground";

export default function Expressify() {
  return (
    <GradientBackground styles={styles.container}>
      <View>
        <Text>Expressify</Text>
      </View>
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
