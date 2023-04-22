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
        width: '30%',
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
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 30,
        textDecorationLine:'underline',
    },
    ingredientsContainer: {
        borderColor: 'rgba(230, 230, 230, 0.6)',
        borderWidth: 2,
        backgroundColor: 'rgba(247, 247, 247, 0.6)',
        width: '100%',
        padding: 30,
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
    homeImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    drinkName: {
        fontFamily: 'VarelaRound',
        backgroundColor: '#FDB813'
    },
    infoBoxContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -75,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    navBar: {
        fontFamily: 'VarelaRound',
    },
    favoriteContainer: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginTop: -50,
        paddingTop: 60,
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
        backgroundColor: '#ececec',
        fontFamily: 'VarelaRound',
        fontWeight: 'bold',
        fontSize: 23,
        marginLeft: 20,
        padding: 30,
        width: 200,
        borderRadius: 25,
    },
    buttonContainer: {
        zIndex: 1,
    },
    headerColor: {
        backgroundColor: '#ffffff',
        height: '100%',
    }
});