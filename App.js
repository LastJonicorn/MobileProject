import React from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cocktails from './components/Cocktails';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Home from './components/Home';
import { useFonts } from 'expo-font';
import styles from './style/Style';

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
          headerTitle: () => <Text style={styles.headerTitle}>Home</Text>,
          headerLeft: () => <Image style={styles.headerImage} source={require('./pictures/Cocktail2a.png')}/>,
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
          headerTitle: () => <Text style={styles.headerTitle}>Search</Text>,
          headerLeft: () => <Image style={styles.headerImage} source={require('./pictures/Cocktail2a.png')}/>,
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
          headerTitle: () => <Text style={styles.headerTitle}>Random</Text>,
          headerLeft: () => <Image style={styles.headerImage} source={require('./pictures/Cocktail2a.png')}/>,
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
          headerTitle: () => <Text style={styles.headerTitle}>Favorites</Text>,
          headerLeft: () => <Image style={styles.headerImage} source={require('./pictures/Cocktail2a.png')}/>,
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