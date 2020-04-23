import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {Input} from 'react-native-elements';

class AddPetition extends Component{

    render(){
        return(
            <View style = {styles}>
                <View style = {styles.body}>
                    <Text style = {styles.text}>Registrar petición</Text>
                </View>
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    placeholderTextColor = "rgba(10,14,155,.7)"
                    label = "Tu nombre:"
                    placeholder ="Nombre"
                    
                />
                <Input 
                    label = "Correo electrónico"
                    placeholder ="example@outlook.com"
                    keyboardType = "email-address"
                />
                <Input 
                    label = "Ciudad"
                    placeholder ="Guadalajara"
                    
                />
                <Input 
                    label = "Categoria:"
                    placeholder ="Sanidad"                    
                />
                <Input 
                    label = "Tiempo de registro (en la app) "
                    placeholder ="1 semana"                    
                />

                <Input 
                    label = "Su petición "
                    placeholder ="Escriba la petición por la cual quiere que oremos (Max 400 caracteres)"                    
                    multiline = {true}
                    
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    body:{
        backgroundColor:"#15406F",
        paddingVertical: 10
    },
    text:{
        textAlign: "center",
        fontSize:18,
        color: "yellow",
        fontFamily: 'opens-sans',
        fontWeight: "700"
        
    },
    container:{        
        
        backgroundColor: "white",
        marginBottom: 20
    },
    input:{

    },
    label:{
        color: 'rgb(10,20,154)'
    }
})
export default AddPetition;