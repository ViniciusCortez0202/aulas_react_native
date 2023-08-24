import { StyleSheet, Text, View } from 'react-native';
import { MotiImage, MotiView } from 'moti';
import LoginForm from './components/LoginForm';
import image from '../../../assets/IFAL.png';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthentication } from '../../routes/Auth';

export default function Login({ navigation }) {
  const { user } = useAuthentication();

  async function login({email, password}) {
    try {    
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('home');

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <MotiImage
        source={image}
        style={{ height: 150, width: '90%' }}
        from={{
          opacity: 0,
          translateY: -100
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          duration: 3000,
          type: "timing"
        }}
      >

      </MotiImage>
      <MotiView
        from={{
          scale: 0.3,
          opacity: 0.3
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 3000,
          delay: 1000,
          type: "timing"
        }}
      >
        <LoginForm loginOnPress={login}
          signinOnPress={() => {
            navigation.navigate('signin')
          }} />
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
