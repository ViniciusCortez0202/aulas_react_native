import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'react-native';
import { StyleSheet, View } from 'react-native';

export default function Home({navigation}) {
  const auth = getAuth();
 return (
   <View style={style.container}>
      <Button title="Sair" onPress={() => {
        signOut(auth)
        navigation.goBack()
      }}/>
   </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})