import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cocktails from './components/Cocktails';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Home from './components/Home';
import { useFonts } from 'expo-font';


const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    VarelaRound : require('./assets/fonts/VarelaRound-Regular.ttf')
  });

  if(!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarInactiveBackgroundColor:'#fdb7138f',
          tabBarActiveBackgroundColor:'#FDB813',
          tabBarActiveTintColor:'black',
          tabBarInactiveTintColor:'black',
        }}>
        <Tab.Screen 
          name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          headerStyle: {
            backgroundColor: '#FFD77A'
          },
          tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color='black' size={26} />
          ),
        }}/>
        <Tab.Screen name='Search' component={Search}
          options={{
          tabBarLabel: 'Search',
          headerStyle: {
            backgroundColor: '#FFD77A'
          },
          tabBarIcon: () => (
          <MaterialCommunityIcons name="magnify" color='black' size={26} />
          ),
        }}/>
        <Tab.Screen name='Random' component={Cocktails}
          options={{
          tabBarLabel: 'Random cocktail',
          headerStyle: {
            backgroundColor: '#FFD77A'
          },
          tabBarIcon: () => (
          <MaterialCommunityIcons name="dice-multiple" color='black' size={26} />
          ),
        }}/>
        <Tab.Screen name='Favourites' component={Favourites}          
          options={{
          tabBarLabel: 'Favorites',
          headerStyle: {
            backgroundColor: '#FFD77A'
          },
          tabBarIcon: () => (
          <MaterialCommunityIcons name="star-outline" color='black' size={26} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}