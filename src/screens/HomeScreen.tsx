import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../theme/appTheme'

const HomeScreen = () => {
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
