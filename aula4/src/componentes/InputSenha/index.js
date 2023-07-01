import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Material from "@expo/vector-icons/MaterialIcons";
import { style } from './style';

export default function InputSenha(propriedades) {


    const [showSenha, setShowSenha]
     = useState(false);

    return (
        <View style={style.container}>
            <TextInput 
            {...propriedades}
            style={style.input}
            secureTextEntry={!showSenha}/>
            <Material name={
                showSenha ? "visibility" 
                : "visibility-off"
            }            
            onPress={() => {
                setShowSenha(!showSenha);
            }}
            size={28}/>
        </View>
    );
}