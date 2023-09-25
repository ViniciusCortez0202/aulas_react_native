import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Home from './src/pages/home';

export default function App() {
  return (
    <PaperProvider>
      <Home/>
    </PaperProvider>
  );
}
