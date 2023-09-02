import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View } from 'react-native';
import Course from '../pages/course';
import Class from '../pages/class';
import { getAuth, signOut } from 'firebase/auth';
import { IconButton, Menu, Text, ThemeProvider } from 'react-native-paper';
import { customHeaderTitle } from '../utils/customComponents';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tabs = createBottomTabNavigator();


export default function TabsRoute() {

  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Tabs.Navigator
      screenOptions={{        
        tabBarStyle: {
          height: 55
        }
      }}
    >
      <Tabs.Screen
      options={{
        headerRight: ({ props }) => {
          return <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<IconButton {...props} icon={"dots-vertical"} onPress={openMenu} />}
          >
            <Menu.Item onPress={() => {
              signOut (getAuth());
              closeMenu()
            }} title="Sair" />
          </Menu>
        },
        headerTitle: () => customHeaderTitle("Turmas"),
        tabBarLabel: "Turmas",
        tabBarIcon: ({focused}) => <MaterialIcons name="class" size={32} 
        color={focused ? "#4E97D1" : "#808080"}/>,
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '600'
        }
      }} name="class" component={Class} />
      <Tabs.Screen  options={{
        headerTitle: () => customHeaderTitle("Cursos"),
        tabBarLabel: "Cursos",
        tabBarIcon: ({focused}) => <MaterialIcons name="school" size={32} 
        color={focused ? "#4E97D1" : "#808080"}/>,
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '600'
        }
      }} name="course" component={Course} />
    </Tabs.Navigator>
  );
}