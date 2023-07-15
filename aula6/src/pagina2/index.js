import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';
import { style } from './style';

export default function Pagina2({ navigation }) {
  return (
    <View style={style.container}>
      <Pressable onPress={() => {
        navigation.navigate("pagina3")
      }}>
        <Text style={style.texto}>Pagina 2</Text>
      </Pressable>
    </View>
  );
}