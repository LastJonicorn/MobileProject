import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, Pressable, Image, ScrollView, SafeAreaView, FlatList, TouchableHighlight} from 'react-native';
import { COCKTAIL_KEY } from '../constants/Ct';
import {ctInfo} from './Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/Style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Search from './Search';
import { useIsFocused } from '@react-navigation/native';

export default function CocktailDetails({strDrink, strDrinkThumb, strInstructions, back, Ingredient, Measure, data, ctData, cocktailInfo, navigation, props}) {
    
    const [color,setColor] = useState(true);
    const [favorite,setFavorite] = useState([]);
    const [newFav, setnewFav] = useState([])

    const fetchCocktailHandler = useCallback(() => {
        getCtData();
    }, []);

    useEffect(() => {
        fetchCocktailHandler();
    },[fetchCocktailHandler]);



    const Ingredients = [
        {
        name:cocktailInfo.strIngredient1,
        id:1
        },
        {
        name:cocktailInfo.strIngredient2,
        id:2
        },        
        {
        name:cocktailInfo.strIngredient3,
        id:3
        },
        {
        name:cocktailInfo.strIngredient4,
        id:4
        },        
        {
        name:cocktailInfo.strIngredient5,
        id:5
        },        
        {
        name:cocktailInfo.strIngredient6,
        id:6
        },        
        {
        name:cocktailInfo.strIngredient7,
        id:7
        },
        {
        name:cocktailInfo.strIngredient8,
        id:8
        },
        {
        name:cocktailInfo.strIngredient9,
        id:9
        },        
        {
        name:cocktailInfo.strIngredient10,
        id:10
        },
        {
        name:cocktailInfo.strIngredient11,
        id:11
        },        
        {
        name:cocktailInfo.strIngredient12,
        id:12
        },        
        {
        name:cocktailInfo.strIngredient13,
        id:13
        },        
        {
        name:cocktailInfo.strIngredient14,
        id:14
        },
        {
        name:cocktailInfo.strIngredient15,
        id:15
        }
        
    ];

    const Measures = [
        {
        name:cocktailInfo.strMeasure1,
        id:1
        },
        {
        name:cocktailInfo.strMeasure2,
        id:2
        },        
        {
        name:cocktailInfo.strMeasure3,
        id:3
        },
        {
        name:cocktailInfo.strMeasure4,
        id:4
        },        
        {
        name:cocktailInfo.strMeasure5,
        id:5
        },        
        {
        name:cocktailInfo.strMeasure6,
        id:6
        },        
        {
        name:cocktailInfo.strMeasure7,
        id:7
        },
        {
        name:cocktailInfo.strMeasure8,
        id:8
        },
        {
        name:cocktailInfo.strMeasure9,
        id:9
        },        
        {
        name:cocktailInfo.strMeasure10,
        id:10
        },
        {
        name:cocktailInfo.strMeasure11,
        id:11
        },        
        {
        name:cocktailInfo.strMeasure12,
        id:12
        },        
        {
        name:cocktailInfo.strMeasure13,
        id:13
        },        
        {
        name:cocktailInfo.strMeasure14,
        id:14
        },
        {
        name:cocktailInfo.strMeasure15,
        id:15
        }
        
    ];

    const isFocused = useIsFocused();

    useEffect(() => {
        console.log('called focus')
        if(isFocused) {
            getCtData()
            console.log('ct' + data)
        }
      
    }, [props, isFocused]);

    const addFavorite = () => {
        setColor(false)
        storeFvCt()
    setnewFav(cocktailInfo)

    }



    const getCtData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(COCKTAIL_KEY);
          if (jsonValue !== null) {
            let tmpCt = JSON.parse(jsonValue);
            setFavorite(tmpCt);
            console.log('tmpt' + tmpCt)       
         }
        }
        catch (error) {
          console.log('Read error: ' + error.message);
        }
      }

    const storeFvCt = async () => { 
        console.log(newFav)
        try {
            const newFavs = [newFav,...favorite]
            const jsonValue = JSON.stringify(newFavs);
            await AsyncStorage.setItem(COCKTAIL_KEY, jsonValue);
        }
        catch (error) {
            console.log(error.message)
        }

    }


    return (
        <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{paddingBottom: 50}}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                pressed && { opacity: .7 }
                            ]}
                            onPress={back}
                        >
                            <Text style={styles.buttonText}>Back</Text>
                        </Pressable>
                        <Image style={styles.image} src={strDrinkThumb} alt='#'/>
                        <View style={styles.infoBoxContainer}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center'  }}>
                                <Text style={styles.title}>{strDrink}</Text>
                            </View>
                            <View>
                                <Pressable 
                                    key={'favorite'}
                                >
                                    <MaterialCommunityIcons
                                      onPress = {()=> {
                                        setColor(true)
                                        addFavorite()
                                    }}
                                        onPressIn={() => setnewFav(cocktailInfo)}
                                        name={"star"}
                                        key={'buttonsRow'}
                                        size={60}
                                        style={{color:color ? '#808080':'#ffd500'}}
                                        >
                                    </MaterialCommunityIcons>
                                </Pressable>
                            </View>
                            <View style={styles.ingredientsContainer}>
                                <Text style={styles.ingredients}>Ingredients</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{paddingLeft: 15}}>
                                    {Ingredients.filter(v => v.name !== null).map((Ingredient) => {
                                    return (
                                    <Text style={{fontSize:15}}>{Ingredient.name}</Text>
                                    );
                                    })}
                                    </View>
                                    <View style={{paddingLeft: 30}}>
                                        {Measures.filter(v => v.name !== null).map((Measure) => {
                                            return (
                                            <Text style={{fontSize:15}}>{Measure.name}</Text>
                                            );
                                        })}
                                    </View>
                                </View>
                                <Text style={styles.text}>{strInstructions}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
        </SafeAreaView>
    )
}