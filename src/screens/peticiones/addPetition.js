import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Switch,} from 'react-native';
import {Input,Button } from 'react-native-elements';

class AddPetition extends Component{    
    state ={
        name:'', email:'', city: '',
        category:'',time:'',petition:''
    }
    //#region setStateFunctions
    changeName=(inputText) => {
        this.setState({name:inputText});
      }
      changeEmail=(inputText) => {
        this.setState({email:inputText});
      }
      changeCity=(inputText) => {
        this.setState({city:inputText});
      }
      changeCategory=(inputText) => {
        this.setState({category:inputText});
      }
      changeTime=(inputText) => {
        this.setState({time:inputText});
      }
      changePetition=(inputText) => {
        this.setState({petition:inputText});
      }
    //#endregion
    sendPetition = () =>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
  
  
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:       
       if(xhttp.responseText == "1"){
       Alert.alert(
         "Mensaje",
         "Se insertó con exito en la base de datos",
         [
           {text: 'ok'},
         ],
         {cancelable: false}

       );
       }
    }    
};
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/altas.php?codigo="+this.state.codigo+"&nombre="+this.state.nombre+"&carrera="+this.state.carrera+"&centro="+this.state.centro, true);
xhttp.send();

    }
    render(){
        return(
            <ScrollView  contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style = {styles}>
                <View style = {styles.body}>
                    <Text style = {styles.text}>Registrar petición</Text>
                </View>
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    placeholderTextColor = "#7B8D93"
                    label = "Tu nombre:"
                    placeholder ="Nombre Apellido"
                    onChangeText={this.changeName}
                    
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Correo electrónico"
                    placeholder ="example@outlook.com"
                    keyboardType = "email-address"
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Ciudad"
                    placeholder ="Guadalajara"
                    
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Categoria:"
                    placeholder ="Sanidad"                    
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Tiempo de registro (en la app) "
                    placeholder ="1 semana"                    
                />

                <Input 
                    
                    inputContainerStyle = { styles.border}
                    labelStyle = {styles.label}
                    label = "Su petición "
                    placeholder ="Escriba la petición por la cual quiere que oremos (Max 400 caracteres)"                                        
                    multiline = {true}
                    
                />
                    <View style= {styles.center}>
                        
                    <Switch 
                        trackColor={{ false: "#767577", true: "green" }}
                        value = {true}
                        disabled= {true}                        
                        thumbColor= "gray"
                    />  
                    <Text>Acepto terminos y condiciones</Text>
                    </View>
                <Button 
                titleStyle = {styles.titleButton}
                title = "Registrar"                
                buttonStyle = {styles.buttonStyle}
                
                />
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    body:{
        backgroundColor:"#3259C3",
        paddingVertical: 10
    },
    text:{        
        marginLeft: 10,
        fontSize:20,
        color: "white",
        fontFamily: 'opens-sans',
        fontWeight: "700",
        
        
    },
    container:{                
        backgroundColor: "white",        
    },
    input:{

    },
    border:{        
        borderWidth: 1
    },  
    label:{
        color: '#011856',
        marginTop:10,
        marginBottom: 0
    },
    center:{
        flex: 1,
    alignItems: "center",
    justifyContent: "center"
    },
    titleButton:{
        color: "black",
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight:'700'
    },
    buttonStyle:{
        backgroundColor :"#FFDD2B",
        marginHorizontal:10
    }
})
export default AddPetition;