import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateCurrentUser } from 'firebase/auth';
import './config/firebase.js'
import { useAuthentication } from './src/rotas/auth.js';


export default function App() {

  const [estado, setEstado] = useState({
    email: "",
    senha: ""
  })

  const useAuth = useAuthentication();

  const auth = getAuth()

  return (
    <View style={styles.container}>

      <TextInput value={estado.email} onChangeText={(value) => {
        setEstado({ ...estado, email: value })
      }} placeholder='Email' style={{
        borderWidth: 1,
        borderColor: '#000', height: 40, width: 200, margin: 5, padding: 3
      }} />
      <TextInput value={estado.senha} onChangeText={(value) => {
        setEstado({ ...estado, senha: value })
      }} placeholder='Senha' style={{
        borderWidth: 1,
        borderColor: '#000', height: 40, width: 200, margin: 5, padding: 3
      }} />

      <Button title="Criar usuario" onPress={async () => {

        try {
          await createUserWithEmailAndPassword(auth, estado.email, estado.senha)
          console.log("Usuario criado")
        } catch (error) {
          console.log(error)
        }

      }} />
      <Button title="login" onPress={async () => {
        try {
          await signInWithEmailAndPassword(auth, estado.email, estado.senha)
          console.log(useAuth)
        } catch (error) {
          console.log(error)
        }
      }} />
      <Button title="Sair" onPress={() => {
        try {
          signOut(auth)
          console.log("Usuario saiu")
          console.log(useAuth)
        } catch (error) {
          console.log(error)
        }
      }} />
      <StatusBar style="auto" />
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
});
