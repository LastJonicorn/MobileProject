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

    const Ingredients = [
        {
        name:ctData[0]?.strIngredient1,
        id:1
        },
        {
        name:ctData[0]?.strIngredient2,
        id:2
        },        
        {
        name:ctData[0]?.strIngredient3,
        id:3
        },
        {
        name:ctData[0]?.strIngredient4,
        id:4
        },        
        {
        name:ctData[0]?.strIngredient5,
        id:5
        },        
        {
        name:ctData[0]?.strIngredient6,
        id:6
        },        
        {
        name:ctData[0]?.strIngredient7,
        id:7
        },
        {
        name:ctData[0]?.strIngredient8,
        id:8
        },
        {
        name:ctData[0]?.strIngredient9,
        id:9
        },        
        {
        name:ctData[0]?.strIngredient10,
        id:10
        },
        {
        name:ctData[0]?.strIngredient11,
        id:11
        },        
        {
        name:ctData[0]?.strIngredient12,
        id:12
        },        
        {
        name:ctData[0]?.strIngredient13,
        id:13
        },        
        {
        name:ctData[0]?.strIngredient14,
        id:14
        },
        {
        name:ctData[0]?.strIngredient15,
        id:15
        }
        
    ];

    const Measures = [
        {
        name:ctData[0]?.strMeasure1,
        id:1
        },
        {
        name:ctData[0]?.strMeasure2,
        id:2
        },        
        {
        name:ctData[0]?.strMeasure3,
        id:3
        },
        {
        name:ctData[0]?.strMeasure4,
        id:4
        },        
        {
        name:ctData[0]?.strMeasure5,
        id:5
        },        
        {
        name:ctData[0]?.strMeasure6,
        id:6
        },        
        {
        name:ctData[0]?.strMeasure7,
        id:7
        },
        {
        name:ctData[0]?.strMeasure8,
        id:8
        },
        {
        name:ctData[0]?.strMeasure9,
        id:9
        },        
        {
        name:ctData[0]?.strMeasure10,
        id:10
        },
        {
        name:ctData[0]?.strMeasure11,
        id:11
        },        
        {
        name:ctData[0]?.strMeasure12,
        id:12
        },        
        {
        name:ctData[0]?.strMeasure13,
        id:13
        },        
        {
        name:ctData[0]?.strMeasure14,
        id:14
        },
        {
        name:ctData[0]?.strMeasure15,
        id:15
        }
        
    ];

    return (
        <SafeAreaView style={styles.container}>
            {ctData.map((cocktail, i) => (
                    <View key={i}>
                        <Text style={styles.title}>{cocktail.strDrink}</Text>
                    </View>
            ))}
            <Pressable style={styles.button}>
                <Text onPress={clearAsyncStorage}>Get random cocktail</Text>
            </Pressable>
        </SafeAreaView>
    )
}