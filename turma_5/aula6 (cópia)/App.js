import './src/config/firebase.js'
import { RootSiblingParent } from 'react-native-root-siblings';
import Login from './src/pages/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Rotas';

export default function App() {

  return (
    <NavigationContainer>
      <RootSiblingParent>      
          <Routes/>
      </RootSiblingParent>
    </NavigationContainer>

  );
}


