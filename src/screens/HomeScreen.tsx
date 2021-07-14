import React from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { styles } from '../theme/appTheme'
import { usePokemonPagina } from '../hooks/usePokemonPagina';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/pokemonCard';

const HomeScreen = () => {

    const { simplePokemon, loadPokemons } = usePokemonPagina();

    // console.log(simplePokemon)

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBg}
            ></Image>

            <View
                style={{
                    ...styles.globalMargin,
                    alignItems:'center',
                    
                }}
            >

                <FlatList

                    data={simplePokemon}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                    //header
                    ListHeaderComponent={(
                        <Text style={styles.title}> Pokedex</Text>
                    )}



                    //render del componente de pokemons
                    renderItem={({ item }) => (<PokemonCard pokemon={item}></PokemonCard>)}

                    //scroll infinito
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={<ActivityIndicator style={{ height: 100, }} size={20} color='grey'></ActivityIndicator>}

                ></FlatList>
            </View>



        </>
    )
}

export default HomeScreen
