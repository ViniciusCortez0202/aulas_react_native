import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { pokemonName } from '../models/pokemon';
import { ActivityIndicator, Searchbar, Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Carousel, { PaginationLight } from 'react-native-x-carousel';


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);
    const pokemonNotFound = useRef("");
    const width = Dimensions.get('window').width;
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);


    const searchPokemon = async (name) => {
        setIsLoading(true);

        try {
            setPokemon((await pokemonName(name)));
        } catch (error) {
            pokemonNotFound.current = name;
            setPokemon(null);
        }
        setSearchQuery("");
        setIsLoading(false);
    }

    useEffect(() => {
        searchPokemon("pikachu");
    }, [])

    if (isLoading) return <ActivityIndicator></ActivityIndicator>

    return (
        <View styles={styles.container}>
            <StatusBar style='auto'/>
            <Searchbar
                style={styles.searchBar}
                placeholder='Search'
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={() => {
                    searchPokemon(searchQuery);
                }}
            />
            {
                pokemon == null ?
                    (
                        <>
                            <View style={styles.errorContent}>
                                <Text variant='bodyLarge' >
                                    Não foi possível encontrar {pokemonNotFound.current}
                                </Text>
                            </View>
                        </>
                    ) :
                    (
                        <>
                            <View style={styles.contentUp}>
                                <Carousel
                                    data={pokemon.images}
                                    renderItem={(data) => {
                                        return <Image
                                            key={data.id}
                                            style={{ height: width * 0.5, width }}
                                            source={{ uri: data.image }}
                                        />
                                    }}
                                    loop
                                    autoplay
                                />
                            </View>
                            <View style={styles.content}>
                                <Text variant='displayMedium'>{pokemon.pokemonName}</Text>
                                <View style={styles.info}>
                                    <Text variant='headlineSmall'>Altura: {pokemon.height}</Text>
                                    <Text variant='headlineSmall'>Peso: {pokemon.weight}</Text>
                                </View>
                                <View style={styles.list}>
                                    <View>
                                        <ScrollView>
                                            {
                                                pokemon.types.map((element, index) => {
                                                    return <Text variant='titleLarge' key={index}>{element}</Text>
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                    <View>
                                        <ScrollView>
                                            {
                                                pokemon.moves.map((element, index) => {
                                                    return <Text variant='titleLarge' key={index}>{element}</Text>
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                    <View>
                                        <ScrollView>
                                            {
                                                pokemon.abilities.map((element, index) => {
                                                    return <Text variant='titleLarge' key={index}>{element}</Text>
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>

                        </>
                    )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    errorContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar:{
        margin: 10
    },
    container: {
        flex: 1
    },
    content: {
        alignItems: 'center'
    },
    info: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    list: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})