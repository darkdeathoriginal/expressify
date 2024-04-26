import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function GradientBackground({children, styles,...props}) {

    return (

    <LinearGradient
      style={styles}
      colors={["#F7DEB5", "white", "white", "#F7DEB5"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.2, 0.8, 1]}
    >
        {children}
        {/* <Text style={styles.footer}>© 2021 Nexus</Text> */}
    </LinearGradient>
    )
}