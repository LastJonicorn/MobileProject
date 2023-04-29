import React from 'react';
import { SafeAreaView, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import styles from '../style/Style';

export default function Home() {
  return (
    <SafeAreaView>
        <ScrollView>

            <View style={styles.homePage}>
                <Image source={require('../pictures/red_cocktail.jpg')} style={styles.homeImage}></Image>
                <Text style={styles.title}>Hello there, what would you like to drink today?</Text>
            </View>

            <View style={styles.homeFavTitleBox}>
                <Text style={styles.homeFavTitle}>Our favorite recipes</Text>
            </View>

            <View style={styles.homeFavContainer}>
                <View style={styles.homeFav}>
                    <Image source={require('../pictures/red_cocktail.jpg')} style={styles.homeFavimage}></Image>
                    <Text>DRINK NAME</Text>
                </View>

                <View style={styles.homeFav}>
                    <Image source={require('../pictures/red_cocktail.jpg')} style={styles.homeFavimage}></Image>
                    <Text>DRINK NAME</Text>
                </View>

                <View style={styles.homeFav}>
                    <Image source={require('../pictures/red_cocktail.jpg')} style={styles.homeFavimage}></Image>
                    <Text>DRINK NAME</Text>
                </View>

                <View style={styles.homeFav}>
                    <Image source={require('../pictures/red_cocktail.jpg')} style={styles.homeFavimage}></Image>
                    <Text>DRINK NAME</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
