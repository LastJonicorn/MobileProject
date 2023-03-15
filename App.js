import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/About';
import Cocktails from './components/Cocktails';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Cocktails' component={Cocktails}/>
      <Tab.Screen name='About' component={About}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}