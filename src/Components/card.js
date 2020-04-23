import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

function Card (props){
    
    return(
        <View style = {styles.container}>
            <Text style ={styles.title}>{props.title}</Text>
            <Text style ={styles.content}>{props.content}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3259C3',
        padding:10,
        margin:5
    },
    title:{
        textAlign:"center",
        fontFamily:"open-sans",
        fontSize: 28,
        fontWeight:"700",
        color: "white"
        
    },
    content:{        
        fontFamily:"open-sans",
        fontSize: 20,
        fontWeight:"300",
        color: "white",
        textAlign:"justify",

    }
})

export default Card;