import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import Course from '../pages/course';
import Class from '../pages/class';

const Tabs = createBottomTabNavigator();


export default function TabsRoute() {
 return (
   <Tabs.Navigator>
        <Tabs.Screen name="class" component={Class}/>
        <Tabs.Screen name="course" component={Course}/>
   </Tabs.Navigator>
  );
}