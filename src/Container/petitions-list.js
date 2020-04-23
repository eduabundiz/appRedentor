import React, { Component } from "react";
import {
    View,
    FlatList,
    
} from 'react-native';
class PetitionsList extends Component {

    Render(){

        return(
            function PeticionesListLayout(props){
                return(
                    <ImageBackground
                        source={require('../../../assets/backgronund.png')}
                        style ={styles.container}
                    >                    
                        <Text style ={styles.title}>{props.title }</Text>
                        {props.children}            
                    </ImageBackground>
                )
            }

        )
    }
}

export default PetitionsList;