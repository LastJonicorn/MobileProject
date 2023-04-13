import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COCKTAIL_KEY } from '../constants/Ct';
import styles from '../style/Style';
import CocktailDetails from './CocktailDetails';
import RNRestart from 'react-native-restart';

export default Favorites = ({ navigation }) => {

    const [ctData, setctData] = useState([])
    const [cocktailInfo, setcocktailInfo] = useState(null)


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            storeFvCt()
        });
        return unsubscribe;
    }, [navigation]);

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

    const clearAsyncStorage = async () => {
        try {
          keys = await AsyncStorage.getAllKeys()
          console.log(`Keys: ${keys}`) // Just to see what's going on
          await AsyncStorage.multiRemove(keys)
        } catch(e) {
         console.log(e)
        }
        console.log('Done')
        setctData([])
    }

    const cleartFavAlert = () =>
    Alert.alert('Clear favorites?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {clearAsyncStorage()}},
    ]);

    function back() {
        setcocktailInfo(null);
    }
    if (cocktailInfo != null) {
        return <CocktailDetails
            strDrink={cocktailInfo.strDrink}
            strDrinkThumb={cocktailInfo.strDrinkThumb}
            strInstructions={cocktailInfo.strInstructions}
            data={ctData}
            back={back}
        />
    } else {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Pressable style={styles.button}>
                        <Text onPress={cleartFavAlert}>Clear favorites</Text>
                    </Pressable>
                    {ctData.map((cocktail, i) => (
                        <View key={i}>
                            <Text style={styles.title}>{cocktail.strDrink}</Text>
                            <Pressable onPress={() => setcocktailInfo(cocktail)}>
                                <Image style={styles.imageFav} src={cocktail.strDrinkThumb} alt='#' />
                            </Pressable>
                        </View>
                    ))}

                </ScrollView>
            </SafeAreaView>
        )
    }
}