import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Stack = createStackNavigator();

export default function StackRoute() {
 return (
   <Stack.Navigator screenOptions={{}} initialRouteName='login'>
        <Stack.Screen options={{
            headerShown: false
        }} name="login" component={Login}/>
        <Stack.Screen 
        options={{
            headerTitle: "Home"                       
        }}
        name="home" component={Home}/>
   </Stack.Navigator>
  );
}