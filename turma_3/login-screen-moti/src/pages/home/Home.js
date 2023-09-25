import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthentication } from '../../routes/Auth';
import { getAuth, signOut } from 'firebase/auth';

export default function Home({navigation}) {
  const { user } = useAuthentication();
  //console.log(user)
  const auth = getAuth();
  return (
    <View>
      <Text>{user?.displayName}</Text>
      <Button title='Sair' onPress={() => {
        signOut(auth);
        //navigation.goBack();
      }} />

    </View>
  );
}