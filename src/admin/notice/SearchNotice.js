import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import ShowNotices from '../../Components/showNotices';
class SearchNotice extends React.Component{
    state = {
        id:''
    }

    handlerChange = (input) =>{
        this.setState({
            id:input
        })
    }

     handler = () =>{         
        return fetch('https://unshorn-flares.000webhostapp.com/searchNotice.php?id='+this.state.id)        
        .then((response) => response.json())
        .then((json) => {            
            this.props.navigation.navigate("editNotice",{info:json});
          return json;
        })
    }
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.search}>
                    <Text style={styles.label}>Seleccione el número del aviso a editar</Text>
                    <TextInput 
                        placeholder='1'
                        style={styles.input}
                        onChangeText={this.handlerChange}
                    />
                    <Button 
                    title='enviar'
                    onPress={this.handler}
                    color='#FFA900'
                    />
                </View>
                <ShowNotices />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',        
    },
    input:{
        margin:5,
        textAlign:'center',
        color:'white'
    },
    search:{
        backgroundColor:'#e1e1e1',
        margin:20,
        padding:15,
        borderColor:'black',
        borderWidth:1
    },
    label:{
        fontSize:18,
        fontWeight:"500"
    }
})
export default SearchNotice;