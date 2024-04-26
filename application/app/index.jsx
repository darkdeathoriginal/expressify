import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    height: "100%",
  },
});
