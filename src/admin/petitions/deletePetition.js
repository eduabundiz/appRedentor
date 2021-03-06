import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import ShowPetition from '../../Components/showPetition';
class DeletePetition extends React.Component{
    state = {
        id:''
    }

    handlerChange = (input) =>{
        this.setState({
            id:input
        })
    }

     handler = () =>{         
        return fetch('https://unshorn-flares.000webhostapp.com/deletePetition.php?id='+this.state.id)        
        .then((response) => response.json())
        .then((json) => {            
            if(json==1){
                alert("Se elimino")
            }else {
                alert("No se elimino")
            }
          return json;
        })
    }
    render(){

        return(
            <View style={styles.container}>
                <Text>Seleccione el número de la petición a eliminar</Text>
                <TextInput 
                    placeholder='1'
                    style={styles.input}
                    onChangeText={this.handlerChange}
                />
                <Button 
                title='enviar'
                onPress={this.handler}
                />
                <ShowPetition />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        margin:5
    }
})
export default DeletePetition;