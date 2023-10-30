import 'react-native-gesture-handler';
import './config/firebase.js'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/routes';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StackRoute />
      </PaperProvider>
    </NavigationContainer>
  );
}
