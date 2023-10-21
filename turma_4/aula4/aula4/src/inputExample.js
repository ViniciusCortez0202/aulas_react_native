import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import * as yup from 'yup'
import favicon from '../assets/favicon.png';
import { Button, PaperProvider } from 'react-native-paper';

export default function InputExample() {
    const [email, setEmail] = useState("");

  const schema = yup.object({
    email: yup.string().email("Email não valido").required("Email é requerido")
  })
 return (
   <View>


<Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} style={{ height: 50, width: 50 }} />

        {/*<Image source={favicon} />*/}

        <TextInput
          placeholder='Email'
          keyboardType='url'
          onChangeText={(value) => {
            setEmail(value)
          }}
          style={styles.input} />

        {/*<Button title='Clique' onPress={async () => {
      if(schema.isValidSync({email: email})){
        console.log("Valido")
      } else {
        console.log("Invalido")
      }

      try {
        const result = await schema.validate({ email: email })
        console.log(result)
      } catch (error) {
        ToastAndroid.show(error.message, ToastAndroid.LONG)
      }

    }} />*/}

        <Button 
        mode={"contained"}
        icon={"home"}
        style={{margin: 10}}
        onPress={async () => {
          /*if(schema.isValidSync({email: email})){
            console.log("Valido")
          } else {
            console.log("Invalido")
          }*/

          try {
            const result = await schema.validate({ email: email })
            console.log(result)
          } catch (error) {
            ToastAndroid.show(error.message, ToastAndroid.LONG)
          }
        }}>
          Clique
        </Button>

        <Text style={styles.text}></Text>
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
    input: {
      width: 250,
      height: 50,
      borderWidth: 2,
      borderRadius: 15,
      padding: 10,
      fontSize: 18
    },
    text: {
      marginTop: 15,
      fontSize: 22
    }
  });
  