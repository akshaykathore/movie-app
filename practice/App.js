import React from 'react';
import { StyleSheet, View } from 'react-native';
import MovieList from './src/screen/MovieList';
import Product from './src/screen/Product';
import HomePage from './src/screen/HomePage';


export default function App() {
  return (
    <View style={styles.container}>
<HomePage/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
  }
});
