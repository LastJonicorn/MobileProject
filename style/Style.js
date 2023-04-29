import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        fontFamily: 'VarelaRound',
        flex: 1,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        marginBottom: 50,
    },
    underline: {
        flex: 1,
        textAlign: 'center',
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
    image: {
        flex: 1,
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    imageFav: {
        width: '27%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200,
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
    ingredients: {
        fontSize: 20,
        fontFamily: 'VarelaRound',
        textAlign: 'center',
        marginBottom: 30,
        textDecorationLine:'underline',
    },
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
    loading: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        margin: 10,
        paddingTop: 250
    },
    homeContainer: {
        fontFamily: 'VarelaRound',
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 300,
        width: 350,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(248, 131, 121, 0.6)',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },      
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
    infoBoxContainer: {
        marginTop: -75,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderColor: '#FDB813',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    navBar: {
        fontFamily: 'VarelaRound',
    },
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
    favorite: {
        flexDirection: 'row',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',
    },
    favoriteText: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
    favoriteDelete: {
        position:'absolute',
        right:0,
        color: '#808080'
    },
    buttonContainer: {
        backgroundColor: '#FFD77A',
        paddingBottom: 20,
    },
    headerColor: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    searchContainer: {
        backgroundColor: '#ffffff',
    },
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
    imageSearch: {
        width: '27%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200,
    },
    searchText: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },
    searchbarContainer: {
        backgroundColor: '#FFD77A',
        padding: 20,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
    },
    searchTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 17,
    },
    searchResultsTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    homePage: {
        margin: 20
    },
    homeFavContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 20,
        paddingBottom: 55,
    },
    homeImage: {
        flex: 1,
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 5,
    },
    homeFavimage: {
        width: undefined,
        height: 150,
        aspectRatio: 1,
        borderRadius: 5,
    },
    // Parent for favorite image & text in homepage
    homeFav: {
        alignItems: 'center',
        marginBottom: 15,
    },
    homeFavTitle: {
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
    },
    homeFavTitleBox: {
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        marginLeft: 50,
        marginRight: 50,
        marginTop: -20
    }
    
});