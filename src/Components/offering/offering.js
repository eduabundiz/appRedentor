import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Input} from 'react-native-elements';
import Card from '../card';

class Offering extends Component{

    render(){
        return(
            <View>
                <Card
                title ="¿Cómo Ofrendar?"
                content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e"
                />              
                <Input 
                label="Cantidad a donar"
                placeholder="$2,000"
                containerStyle=""
                labelStyle=""
                />
                <Input 
                label="Número de tarjeta"
                placeholder="1234 5678 9876 0000"
                containerStyle=""
                labelStyle=""
                />
                <Input 
                label="Fecha de caducidad"
                placeholder=""
                containerStyle=""
                labelStyle=""
                />
                <Input 
                label=""
                placeholder=""
                containerStyle=""
                labelStyle=""
                />
                
            </View>
        )
    }
}

export default Offering;