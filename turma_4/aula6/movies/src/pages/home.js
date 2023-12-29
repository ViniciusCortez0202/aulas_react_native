import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { getMoviesPerPage } from '../model/movies_model';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


export default function Home() {

    const [movies, setMovies] = useState([]);
    const page = useRef(1);

    const loadMovies = async () => {
        const result = await getMoviesPerPage(page.current)
        const moviesConcat = movies.concat(result)
        setMovies(moviesConcat);
    }

    useEffect(() => {
        loadMovies();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                    page.current += 1;
                    loadMovies()
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.content}>
                            <Image style={styles.img} source={{ uri: item?.poster }} />
                            <View style={styles.infoContent}>
                                <Text style={styles.title}>{item?.title}</Text>
                                <View style={styles.releaseContent}>
                                    <Text style={styles.release}>{item?.release}</Text>
                                    <View style={styles.avgContent}>
                                        <Text style={styles.avgText}>{item?.avg}</Text>
                                        <MaterialIcons
                                            name='star'
                                            size={28}
                                        />
                                    </View>
                                </View>
                                <ScrollView nestedScrollEnabled>
                                    <Text>{item?.description}</Text>
                                </ScrollView>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#fff"
    },
    content: {
        flexDirection: 'row',
        height: 175,
        width: Dimensions.get("window").width - 125
    },
    img: {
        width: 125,
        height: 175
    },
    infoContent: {
        paddingStart: 10,
        backgroundColor: "#F5F5F5",
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    releaseContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    release: {
        fontSize: 16,
        fontWeight: '500'
    },
    avgContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avgText: {
        fontSize: 16,
        fontWeight: '400'
    }
})