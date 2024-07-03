import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, Dimensions, StyleSheet, ScrollView } from "react-native";

const MovieList = () => {
    const [movies2021, setMovies2021] = useState([]);
    const [movies2022, setMovies2022] = useState([]);
    const [movies2023, setMovies2023] = useState([]);
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        getMovieList(2021, setMovies2021);
        getMovieList(2022, setMovies2022);
        getMovieList(2023, setMovies2023);
    }, []);

    const getMovieList = (year, setMovies) => {
        const URL = `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`;
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .then((data) => {
                setMovies(data.results.slice(0, 7)); // Get first 7 movies
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderItem = ({ item }) => (
        <View style={[styles.card, { width: screenWidth / 2 - 20 }]}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            />
            <Text
                style={styles.title}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {item.title}
            </Text>
            <Text style={styles.overviewStyle} numberOfLines={3} ellipsizeMode="tail">
                {item.overview}
            </Text>
            <Text style={styles.vote}>
                Ratings: {item.vote_average}
            </Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.yearHeader}>2021</Text>
            <FlatList
                data={movies2021}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
                scrollEnabled={false}
                contentContainerStyle={styles.contentContainer}
            />
            <Text style={styles.yearHeader}>2022</Text>
            <FlatList
                data={movies2022}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
                scrollEnabled={false}
                contentContainerStyle={styles.contentContainer}
            />
            <Text style={styles.yearHeader}>2023</Text>
            <FlatList
                data={movies2023}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
                scrollEnabled={false}
                contentContainerStyle={styles.contentContainer3}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
    yearHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        color:'white',
        marginHorizontal:10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingBottom: 20, // Adjust the padding as needed
    },
    contentContainer3: {
        paddingBottom: 300, // Adjust the padding as needed
    },
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    overviewStyle: {
        marginVertical: 5,
        fontSize: 12,
    },
    vote: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default MovieList;
