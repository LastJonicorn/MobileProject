import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from '../style/Style';


export default function Home () {

  return (
    <View>
      <Text style={styles.homeContainer}>
        This is an app that is designed to help you to decide what to drink
      </Text>
      <Image source={require('../pictures/red_cocktail.jpg')}
        style={styles.homeImage}>
      </Image>
    </View>
  )
}