import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default function Login({ navigation }) {
    const [user, setUser] = useState({
        email: "",
        senha: ""
    })
    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <TextInput label={"Email"}
                value={user.email}
                onChangeText={(value) => {
                    setUser({...user, email: value})
                }}
                keyboardType={"email-address"}></TextInput>
                <TextInput 
                value={user.senha}
                onChangeText={(value) => {
                    setUser({...user, senha: value})
                }}
                label={"Senha"} secureTextEntry></TextInput>
            </View>
            <Button style={styles.button} mode="contained"
            onPress={async () => {
                try {
                    const auth = getAuth();
                await signInWithEmailAndPassword(auth
                    ,user.email, user.senha);
                    navigation.navigate("home");
                } catch (error) {
                    console.log(error)
                }
                
            }}>Entrar</Button>
            <Button style={styles.button} mode="contained"
            onPress={async () => {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth
                    , user.email, user.senha);

            }}
            >Cadastro</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        height: 125,
        width: '90%',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    button: {
        width: 110,
        margin: 10
    }
});