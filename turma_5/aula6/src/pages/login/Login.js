import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Pressable
} from 'react-native';
import * as yup from 'yup';
import Toast from 'react-native-root-toast';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function Login({ navigation }) {
    const auth = getAuth();
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
                        await signInWithEmailAndPassword(auth, usuario.email, usuario.senha)   
                        navigation.navigate("Home");
                    } catch (error) {
                        Toast.show(error.message, {
                            duration: Toast.durations.LONG,
                            position: Toast.positions.BOTTOM
                        })
                    }

                }}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Pressable onPress={() => {
                navigation.navigate('Cadastro');
            }} >
                <Text style={styles.cadastroText}>Cadastrar-se</Text>
            </Pressable>
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
    },
    cadastroText: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: '600',
        borderBottomWidth: 1
    }
});