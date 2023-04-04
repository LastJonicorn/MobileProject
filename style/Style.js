import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        fontFamily: 'VarelaRound',
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: 50,
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
    button: {
        fontFamily: 'VarelaRound',
        margin: 30,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#FF5733",
        width: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
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
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        marginTop: 400,
        width: 350,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(248, 131, 121, 0.6)',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
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
    }
});