import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import ShowNotice from '../../Components/showNotices';
class DeletNotice extends React.Component{
    state = {
        id:''
    }

    handlerChange = (input) =>{
        this.setState({
            id:input
        })
    }

     handler = () =>{         
        return fetch('https://unshorn-flares.000webhostapp.com/deleteNotice.php?id='+this.state.id)        
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
                <Text>Seleccione el número del aviso a eliminar</Text>
                <TextInput 
                    placeholder='1'
                    style={styles.input}
                    onChangeText={this.handlerChange}
                />
                <Button 
                title='enviar'
                onPress={this.handler}
                />
                <ShowNotice />
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
export default DeletNotice;