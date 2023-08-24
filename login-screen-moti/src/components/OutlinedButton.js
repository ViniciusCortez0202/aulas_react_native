import React from "react";
import styled from "styled-components/native";

const Button = styled.Pressable`
    height: 50px;
    width: 300px;
    border-width: 1px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-vertical: 10px;
    border-color: ${props => props.color};
`
const Title = styled.Text`
    font-size: 15px;
    color: ${props => props.color};
    text-align: center;
`


const OutlinedButton = ({text, color, onPress}) => {
    return (
        <Button color={color} onPress={onPress}>
            <Title color={color}>{text}</Title>
        </Button>
    )
}

export default OutlinedButton;