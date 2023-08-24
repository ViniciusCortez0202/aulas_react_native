import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../../components/Input';
import OutlinedButton from '../../components/OutlinedButton';
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';


export default function Signin({ navigation }) {

    const [newUser, setNewUser] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const clearFieldBeforeOut = () => {
        setNewUser({
            name: '',
            email: '',
            password: ''
        });
    }

    return (
        <View style={styles.container}>
            <View>
                <CustomInput placeholder={"Nome"} value={newUser.name} onChangeText={(value) => setNewUser({...newUser, name: value})} />
                <CustomInput placeholder={"Email"} value={newUser.email} keyboardType={'email-address'} onChangeText={(value) => setNewUser({...newUser, email: value})} />
                <CustomInput placeholder={"Senha"} value={newUser.password} secureTextEntry={true} onChangeText={(value) => setNewUser({...newUser, password: value})} />
            </View>
            <OutlinedButton text={"Cadastrar-se"} color={"#299626"} onPress={async () => {
                const auth = getAuth();
                try {
                    
                    const currentUser = auth.currentUser;
                    await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
    
                    await updateProfile(currentUser, { displayName: newUser.name });

                    /*firestore.setDoc()
                    .doc(currentUser.uid)
                    .set({
                        email: currentUser.email,
                        nome: newUser.name
                    })*/
                    
                    clearFieldBeforeOut();

                    navigation.navigate('home');

                } catch (error) {
                    
                } finally {
                }
            }} />
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
