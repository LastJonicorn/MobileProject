import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import styles from '../style/Style';

export default function About () {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);
        axios.get(URL).then(res=> {
            //console.log(res.data);
            setData(res.data.drinks)
        })
        .catch(e=>console.log(e))
        .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchCocktailHandler()
    },[fetchCocktailHandler]);

    if (loading) {
        return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>
    }

    console.log(data[0]);
    console.log(data[0].strIngredient1);

    return (
        <SafeAreaView style={styles.container}>
            {data.map((cocktail) => (
                <ScrollView>
                    <View key={cocktail.idDrink}>
                        <Text style={styles.title}>{cocktail.strDrink}</Text>
                        <Image style={styles.image} src={cocktail.strDrinkThumb} alt='#'/>
                        <Text style={styles.text}>{cocktail.strInstructions}</Text>
                        <Pressable style={styles.button}>
                            <Text onPress={fetchCocktailHandler}>Get random cocktail</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            ))}
        </SafeAreaView>
    )
}