import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
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

    console.log(data[0].strIngredient1);

/*     const Ingredients = [
        data[0].strIngredient1,
        data[0].strIngredient2,
        data[0].strIngredient3,
        data[0].strIngredient4,
        data[0].strIngredient5,
        data[0].strIngredient6,
        data[0].strIngredient7,
        data[0].strIngredient8,
        data[0].strIngredient9,
        data[0].strIngredient10,
        data[0].strIngredient11,
        data[0].strIngredient12,
        data[0].strIngredient13,
        data[0].strIngredient14,
        data[0].strIngredient15,
    ];

    const Measures = [
        data[0].strMeasure1,
        data[0].strMeasure2,
        data[0].strMeasure3,
        data[0].strMeasure4,
        data[0].strMeasure5,
        data[0].strMeasure6,
        data[0].strMeasure7,
        data[0].strMeasure8,
        data[0].strMeasure9,
        data[0].strMeasure10,
        data[0].strMeasure11,
        data[0].strMeasure12,
        data[0].strMeasure13,
        data[0].strMeasure14,
        data[0].strMeasure15,
    ]; */

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