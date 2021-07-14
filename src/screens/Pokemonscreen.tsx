import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigator';
import { styles } from '../theme/appTheme';
import { color } from 'react-native-reanimated';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/pokemonDetails';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


interface Props extends StackScreenProps<RootStackParams, 'Pokemonscreen'> { };

const Pokemonscreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params

    const { isLoading, pokemon } = usePokemon(simplePokemon.id);

    return (

        <View style={{ flex: 1 }}>
            {/* Header de pokemon */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>

                {/* Boton de regreso */}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.2}
                    style={{
                        ...styles.botonRegreso
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={35}
                    ></Icon>

                </TouchableOpacity>


                {/* Nombre Pokemon */}

                <Text

                    style={{
                        ...styles.pokemonName,
                        top: 30
                    }}>
                    {simplePokemon.name + '\n'}  #{simplePokemon.id}
                </Text>

                {/* Pokebola */}

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola2}
                ></Image>

                <FadeInImage
                    uri={simplePokemon.picture}
                    style={styles.pokemonImageHeader}
                >

                </FadeInImage>


            </View>

            {/* Detalles y carga */}

                    {
                        isLoading ? (
                            <View style={styles.loadingIndicator}>
                            <ActivityIndicator
                                color={color}
                                size={50}
            
                            >
            
                            </ActivityIndicator>
                        </View>
                        ) : (
                            <PokemonDetails pokemon={pokemon}></PokemonDetails>
                        )
                    }
           
        </View>
    )
}

export default Pokemonscreen
