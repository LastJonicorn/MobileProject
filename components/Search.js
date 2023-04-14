import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import { TextInput, Button, IconButton, Colors, Searchbar } from 'react-native-paper';
import axios from 'axios';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/Style';
import CocktailDetails from './CocktailDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COCKTAIL_KEY } from '../constants/Ct';

export default function Search() {

    const [loading, setLoading] = useState(false);
    const [ctData, setctData] = useState([])
    const [ctName, setctName] = useState('')
    const [cocktailInfo, setcocktailInfo] = useState(null)
    const [color,setColor] = useState(true);
    const [favorite,setFavorite] = useState([]);
    const [newFav, setnewFav] = useState([])
    
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ctName;


    useEffect(() => {
        console.log(ctData)
        axios.get(URL)
          .then((res) => {
            setctData(res.data.drinks)
          }) .catch(e => console.log(e))
          }, [URL])

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
            data={cocktailInfo}
            back={back}
        />
    } else {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <TextInput
                        label='Drink Name'
                        value={ctName}
                        onChangeText={newName => setctName(newName)}
                        style={styles.drinkName}
                    />

                    
                    {/* Painalluksella haku jos tarvitsee
                        <IconButton
                        icon="camera"
                        size={20}
                        onPress={(fetchCocktailHandler)}
                    /> */}
                    
                    {ctData === null ? <Text>Drink not found</Text>: ctData.map((cocktail) => (
                        <View key={cocktail.idDrink}>
                            <View>
                            <Text style={styles.text}>{cocktail.strDrink}</Text>
                              
                            </View>
                            <TouchableHighlight onPress={() => setcocktailInfo(cocktail)}>
                                <Image style={styles.image} src={cocktail.strDrinkThumb} alt='#' />
                            </TouchableHighlight>
                          
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        )
    }
}