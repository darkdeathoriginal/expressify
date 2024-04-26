import { Text } from "react-native";

export default function AbhayaText({ children,type="800ExtraBold",...props }) {
  return <Text style={{fontFamily:`AbhayaLibre_${type}`,...props.style}} >{children}</Text>;
}   