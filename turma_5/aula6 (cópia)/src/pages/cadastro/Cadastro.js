import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import * as yup from 'yup';
import Toast from 'react-native-root-toast';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function Cadastro({ navigation }) {

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  const schema = yup.object({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup.string()
      .email("Email inválido")
      .required("Email não pode ser vazio"),
    senha: yup.string()
      .min(6, "A senha tem de ter no mínimo 6 caracteres")
      .required("Senha não pode ser vazio")
  })

  return (
    <View style={styles.container}>

      <TextInput style={styles.input}
        placeholder='Nome'
        value={usuario.nome}
        onChangeText={(value) => {
          setUsuario({ ...usuario, nome: value })
        }} />

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

            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
            const usuarioAtual = auth.currentUser
            await updateProfile(usuarioAtual, { displayName: usuario.nome })

          } catch (error) {
            console.log(error.message)
            Toast.show(error.message, {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM
            })
          }

        }}>
        <Text style={styles.loginText}>Cadastro</Text>
      </TouchableOpacity>
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