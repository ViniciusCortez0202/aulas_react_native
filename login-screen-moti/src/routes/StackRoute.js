import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../pages/login/Login';
import Signin from '../pages/signin/Signin';
import { useAuthentication } from './Auth';
import TabsRoute from './Tabs';
import CreateCourse from '../pages/createCourse';
import SignInClass from '../pages/signInClass';



const Stack = createStackNavigator();

export default function StackRoute() {

  const { user } = useAuthentication();


  return (
    user ? <Stack.Navigator>
      <Stack.Screen options={{
        header: (prps) => <></>
      }} name='home' component={TabsRoute} />
      <Stack.Screen name="createCourse"
        component={CreateCourse} />
        <Stack.Screen name="signInClass" component={SignInClass}/>
    </Stack.Navigator>
      : <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name='login' component={Login} />
        <Stack.Screen name='signin' component={Signin} />
      </Stack.Navigator>
  );
}