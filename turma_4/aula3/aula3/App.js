import { StatusBar } from 'expo-status-bar';
import {
  Button, Pressable, StyleSheet, Text,
  TouchableHighlight, TouchableOpacity, View
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

export default function App() {

  const lab = "React Native"
  const show = false


  /*if(show){
    return <Text style={{fontSize: 32}}>Somente texto</Text>
  }*/

  /* return (
     <View style={styles.container}>
       <Button 
       onPress={() => {
         console.log("LAAP")
       }}
       color={"#FF0000"}
       disabled={show}
       title='Clique'
       />
     </View>
   );*/

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 15,
          margin: 10
        }}
        onPress={() => {
          console.log("LAAP")
        }}>
        <Text style={styles.texto}>I'm pressable!</Text>
      </Pressable>

      <TouchableHighlight
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 15,
          margin: 10
        }}
        underlayColor={"#FF0000"}
        activeOpacity={0.2}
        onPress={() => {
          console.log("LAAP")
        }}>
        <Text style={styles.texto}>I'm pressable!</Text>
      </TouchableHighlight>


      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          padding: 10,
          borderRadius: 15,
          margin: 10
        }}
        activeOpacity={0.6}
        onPress={() => {
          console.log("LAAP")
        }}>
        <Text style={styles.texto}>I'm pressable!</Text>
      </TouchableOpacity>

      <Ionicons name="home" size={32} onLongPress={() => console.log("Home")}/>

      <MaterialIcons name='phone' color={'green'} size={32} onPress={() => console.log("Add")}/>

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
  texto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  }
});
