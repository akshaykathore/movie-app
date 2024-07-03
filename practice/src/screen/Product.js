

// step 1- fetch the API and check the data in the console
// step 2- use the data to update the state and use FlatList to render the data
// step 3 -handle the Errors
// step 4 - add loading




import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View ,Image, ActivityIndicator} from "react-native";
import { FlatList } from "react-native";


const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProduct();
    }, [])
    const getProduct = () => {
        const URL = "https://fakestoreapi.com/products";
        fetch(URL).then((res) => {
            if (!res.ok){
                throw new Error ("someting went wrong")
            }
            return res.json();
        }).then((data) => {
            setProducts(data);
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <View style={{justifyContent:'center',alignItems:'center',textAlign:'center', marginVertical: 40 }}>
           
            <FlatList data={products} renderItem={({item}) => <View style={{backgroundColor:'#f0f8ff',marginVertical:10,padding:20}}>
            <Image style={{width:200,height:200,marginLeft:50}} source={{uri:item.image}}/>
                <Text style={{fontSize:18,textAlign:'center'}}>{item.id}</Text>
                <Text style={{fontSize:18,textAlign:'center',fontWeight:'bold',marginBottom:10}}>{item.title}</Text>
                <Text style={{fontSize:22,fontWeight:'bold',marginBottom:10}}> Price:{item.price}</Text>
                <Text style={{fontSize:15,textAlign:'center',marginBottom:10}}>{item.description}</Text>
                <Text style={{fontSize:18,marginBottom:10}}>{item.category}</Text>
                <Text style={{fontSize:18}}>{item.rating.rate}</Text>
            <Text style={{fontSize:18}}>{item.rating.count}</Text>
            </View>}/>
        </View>
    );
}

const styles = StyleSheet.create({

});
export default Product; 