import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import StackRoute from './src/routes/stack';

export default function App() {
  //StatusBar.setHidden(true);
  return (
   <NavigationContainer>
      <StackRoute/>
   </NavigationContainer>
  );
}
