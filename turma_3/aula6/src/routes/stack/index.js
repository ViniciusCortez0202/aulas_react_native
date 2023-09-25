import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Pagina1 from '../../pagina1';
import Pagina2 from '../../pagina2';
import Pagina3 from '../../pagina3';
import Material from '@expo/vector-icons/MaterialIcons'

const Stack = createStackNavigator()

export default function StackRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                //header: () => <Text style={{fontSize: 20, marginTop: 50}}>Home</Text>                
        }}  name="pagina1" component={Pagina1}/>
            <Stack.Screen name="pagina2" 
            component={Pagina2} 
            options={({ navigation, route }) => ({
                headerLeft: (props) => 
                <Material style={{marginLeft: 10}} name='arrow-back-ios' size={30} onPress={() => {
                    navigation.goBack();
                }}/>
            })}/>
            <Stack.Screen name="pagina3" component={Pagina3} />
        </Stack.Navigator>
    );
}