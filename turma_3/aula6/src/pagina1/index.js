import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { style } from './style';

export default function Pagina1({ navigation }) {
  return (
    <View style={style.container}>
      <Pressable onPress={() => {
          navigation.navigate("pagina2")
      }}>
        <Text style={style.texto}>Pagina 1</Text>
      </Pressable>

    </View>
  );
}