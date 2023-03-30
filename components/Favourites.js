import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COCKTAIL_KEY } from '../constants/Ct';
import styles from '../style/Style';

export default Favorites = ( {navigation} ) => {

        const [ctData, setctData] = useState([])



    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            storeFvCt()
        });
        return unsubscribe;
    },[navigation]);

    const storeFvCt = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(COCKTAIL_KEY);
            if (jsonValue !== null) {
                let newFav = JSON.parse(jsonValue);
                setctData(newFav);
                console.log(ctData)
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
 
    const clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }

    return (
        <SafeAreaView style={styles.container}>
            {ctData.map((cocktail, i) => (
                <ScrollView>
                    <View key={i}>
                        <Text style={styles.title}>{cocktail.strDrink}</Text>
                        <Image style={styles.image} src={cocktail.strDrinkThumb} alt='#'/>
                        <Text style={styles.text}>{cocktail.strInstructions}</Text>
                        <Text style={styles.ingredients}>Ingredients</Text>
                    </View>
                </ScrollView>
            ))}
             <Pressable style={styles.button}>
                            <Text onPress={clearAsyncStorage}>Get random cocktail</Text>
                        </Pressable>
        </SafeAreaView>
    )
}