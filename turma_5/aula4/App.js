import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRef, useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>

      <Text style={styles.number}>{contador}</Text>
  
        <MaterialIcons
          name='add'
          size={38}
          onPress={() => {
            setContador(contador+1)             
          }}
          style={styles.add}
          color={"#fff"}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 48
  },
  add: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 50,
    position: "absolute",
    right: 15,
    bottom: 15
  }
});
