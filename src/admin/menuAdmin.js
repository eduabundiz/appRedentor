import React,{Component} from 'react';
import {View,Text,StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';

class MenuAdmin extends Component{
    handlePetitionButton = () =>{
        this.props.navigation.navigate("menuPetition");
    }
    handleNoticeButton =() =>{
        this.props.navigation.navigate("menuNotice");
    }
    render(){

        return(
            <View style={stlyes.all}>
                <View style={stlyes.header}>
                    <Text style={stlyes.text}>Administrador</Text>
                </View>

                <View style={stlyes.containerButton}>
                    <Button                     
                    buttonStyle= {stlyes.petition}
                    title="Peticiones"
                    color="#FFA900"
                    titleStyle={stlyes.tp}
                        onPress = {this.handlePetitionButton}
                    /> 
                    <Button
                    buttonStyle={stlyes.button}
                    title="Avisos" 
                    color="#FFA900"
                    titleStyle={stlyes.tp}
                        onPress = {this.handleNoticeButton}
                    /> 
                    <Button 
                    buttonStyle={stlyes.button}
                    title="Devocionales"
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

export default MenuAdmin;