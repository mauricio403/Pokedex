import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    pokebolaBg: {
        width: 300,
        height: 300,
        position: 'absolute',
        top: -100,
        right: -100,
        opacity: 0.2

    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        top: 20,
        marginBottom: 20,
        paddingBottom: 10
    },
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'gray',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,

    },
    headerContainer: {
        height: 300,
        zIndex: 999, //al hacer scroll las cosas van abajo del hei
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,


    },
    botonRegreso: {
        position: 'absolute',
        left: 20,
        top: 10

    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,

    },
    pokebola2: {
        width: 150,
        height: 150,
        bottom: -20,
        opacity: 0.7,

    },
    pokemonImageHeader: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex:1,
        
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerDetails: {
        marginHorizontal:20,
        marginTop: 300
    },
    titlePokemon: {
        fontSize:30,
        fontWeight:'bold',
        marginTop:10

    },
    regularText: {
        fontSize:19,
        marginRight:10

    },
    basicScripts: {
        width: 100,
        height:100
    }
});