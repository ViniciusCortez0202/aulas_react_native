import { Button, StyleSheet, View } from 'react-native';
import {getAuth, signOut} from 'firebase/auth';

export default function Home({navigation}) {
  const auth = getAuth();
 return (
   <View style={styles.container}>
      <Button title="sair" onPress={() => {
        signOut(auth);
        navigation.goBack()
      }}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})