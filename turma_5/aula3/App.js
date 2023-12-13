import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React native</Text>
      <Text style={styles.text}>React native</Text>
      <TextInput style={styles.input} placeholder='Email'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',   
    backgroundColor: '#fff',
  },
  text:{
    fontSize: 32,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    fontSize: 28,
    padding: 10,
    borderRadius: 15
  }
});
