import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class MenuPetitions extends Component{
    handlePetitionAdd = () =>{
        this.props.navigation.navigate("addPetition");
    }
    handlePetitionEdit = () =>{
        this.props.navigation.navigate("search");
    }
    handlePetitionDelete = ()=>{
        this.props.navigation.navigate("delete");
    }
    render(){
        return(
            <View style={stlyes.all}>


                <View style={stlyes.containerButton}>
                    <Button                     
                    buttonStyle= {stlyes.petition}
                    title="Agregar Petición"
                    color="#FFA900"
                    titleStyle={stlyes.tp}
                    onPress = {this.handlePetitionAdd}
                    /> 
                    <Button
                    buttonStyle={stlyes.petition}
                    title="Editar Petición" 
                    color="#FFA900"
                    titleStyle={stlyes.tp}
                    onPress = {this.handlePetitionEdit}
                    /> 
                    <Button 
                    buttonStyle={stlyes.petition}
                    title="Eliminar Petición"
                    color="#FFA900"
                    titleStyle={stlyes.tp}
                    onPress = {this.handlePetitionDelete}
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
        height:'100%',
        backgroundColor:"#3259C3",   
        justifyContent:'center', 
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