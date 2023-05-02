import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import styles from '../style/Style';
import CocktailDetails from './CocktailDetails';

export default function Search() {

    const [ctData1, setctData1] = useState([])
    const [ctData2, setctData2] = useState([])
    const [ctData3, setctData3] = useState([])
    const [ctData4, setctData4] = useState([])
    const [cocktailInfo, setcocktailInfo] = useState(null)

    const URL1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Old Fashioned';
    const URL2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Balmoral'; //Lisätkää oma juoma tänne
    const URL3 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin Fizz'; //Lisätkää oma juoma tänne
    const URL4 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Avalon'; //Lisätkää oma juoma tänne


    useEffect(() => {
        console.log(ctData1)
        axios.get(URL1)
            .then((res) => {
                setctData1(res.data.drinks)
            }).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        console.log(ctData2)
        axios.get(URL2)
            .then((res) => {
                setctData2(res.data.drinks)
            }).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        console.log(ctData3)
        axios.get(URL3)
            .then((res) => {
                setctData3(res.data.drinks)
            }).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        console.log(ctData4)
        axios.get(URL4)
            .then((res) => {
                setctData4(res.data.drinks)
            }).catch(e => console.log(e))
    }, [])

    function back() {
        setcocktailInfo(null);
    }
    if (cocktailInfo != null) {
        return <CocktailDetails
            strDrink={cocktailInfo.strDrink}
            strDrinkThumb={cocktailInfo.strDrinkThumb}
            strInstructions={cocktailInfo.strInstructions}
            cocktailInfo={cocktailInfo}
            back={back}
        />
    } else {
        return (
            <SafeAreaView>
                <ScrollView>
                <View style={styles.homePage}>
                    <Image source={require('../pictures/red_cocktail.jpg')} style={styles.homeImage}></Image>
                </View>
                    <Text style={styles.homeFavTitle}>Our favorite drinks</Text>
                    <View style={styles.homeFavContainer}>
                    {ctData1.map((cocktail, i) => ( i < 1 &&
                    <Pressable style={styles.homeFav} onPress={() => setcocktailInfo(cocktail)}>
                        <Image src={cocktail.strDrinkThumb} style={styles.homeFavimage}></Image>
                        <Text style={styles.font}>Old Fashioned</Text>
                    </Pressable>
                    ))}
                    {ctData2.map((cocktail, i) => ( i < 1 &&
                    <Pressable style={styles.homeFav} onPress={() => setcocktailInfo(cocktail)}>
                        <Image src={cocktail.strDrinkThumb} style={styles.homeFavimage}></Image>
                        <Text style={styles.font}>DRINK NAME</Text>
                    </Pressable>
                    ))}
                    {ctData3.map((cocktail, i) => ( i < 1 &&
                    <Pressable style={styles.homeFav} onPress={() => setcocktailInfo(cocktail)}>
                        <Image src={cocktail.strDrinkThumb} style={styles.homeFavimage}></Image>
                        <Text style={styles.font}>DRINK NAME</Text>
                    </Pressable>
                    ))}
                    {ctData4.map((cocktail, i) => ( i < 1 &&
                    <Pressable style={styles.homeFav} onPress={() => setcocktailInfo(cocktail)}>
                        <Image src={cocktail.strDrinkThumb} style={styles.homeFavimage}></Image>
                        <Text style={styles.font}>DRINK NAME</Text>
                    </Pressable>
                    ))}
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

