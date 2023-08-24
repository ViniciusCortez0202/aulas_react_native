import React from "react";
import styled from "styled-components/native";

const CustomInput = styled.TextInput.attrs(props => ({
    selectionColor: "#373737",
}))`
    height: 50px;
    width: 350px;
    border-width: 1px;
    border-radius: 10px;
    border-color: #808080;
    background-color: #f9f9f9;
    margin-vertical: 10px;
    font-size: 18px;
    padding: 10px;
`

export default CustomInput;