import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { TextInput, Button, IconButton, Colors, Searchbar } from 'react-native-paper';
import axios from 'axios';
import styles from '../style/Style';

export default function Search() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [cockTail, setcockTail] = useState([])
    const [ctName, setctName] = useState('')
    const [searchParam, setsearchParam] = useState('')
    const [baseUrl, setbaseUrl] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ctName;

     const fetchCocktailHandler = useCallback(() => {
          setLoading(true);
         axios.get(URL).then(res => {
             //console.log(res.data);
             setData(res.data.drinks)
         })
             .catch(e => console.log(e))
             .finally(() => setLoading(false));
     }, [URL]);

    //  useEffect(() => {
    //     if(ctName === null) {
    //         setctName('')
    //     }
    //     axios.get(baseUrl)
    //     .then((response) => {
    //         const json = response.data
    //        setData(json.drinks)
    //      }).catch(error => console.log(error))
    //     .finally(() => setLoading(false))
    // }, [baseUrl])

    if (loading) {
        return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>
    }

    // if (cockTail.length <=0) {
    //     return <Text>Cannot find drink</Text>;
    //   }
    //   function back(){
    //     setProductInfo(null);
    //   }
    //   if (productInfo !=null) {
    //     return <ProductDetails
    //     name={productInfo.name}
    //     price={productInfo.price}
    //     description={productInfo.description}
    //     image={productInfo.image}
    //     back={back}
    //     />
    //   } else

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput
                    label='Drink Name'
                    value={ctName}
                    onChangeText={newName => setctName(newName)}
                />
                <IconButton
                    icon="camera"
                    size={20}
                    onPress={(fetchCocktailHandler)}
                />
                {data.map((cocktail) => (
                    <View key={cocktail.idDrink}>
                        <Text style={styles.text}>{cocktail.strDrink}</Text>
                        <Image style={styles.image} src={cocktail.strDrinkThumb} alt='#' />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}