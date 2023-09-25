import './config/firebase';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRoute from './src/routes/StackRoute';
import { PaperProvider } from 'react-native-paper';
import { RootSiblingParent } from 'react-native-root-siblings';


export default function App() {
  return (
    <RootSiblingParent>
      <PaperProvider>
        <NavigationContainer>
          <StackRoute />
        </NavigationContainer>
      </PaperProvider>
    </RootSiblingParent>
  )
}