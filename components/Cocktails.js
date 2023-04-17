import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import styles from '../style/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COCKTAIL_KEY } from '../constants/Ct';


export default function About () {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [color,setColor] = useState(true);
    const [favorite,setFavorite] = useState([]);

    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);
        getCtData();
        setColor(true);
        axios.get(URL).then(res=> {
            //console.log(res.data);
            setData(res.data.drinks)
        })
        .catch(e=>console.log(e))
        .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchCocktailHandler();
    },[fetchCocktailHandler]);

    if (loading) {
        return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>
    }

    const Ingredients = [
        {
        name:data[0]?.strIngredient1,
        id:1
        },
        {
        name:data[0]?.strIngredient2,
        id:2
        },        
        {
        name:data[0]?.strIngredient3,
        id:3
        },
        {
        name:data[0]?.strIngredient4,
        id:4
        },        
        {
        name:data[0]?.strIngredient5,
        id:5
        },        
        {
        name:data[0]?.strIngredient6,
        id:6
        },        
        {
        name:data[0]?.strIngredient7,
        id:7
        },
        {
        name:data[0]?.strIngredient8,
        id:8
        },
        {
        name:data[0]?.strIngredient9,
        id:9
        },        
        {
        name:data[0]?.strIngredient10,
        id:10
        },
        {
        name:data[0]?.strIngredient11,
        id:11
        },        
        {
        name:data[0]?.strIngredient12,
        id:12
        },        
        {
        name:data[0]?.strIngredient13,
        id:13
        },        
        {
        name:data[0]?.strIngredient14,
        id:14
        },
        {
        name:data[0]?.strIngredient15,
        id:15
        }
        
    ];

    const Measures = [
        {
        name:data[0]?.strMeasure1,
        id:1
        },
        {
        name:data[0]?.strMeasure2,
        id:2
        },        
        {
        name:data[0]?.strMeasure3,
        id:3
        },
        {
        name:data[0]?.strMeasure4,
        id:4
        },        
        {
        name:data[0]?.strMeasure5,
        id:5
        },        
        {
        name:data[0]?.strMeasure6,
        id:6
        },        
        {
        name:data[0]?.strMeasure7,
        id:7
        },
        {
        name:data[0]?.strMeasure8,
        id:8
        },
        {
        name:data[0]?.strMeasure9,
        id:9
        },        
        {
        name:data[0]?.strMeasure10,
        id:10
        },
        {
        name:data[0]?.strMeasure11,
        id:11
        },        
        {
        name:data[0]?.strMeasure12,
        id:12
        },        
        {
        name:data[0]?.strMeasure13,
        id:13
        },        
        {
        name:data[0]?.strMeasure14,
        id:14
        },
        {
        name:data[0]?.strMeasure15,
        id:15
        }
        
    ];

    function addFavorite(){
        if (color === !color) {
            data = []
        } else {
            //console.log(data[0])
            storeFvCt();
        }
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
            const newFavs = [data[0],...favorite]
            const jsonValue = JSON.stringify(newFavs);
            await AsyncStorage.setItem(COCKTAIL_KEY, jsonValue);
        }
        catch (error) {
            console.log(error.message)
        }
    }
 
    return (
        <SafeAreaView style={styles.container}>
            {data.map((cocktail, i) => (
                <ScrollView>
                    <Image style={styles.image} src={cocktail.strDrinkThumb} alt='#'/>
                    <View style={styles.infoBoxContainer} key={i}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center'  }}>
                            <Text style={styles.title}>{cocktail.strDrink}</Text>
                            <View>
                                <Pressable 
                                    key={'favorite'}
                                >
                                    <MaterialCommunityIcons
                                        onPressIn={addFavorite}
                                        name={"star"}
                                        key={'buttonsRow'}
                                        size={60}
                                        onPress = {()=>setColor(!color)}
                                        style={{color:color ? '#808080':'#ffd500'}}
                                        >
                                    </MaterialCommunityIcons>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.ingredientsContainer}>
                            <Text style={styles.ingredients}>Ingredients</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{paddingLeft: 15}}>
                                    {Ingredients.filter(v => v.name !== null).map((Ingredient, o) => {
                                        return (
                                            <View key={o}>
                                        <Text style={{fontSize:15}}>{Ingredient.name}</Text>
                                        </View>
                                        );
                                    })}
                                </View>
                                <View style={{paddingLeft: 30}}>
                                    {Measures.filter(v => v.name !== null).map((Measure, a) => {
                                        return (<View key={a}>
                                        <Text style={{fontSize:15}}>{Measure.name}</Text>
                                        </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <Text style={styles.text}>{cocktail.strInstructions}</Text>
                        </View>
                        <Pressable 
                            style={({ pressed }) => [
                                styles.button,
                                pressed && { opacity: .7 }
                            ]}
                            onPress={fetchCocktailHandler}
                        >
                            <Text>Get random cocktail</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            ))}
        </SafeAreaView>
    )
}