import React from 'react';
import { SafeAreaView, Text, View, ImageBackground } from 'react-native';
import styles from '../style/Style';

export default function Home () {
  return (
    <ImageBackground source={require('../pictures/red_cocktail.jpg')} style={styles.homeImage}>
      <View>
        <Text style={styles.homeContainer}>
          This app helps you to decide your drink and teaches you various cocktail recipes!
        </Text>
      </View>
    </ImageBackground>
  )
}
