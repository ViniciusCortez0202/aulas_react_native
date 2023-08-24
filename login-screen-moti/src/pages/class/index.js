import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuthentication } from '../../routes/Auth';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default function Class({ navigation }) {

  return (<View>
    <Button onPress={() => {

      signOut(getAuth())
    }}>Sair</Button>
  </View>)
}