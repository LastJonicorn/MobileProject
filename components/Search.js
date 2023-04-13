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
    const [data, setData] = useState([])
    const [ctName, setctName] = useState('')
    const [cocktailInfo, setcocktailInfo] = useState(null)
    const [color,setColor] = useState(true);
    const [favorite,setFavorite] = useState([]);
    const [newFav, setnewFav] = useState([])
    
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ctName;


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

    function addFavorite(){
        getCtData();
        storeFvCt();
    };

    const getCtData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(COCKTAIL_KEY);
          if (jsonValue !== null) {
            let tmpCt = JSON.parse(jsonValue);
            setFavorite(tmpCt);
          }
        }
        catch (error) {
          console.log('Read error: ' + error.message);
        }
      }

    const storeFvCt = async () => {
        try {
            const newFavs = [...favorite, data[cocktail.idDrink]]
            const jsonValue = JSON.stringify(newFavs);
            await AsyncStorage.setItem(COCKTAIL_KEY, jsonValue);
        }
        catch (error) {
            console.log(error.message)
        }
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
                            <View>
                            <Text style={styles.text}>{cocktail.strDrink}</Text>
                                <Pressable 
                                    key={'favorite'}
                                >
                                    <MaterialCommunityIcons
                                        onPressIn={(addFavorite)}
                                        name={"star"}
                                        key={'buttonsRow'}
                                        size={60}
                                        onPress = {()=> {
                                            setColor(!color);
                                            setnewFav(cocktail)
                                                }}
                                        style={{color:color ? '#808080':'#ffd500'}}
                                        >
                                    </MaterialCommunityIcons>
                                </Pressable>
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