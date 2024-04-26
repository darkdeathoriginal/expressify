import { StyleSheet, Text, View } from "react-native";
import Communify from "../../components/Communify";

export default function Index() {
  return (
      <Communify />
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
