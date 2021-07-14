import React from 'react'
import { Dimensions, Image } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';
import { useState } from 'react';
import ImageColors from 'react-native-image-colors';
import { useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const windowwidth = Dimensions.get('window').width


interface Props {
    pokemon: SimplePokemon;
}


const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey')

    const navigation = useNavigation();


    useEffect(() => {
        const colors = ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
            .then(colors => {
                (colors.platform === 'android') ?
                    setBgColor(colors.dominant || 'grey')
                    :
                    setBgColor(colors.background || 'grey')

            })
    })


    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={
                () => navigation.navigate('Pokemonscreen',
                    { simplePokemon: pokemon,
                         color: bgColor
                    })
            }
        >
    <View style={{
        ...styles.cardContainer,
        width: windowwidth * 0.4,
        backgroundColor: bgColor
    }}>

        {/* Nomobre y id de pokemon */}
        <View >
            <Text style={styles.name}>
                {pokemon.name}
                {'\n#' + pokemon.id}
            </Text>
        </View>


        <Image

            source={require('../assets/pokebola-blanca.png')}

            style={styles.pokebola}
        ></Image>


        <FadeInImage

            uri={pokemon.picture}
            style={styles.pokemonImage}

        >

        </FadeInImage>
    </View>
        </TouchableOpacity >
    )
}

export default PokemonCard
