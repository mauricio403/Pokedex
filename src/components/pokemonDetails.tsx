import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull, Type } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}


const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,

            }}
        >
            {/* Tipos y Peso */}

            <View style={styles.containerDetails}>
                <Text style={styles.titlePokemon}>Tipo </Text>

                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.types.map(({ type }) => (
                            <Text key={type.name}
                                style={styles.regularText}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>

                {/* Peso */}

                <Text style={styles.titlePokemon}>Peso </Text>
                <Text style={styles.regularText}>{pokemon.weight} Kg </Text>








               
                {/* Habilidades */}
                <View style={styles.containerDetails}>
                    <Text style={styles.titlePokemon}>Habilidades </Text>
                    <View style={{ flexDirection: 'row' }}>

                        {
                            pokemon.abilities.map(({ ability }) => (
                                <Text key={ability.name}
                                    style={styles.regularText}
                                >
                                    {ability.name}
                                </Text>
                            ))
                        }
                    </View>
                </View>


            </View>

        </ScrollView>

    )
}

export default PokemonDetails
