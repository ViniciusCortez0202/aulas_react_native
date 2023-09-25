import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [valor, adicionarValor] = useState(0);
  const [texto, setTexto] = useState("");

  const somar = () => {
    const resultado = valor + 1
    adicionarValor(resultado);
    console.log(valor)
  }
  const zerar = () => {
    adicionarValor(0);
  }

  return (
   <View style={styles.container}>



      <TextInput style={styles.input}
      
      placeholder='Email'
      onChangeText={(value) => {
        setTexto(value)}}/>

        
    <Text style={{fontSize: 45}}>{ texto }</Text> 

    { /*<Button title='Somar + 1'
      color="green" 
      onPress={somar}/>
      <Button title='Zerar'
      color="green" 
      onPress={zerar}/>

      <Text style={{fontSize: 45}}>{ valor }</Text> 
    
    <Pressable 
      style={styles.botao}
      onPress={() => { console.log("ola mundo") }}>
        <Text style={styles.botaoTexto}>Ola mundo</Text>
      </Pressable>

      <TouchableHighlight
      underlayColor={'red'}
       onPress={() => { console.log("React native") }}>
          <Text>React Native</Text>
      </TouchableHighlight>

      <TouchableOpacity activeOpacity={0.1}
      onPress={() => { imprimir("lala") }}>
        <Text style={{fontSize: 20}} >Laap</Text>
      </TouchableOpacity>*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  botao: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 10
  },
  botaoTexto: {
    fontSize: 18,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 50,
    fontSize: 25,
    padding: 10
  }
});
