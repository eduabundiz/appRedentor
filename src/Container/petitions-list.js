import React, { Component } from "react";
import {
    View,
    FlatList,
    
} from 'react-native';
class PetitionsList extends Component {

    Render(){


        return(                
        <>
                <Text style ={styles.title}>{props.title }</Text>
                {props.children}            
        </  >
        )

    }
}

export default PetitionsList;