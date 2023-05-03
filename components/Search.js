import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList, TouchableHighlight, Switch } from 'react-native';
import { TextInput, Button, IconButton, Colors, Searchbar } from 'react-native-paper';
import axios from 'axios';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/Style';
import CocktailDetails from './CocktailDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COCKTAIL_KEY } from '../constants/Ct';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function Search() {

    const [loading, setLoading] = useState(false);
    const [ctData, setctData] = useState([])
    const [ctName, setctName] = useState('')
    const [cocktailInfo, setcocktailInfo] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false)

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ctName;
    const URL2 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka';
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    useEffect(() => {
        console.log(ctData)
        axios.get(URL)
            .then((res) => {
                setctData(res.data.drinks)
            }).catch(e => console.log(e))
    }, [ctName])

    if (loading) {
        return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>
    }

    function back() {
        setcocktailInfo(null);
    }
    if (cocktailInfo != null) {
        return <CocktailDetails
            strDrink={cocktailInfo.strDrink}
            strDrinkThumb={cocktailInfo.strDrinkThumb}
            strInstructions={cocktailInfo.strInstructions}
            data={ctData}
            cocktailInfo={cocktailInfo}
            back={back}
        />
    } else {
        return (
            <SafeAreaView style={styles.searchContainer}>
                <View style={styles.searchbarContainer}>
                    <Text style={styles.searchTitle}>What are you looking for today?</Text>
                    <TextInput
                        label='Search for drinks' 
                        value={ctName}
                        onChangeText={newName => setctName(newName)}
                        style={styles.drinkName}
                    />
                </View>


                <ScrollView>
                    <Text style={styles.searchResultsTitle}>Search results:</Text>
                    {ctData === null ? <Text style={styles.title}>Drink not found...</Text> : ctData.map((cocktail) => (
                        <View key={cocktail.idDrink}>
                            <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => setcocktailInfo(cocktail)}>
                                <View style={styles.searchResultContainer}>
                                    <Image style={styles.imageSearch} src={cocktail.strDrinkThumb} alt='#' />
                                    <Text style={styles.searchText}>{cocktail.strDrink}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        )
    }
}