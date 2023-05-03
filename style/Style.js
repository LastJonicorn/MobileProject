import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        fontFamily: 'VarelaRound',
        flex: 1,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        marginBottom: 50,
    },
    navBar: {
        fontFamily: 'VarelaRound',
    },
    underline: {
        flex: 1,
        textAlign: 'center',
    },
    loading: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        margin: 10,
        paddingTop: 250
    },
    flexContainer: {
        fontFamily: 'VarelaRound',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    flexContainer2: {
        fontFamily: 'VarelaRound',
        flexDirection: 'row',
        flex: 2,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    title: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        margin: 20,    
    },
    headerTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    button: {
        fontFamily: 'VarelaRound',
        margin: 30,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#ff8019",
        width: 200,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 1,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
    },
    text: {
        fontFamily: 'VarelaRound',
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
        marginTop: 50,
    },
    font: {
        fontFamily: 'VarelaRound',
        fontSize: 17, 
    },

    // COCKTAIL DETAILS
    // Parent of title & ingredients
    infoBoxContainer: {
        marginTop: -75,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderColor: '#FDB813',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    // Ingredients title
    ingredients: {
        fontSize: 20,
        fontFamily: 'VarelaRound',
        textAlign: 'center',
        marginBottom: 30,
        textDecorationLine:'underline',
    },    
    // Parent of ingredients
    ingredientsContainer: {
        borderTopColor: '#e9e9e9',
        borderTopWidth: 2,
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 20,
        marginLeft: 25,
        marginRight: 25,
    },

    // FAVORITES PAGE
    // Parent of the whole page
    headerColor: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    // Parent of button
    buttonContainer: {
        backgroundColor: '#FFD77A',
        paddingBottom: 20,
    },
    // Parent of favorite drinks
    favoriteContainer: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginTop: -25,
        paddingTop: 30,
        borderColor: '#FDB813',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 25,
        paddingBottom: 50,
        height: '100%'
    },
    // Parent for a single drink
    favorite: {
        flexDirection: 'row',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
    },
    // Image
    imageFav: {
        width: '27%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200,
    },
    // Drink title
    favoriteText: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
    // Delete button
    favoriteDelete: {
        position:'absolute',
        right:0,
        color: '#808080'
    },

    // SEARCH PAGE
    // Parent of the whole page
    searchContainer: {
        backgroundColor: '#ffffff',
        marginBottom: 90
    },
    // Parent of the searchbar
    searchbarContainer: {
        backgroundColor: '#FFD77A',
        padding: 20,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
    },
    // Searchbar
    drinkName: {
        fontFamily: 'VarelaRound',
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ffffff',
        overflow: 'hidden'
        
    },
    // 'What are you looking for today?' title
    searchTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 17,
    },
    // 'Search results:' title
    searchResultsTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    // Parent containing image & title of a drink
    searchResultContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
    },
    // Images
    imageSearch: {
        width: '27%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200,
    },
    // Drink titles
    searchText: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },

    // HOMEPAGE
    // Parent for main image
    homePage: {
        margin: 30,
    },
    // Main image
    homeImage: {
        flex: 1,
        width: '70%',
        height: undefined,
        aspectRatio: 0.9,
        borderRadius: 5,
        alignSelf:'center'
    },
    headerImage: {
        flex: 1,
        width: '70%',
        height: undefined,
        aspectRatio: 0.9,
        borderRadius: 5,
        alignSelf:'center',
        marginLeft: 10,
        marginBottom: 6
    },
    // Parent for 'Our favorite recipes' title
    homeFavTitleBox: {
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        marginLeft: 50,
        marginRight: 50,
        marginTop: -20
    },
    // 'Our favorite recipes' title
    homeFavTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
    },
    homeText: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginBottom: 50
    },
    // Parent for all four favorite drinks
    homeFavContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 55,
    },
    // Parent for favorite image & text in homepage
    homeFav: {
        alignItems: 'center',
        marginBottom: 15,
    },    
    // Smaller images
    homeFavimage: {
        width: undefined,
        height: 150,
        aspectRatio: 1,
        borderRadius: 5,
        marginBottom: 5,
    },    
});