import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Switch,} from 'react-native';
import {Input,Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
class AddNotice extends Component{    
    state ={
        title:'',
        content:''
    }
    //#region setStateFunctions
     changeTitle=(inputText) => {        
        this.setState({title:inputText});        
      }
      changeContent=(inputText) => {
        this.setState({content:inputText});
      }

    //#endregion
    sendNotice = () =>{

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
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/uploadNotice.php?title="+
this.state.title+"&content="+this.state.content,
true);
xhttp.send();

    }
    render(){
        return(
            <ScrollView  contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style = {styles}>
                <View style = {styles.body}>
                    <Text style = {styles.text}>Registrar Aviso</Text>
                </View>
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    placeholderTextColor = "#7B8D93"
                    label = "Titulo del aviso:"
                    placeholder ="Bienvenidos"
                    onChangeText={this.changeTitle}
                    
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Contenido"
                    placeholder ="Lo que quieras comunicar"                    
                    onChangeText={this.changeContent}
                />
                
                <Button 
                titleStyle = {styles.titleButton}
                title = "Mandar aviso"                
                buttonStyle = {styles.buttonStyle}
                onPress ={this.sendNotice}
                
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
export default AddNotice;