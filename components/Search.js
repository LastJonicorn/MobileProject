import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import { TextInput, Button, IconButton, Colors, Searchbar } from 'react-native-paper';
import axios from 'axios';
import styles from '../style/Style';
import CocktailDetails from './CocktailDetails';

export default function Search() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [ctName, setctName] = useState('')
    const [cocktailInfo, setcocktailInfo] = useState(null)

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ctName;


    //Alempi koodi toimii napin avulla

    // const fetchCocktailHandler = useCallback(() => {
    //     setLoading(true);
    //     axios.get(URL).then(res => {
    //         //console.log(res.data);
    //         setData(res.data.drinks)
    //     })
    //         .catch(e => console.log(e))
    //         .finally(() => setLoading(false));
    // }, [URL]);


    //tämä hakee juomat automaattisesti kun kirjoittaa
    useEffect(() => {
        console.log(data)
        axios.get(URL)
          .then((res) => {
            setData(res.data.drinks)
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
            data={data}
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
                    
                    {data === null ? <Text>Drink not found</Text>: data.map((cocktail) => (
                        <View key={cocktail.idDrink}>
                            <Text style={styles.text}>{cocktail.strDrink}</Text>
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