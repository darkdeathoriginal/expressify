import { Text } from "react-native";
import {
    useFonts,
    AbhayaLibre_400Regular,
    AbhayaLibre_500Medium,
    AbhayaLibre_600SemiBold,
    AbhayaLibre_700Bold,
    AbhayaLibre_800ExtraBold,
  } from '@expo-google-fonts/abhaya-libre';
  
export default function AbhayaText({ children,type="400Regular",...props }) {
    let [fontsLoaded] = useFonts({
        AbhayaLibre_400Regular,
        AbhayaLibre_500Medium,
        AbhayaLibre_600SemiBold,
        AbhayaLibre_700Bold,
        AbhayaLibre_800ExtraBold,
      });
  return <Text style={[props.style,{fontFamily:`AbhayaLibre_${type}`}]} >{children}</Text>;
}   