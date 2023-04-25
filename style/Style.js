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
    homeImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    drinkName: {
        fontFamily: 'VarelaRound',
        backgroundColor: '#FDB813'
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
        right:0
    },
    buttonContainer: {
        backgroundColor: '#FFD77A',
        paddingBottom: 20,
    },
    headerColor: {
        backgroundColor: '#ffffff',
        height: '100%',
    }
});