import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MovieList from './MovieList';

const HomePage = () => {
    const [activeButton, setActiveButton] = useState('All');

    const handlePress = (genre) => {
        setActiveButton(genre);
    };

    const genres = ['All', 'Action', 'Comedy', 'Horror', 'Drama', 'Sci-Fi'];

    return (
        <View style={styles.container}>
           
                <View style={styles.header}>
                    <Text style={styles.headerText}>MOVIEFIX</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {genres.map((genre) => (
                        <TouchableOpacity
                            key={genre}
                            style={[
                                styles.button,
                                activeButton === genre && styles.activeButton,
                            ]}
                            onPress={() => handlePress(genre)}
                        >
                            <Text 
                                style={[
                                    styles.buttonText,
                                    activeButton === genre && styles.activeButtonText,
                                ]}
                            >
                                {genre}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            
            <MovieList/>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        marginTop:20,
    },
    header: {
        marginVertical:20,
        marginHorizontal:10,
    },
    
    headerText: {
        color: 'red',
        fontSize: 35,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom:20,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    activeButton: {
        backgroundColor: 'red',
    },
    activeButtonText: {
        color: 'white',
    },
});

export default HomePage;
