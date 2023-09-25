import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../pages/login/Login';
import Signin from '../pages/signin/Signin';
import { useAuthentication } from './Auth';
import TabsRoute from './Tabs';
import CreateCourse from '../pages/createCourse';
import SignInClass from '../pages/signInClass';
import { customHeaderTitle } from '../utils/customComponents';



const Stack = createStackNavigator();

export default function StackRoute() {

  const { user } = useAuthentication();


  return (
    user ? <Stack.Navigator>
      <Stack.Screen options={{
        headerShown: false
      }} name='home' component={TabsRoute} />
      <Stack.Screen name="createCourse"
      options={{
        headerTitle: () => customHeaderTitle("Criar curso")
      }}
        component={CreateCourse} />
        <Stack.Screen name="signInClass"   options={{
        headerTitle: () => customHeaderTitle("Entrar em turma")
      }} component={SignInClass}/>
    </Stack.Navigator>
      : <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name='login' component={Login} />
        <Stack.Screen name='signin' component={Signin} />
      </Stack.Navigator>
  );
}