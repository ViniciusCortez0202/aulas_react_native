import React from 'react';
import { TextInput, View } from 'react-native';
import { style } from './style';

export default function Input(propiedades) {
    return (
   <TextInput {...propiedades}
   style={[style.input, propiedades.style]}/>
  );
}