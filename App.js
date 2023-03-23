import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cocktails from './components/Cocktails';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Home from './components/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarInactiveBackgroundColor:'#ffeae8',
          tabBarActiveBackgroundColor:'#ffd1cc',
          tabBarActiveTintColor:'black',
          tabBarInactiveTintColor:'black',
        }}>
        <Tab.Screen 
          name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color='black' size={26} />
          ),
        }}/>
        <Tab.Screen name='Search' component={Search}
          options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
          <MaterialCommunityIcons name="magnify" color='black' size={26} />
          ),
        }}/>
        <Tab.Screen name='Random' component={Cocktails}
          options={{
          tabBarLabel: 'Random cocktail',
          tabBarIcon: () => (
          <MaterialCommunityIcons name="dice-multiple" color='black' size={26} />
          ),
        }}/>
        <Tab.Screen name='Favourites' component={Favourites}          
          options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
          <MaterialCommunityIcons name="star-outline" color='black' size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}