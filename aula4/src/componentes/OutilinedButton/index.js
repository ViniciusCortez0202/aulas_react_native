import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { style } from './style';

export default function OutilinedButton(propriedades) {
    
    if(propriedades.onPress === null || propriedades.onPress === undefined){
        throw "OnPress é obrigatorio em OutlinedButton";
    }

    if(propriedades.titulo === null || propriedades.titulo === undefined){
        throw "Titulo é obrigatorio em OutlinedButton";
    }
    
    return (
        <Pressable
        style={[style.botao, propriedades.style]}
        onPress={propriedades.onPress}>
            <Text style={style.titulo}>
                {propriedades.titulo}</Text>
        </Pressable>
    );
}