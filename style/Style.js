import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
      flexContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
      flexContainer2: {
        flexDirection: 'row',
        flex: 2,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width:300,
        height:300,
        alignSelf: 'center',
    },
    button: {
        margin: 30,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#c6d7dc",
        width: 150,
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
    },
    ingredients: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
        paddingTop:10,
        textDecorationLine:'underline'
    },
    loading: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        margin: 10,
        paddingTop: 250
    },
});