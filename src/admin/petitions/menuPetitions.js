import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class MenuPetitions extends Component{

    render(){
        return(
            <View style={stlyes.all}>
                <View style={stlyes.header}>
                    <Text style={stlyes.text}>Peticiones</Text>
                </View>

                <View style={stlyes.containerButton}>
                    <Button                     
                    buttonStyle= {stlyes.petition}
                    title="Agregar Petición"
                    color="#FFA900"
                    titleStyle={stlyes.tp}
                    
                    /> 
                    <Button
                    buttonStyle={stlyes.button}
                    title="Editar Petición" 
                    disabled={true}
                    /> 
                    <Button 
                    buttonStyle={stlyes.button}
                    title="Eliminar Petición"
                    disabled={true}
                    />                    
                    <Button 
                    buttonStyle={stlyes.back}
                    title="Regresar"
                    color ="white"
                    
                    /> 
                </View>

            </View>
        )
    }
}
const stlyes= StyleSheet.create({
    all:{
        backgroundColor:"blue",        
    },
    header:{
        backgroundColor:"black"
    },
    text:{
        color:"white",
        textAlign:"center",
        fontFamily:"open-sans",
        fontSize:26,
        fontWeight:"900"
    },  
    containerButton:{                                    
    },
    button:{
        
        marginVertical:20,
        marginHorizontal:50,        
        flex: 1,
        borderRadius:5
    },
    petition:{
        backgroundColor: "#FFA900",
        marginVertical:20,
        marginHorizontal:50,
        borderRadius:5
        
    },
        tp:{
            color:"black",
            fontSize:20,
            textTransform:"uppercase",            
        },
    back:{
        backgroundColor: "gray",
        marginVertical:20,
        marginHorizontal:50, 
        borderRadius:5
    },    
})

export default MenuPetitions;