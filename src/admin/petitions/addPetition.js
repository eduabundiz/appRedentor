import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Switch,} from 'react-native';
import {Input,Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
class AddPetition extends Component{    
    state ={
        name:'', email:'', city: '',
        category:'',date:'',petition:''
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
      changeDate=(inputText) => {
        this.setState({date:inputText});
      }
      changePetition=(inputText) => {
        this.setState({petition:inputText});        
      }
    //#endregion
    sendPetition = () =>{

        console.log(this.state.name+"&email="+this.state.email+"&city="+this.state.category+"&duration="+this.state.date+
        "&petition="+this.state.petition)
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {            
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:       
       if(xhttp.responseText == "1"){
       alert(
         "Gracias por su petición",
         "Estaremos orando por esta petición confíe en Dios",
         [
           {text: 'ok'},
         ],
         {cancelable: false}

       );
       {this.props.navigation.goBack()}
       }
       else{
           alert("nope")
       }
    }    
}.bind(this);
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/uploadPetition.php?name="+
this.state.name+"&email="+this.state.email+"&city="+this.state.city+"&category="+this.state.category+
"&duration="+this.state.date+"&petition="+this.state.petition,
true);
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
                    onChangeText={this.changeEmail}
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Ciudad"
                    placeholder ="Guadalajara"
                    onChangeText={this.changeCity}
                    
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Categoria:"
                    placeholder ="Sanidad"   
                    onChangeText={this.changeCategory}                 
                />
                <View style={styles.center}>
                <Text style = {styles.label}>Fecha de eliminación</Text>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2020-04-25"
                    maxDate="2020-05-02"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
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
                    onChangeText={this.changePetition}
                    
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
                onPress ={this.sendPetition}
                
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