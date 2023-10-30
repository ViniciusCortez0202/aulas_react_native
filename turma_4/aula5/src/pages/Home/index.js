import React from 'react';
import { Text, View } from 'react-native';
import {getAuth, signOut} from 'firebase/auth'
import { Button } from 'react-native-paper';

export default function Home({navigation}) {
 return (
   <View>
    <Text style={{fontSize: 32}}>Home</Text>
    <Button onPress={async () => {
        const auth = getAuth();
        console.log(auth);
        await signOut(auth)
        navigation.pop();
    }}>Sair</Button>
   </View>
  );
}