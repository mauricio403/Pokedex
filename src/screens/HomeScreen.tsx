import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../theme/appTheme'
import { usePokemonPagina } from '../hooks/usePokemonPagina';

const HomeScreen = () => {

    const { simplePokemon } = usePokemonPagina();

    // console.log(simplePokemon)
    
    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBg}
            ></Image>



            <Text style={styles.title}> Pokedex</Text>
        </>
    )
}

export default HomeScreen
