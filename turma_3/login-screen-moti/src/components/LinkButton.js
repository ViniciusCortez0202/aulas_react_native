import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Button = styled.Text`
    font-size: 16px;
    text-decoration: underline;
    color: #299626;
    margin-vertical: 5px;
`

const LinkButton = ({text, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Button>{text}</Button>
        </TouchableOpacity>
    )
}

export default LinkButton;