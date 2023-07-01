import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import Input from './src/componentes/Input';
import InputSenha from './src/componentes/InputSenha';
import OutilinedButton from './src/componentes/OutilinedButton';
import { useState } from 'react';
import * as  yup from 'yup';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';

export default function App() {

  const [usuario, setUsuario] = useState({
    email: "",
    senha: ""
  })

  const schema = yup.object({
    email: yup.string()
      .required("Email é obrigatorio")
      .email("Email inválido"),
    senha: yup.string()
      .required("Senha é obrigatoria")
      .min(6, "A senha deve ter no mínimo 6 caracteres")
  })

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Input placeholder={"Email"}
          style={{ margin: 10 }}
          inputMode={"email"}
          value={usuario.email}
          onChangeText={(value) => {
            setUsuario({
              ...usuario,
              email: value,
            });
          }} />

        <InputSenha placeholder={"Senha"}
          secureTextEntry={false}
          value={usuario.senha}
          onChangeText={(value) => {
            setUsuario({
              ...usuario,
              senha: value,
            })
          }} />

        <OutilinedButton onPress={async () => {

          try {
            await schema.validate(usuario);
            console.log(usuario);
            setUsuario({
              email: "",
              senha: ""
            });
            Keyboard.dismiss();
          } catch (error) {
            Toast.show(error.message, {
              duration: Toast.durations.LONG,
              position: Toast.positions.CENTER
            })
          }


          // if(schema.isValidSync(usuario)){
          //   console.log(usuario);
          // } else {
          //   console.log("Erro");
          // }
        }}
          titulo={"Entrar"} style={{ margin: 10 }} />
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
});
