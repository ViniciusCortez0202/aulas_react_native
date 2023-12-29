import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/Login';
import Cadastro from '../pages/cadastro/Cadastro';
import Home from '../pages/home/home';

const Stack = createStackNavigator();

export default function Routes() {

 return (
   <Stack.Navigator>
    <Stack.Screen 
        options={{
            headerShown: false
        }}
    name="Login" component={Login}/>
    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="Home" component={Home} />
   </Stack.Navigator>
  );
}