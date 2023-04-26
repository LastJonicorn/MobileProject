import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList, TouchableHighlight, Alert, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COCKTAIL_KEY } from '../constants/Ct';
import styles from '../style/Style';
import FavoriteDetails from './FavoriteDetails';
import { useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CUTTING_EXPRESSION = /\s+[^\s]*$/;

export default Favorites = ({ props }) => {

    const [ctData, setctData] = useState([])
    const [cocktailInfo, setcocktailInfo] = useState(null)

    const isFocused = useIsFocused()

    useEffect(() => {
        console.log('called focus')
        if (isFocused) {
            storeFvCt()
            console.log(ctData)
        }

    }, [props, isFocused]);

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

    const removeFave = async (i) => {
        keys = await AsyncStorage.getAllKeys()
        let tmpFaves = [...ctData];
        const index = keys.indexOf(i);
        tmpFaves.splice(i, 1);
        setctData(tmpFaves);
        const jsonValue = JSON.stringify(tmpFaves);
        await AsyncStorage.setItem(COCKTAIL_KEY, jsonValue)
    }

    const clearAsyncStorage = async () => {
        try {
            keys = await AsyncStorage.getAllKeys()
            console.log(keys)
            await AsyncStorage.multiRemove(keys)
            const newKey = []
            const jsonValue = JSON.stringify(newKey);
            await AsyncStorage.setItem(COCKTAIL_KEY, jsonValue)
        } catch (e) {
            console.log(e)
        }
        console.log('Done')
        setctData([])
        NativeModules.DevSettings.reload();
    }

    const cleartFavAlert = () =>
        Alert.alert('Clear favorites?', '', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => { clearAsyncStorage() } },
        ]);

    const createShortcut = (text, limit) => {
        if (text.length > limit) {
            const part = text.slice(0, limit - 3);
            if (part.match(CUTTING_EXPRESSION)) {
                return part.replace(CUTTING_EXPRESSION, ' ...');
            }
            return part + '...';
        }
        return text;
    };

    const Component = ({ text, limit }) => {
        const shortcut = createShortcut(text, limit);
        return (
            <Text title={text}>{shortcut}</Text>
        );
    };

    function back() {
        setcocktailInfo(null);
    }
    if (cocktailInfo != null) {
        return <FavoriteDetails
            strDrink={cocktailInfo.strDrink}
            strDrinkThumb={cocktailInfo.strDrinkThumb}
            strInstructions={cocktailInfo.strInstructions}
            data={ctData}
            cocktailInfo={cocktailInfo}
            back={back}
        />
    } else {

        return (
            <SafeAreaView>
                <ScrollView style={styles.headerColor}>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                pressed && { opacity: .7 }
                            ]}
                            onPress={cleartFavAlert}
                        >
                            <Text style={styles.buttonText}>Clear favorites</Text>
                        </Pressable>
                    </View>
                    <View style={styles.favoriteContainer}>
                        {ctData.map((cocktail, i) => (
                            <View key={i}>
                                <Pressable style={styles.favorite} onPress={() => setcocktailInfo(cocktail)}>
                                    <Image style={styles.imageFav} src={cocktail.strDrinkThumb} alt='#' />
                                    <Text style={styles.favoriteText}>
                                        <Component text={cocktail.strDrink} limit={20} />
                                    </Text>
                                    <MaterialCommunityIcons
                                        style={styles.favoriteDelete}
                                        onPress={() => removeFave(i)}
                                        name={"delete"}
                                        size={40}
                                    >
                                    </MaterialCommunityIcons>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}