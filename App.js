import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/Home';
import Cocktails from './components/Cocktails';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Home from './components/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Search' component={Search}/>
      <Tab.Screen name='Random' component={Cocktails}/>
      <Tab.Screen name='Favourites' component={Favourites}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}