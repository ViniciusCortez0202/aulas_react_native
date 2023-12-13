import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';

//https://reactnative.dev/img/tiny_logo.png' 
export default function App() {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: ""
  });

  const schema = yup.object({
    email: yup.string()
      .email("Email inválido")
      .required("Email não pode ser vazio"),
    senha: yup.string()
      .min(6, "A senha tem de ter no mínimo 6 caracteres")
      .required("Senha não pode ser vazio")
  })

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          value={usuario.email}
          onChangeText={(value) => {
            setUsuario({ ...usuario, email: value })
          }} />

        <TextInput style={styles.input}
          placeholder='Senha'
          secureTextEntry
          value={usuario.senha}
          onChangeText={(value) => {
            setUsuario({ ...usuario, senha: value })
          }}
        />

        <TouchableOpacity style={styles.login}
          activeOpacity={0.6}
          onPress={async () => {

            try {
              await schema.validate(usuario)
            } catch (error) {
              Toast.show(error.message, {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP
              })
            }

          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </RootSiblingParent>
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
    borderWidth: 1.5,
    height: 50,
    width: 300,
    fontSize: 20,
    padding: 10,
    borderRadius: 15,
    marginBottom: 15
  },
  loginText: {
    fontSize: 22,
    fontWeight: '700'
  },
  login: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30
  }
});
