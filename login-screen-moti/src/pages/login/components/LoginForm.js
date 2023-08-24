import React from "react";
import styled from "styled-components/native";
import CustomInput from "../../../components/Input";
import LinkButton from "../../../components/LinkButton";
import OutlinedButton from "../../../components/OutlinedButton";

const Container = styled.View`
    display: flex;
    align-items: ${props => props.align};
`

const LoginForm = ({ loginOnPress, signinOnPress }) => {
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    return (
        <Container align="center">
            <Container align="flex-end">
                <CustomInput placeholder={"Email"} keyboardType={"email-address"}
                    value={user.email}
                    onChangeText={(value) => setUser({ ...user, email: value })} />
                <CustomInput placeholder={"Senha"} secureTextEntry={true}
                    value={user.password}
                    onChangeText={(value) => setUser({ ...user, password: value })} />
                <LinkButton text="Esqueceu a senha?" onPress={() => console.log("React")} />
            </Container>
            <OutlinedButton text={"Entrar"} color={"#299626"} onPress={() => {
                loginOnPress(user)
                setUser({
                    email: '',
                    password: ''
                });
            }} />
            <LinkButton text="Cadastre-se" onPress={signinOnPress} />
        </Container>
    )
}

export default LoginForm;