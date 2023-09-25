import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './style';
import HomeIcon from './homeIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.content]}>
        <Text style={styles.title}>Olá mundo</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.box1}>
          <Text>Box1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box2</Text>
        </View>
      </View>
      <View style={styles.content}>
       <HomeIcon size={20}/>
       <HomeIcon/>
       <HomeIcon/>
      </View>
    </View>
  );
}
