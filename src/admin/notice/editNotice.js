import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Switch,} from 'react-native';
import {Input,Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
class EditPetition extends Component{    
    constructor(props){
        super(props);
        
        const info = props.route.params.info
        this.state={
            title:info.title,
            content:info.content,
            id:info.idNotice

        }
        this.myRef = React.createRef();
    }
    // state ={
    //      email:'', city: '',
    //     category:'',date:'',petition:''
    // }
    //#region setStateFunctions
      changeTitle=(inputText) => {        
        this.setState({title:inputText});        
      }
      changeContent=(inputText) => {
        this.setState({content:inputText});
      }

    //#endregion
    sendNotice = () =>{
        console.log("https://unshorn-flares.000webhostapp.com/editNotice.php?id="+
        this.state.id+"&title="+this.state.title+"&content="+this.state.content)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {            
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:    
        
        console.log(xhttp.responseText)
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
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/editNotice.php?id="+
this.state.id+"&title"+this.state.title+"&content="+this.state.content,
true);
xhttp.send();

    }
    render(){
        return(
            <ScrollView  contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style = {styles}>
                <View style = {styles.body}>
                    <Text style = {styles.text}>Editar aviso</Text>
                </View>
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    placeholderTextColor = "#7B8D93"
                    label = "Título del aviso:"
                    placeholder ="Lo que desees avisar"
                    onChangeText={this.changeTitle}                    
                    value={this.state.title}
                    
                />
                <Input 
                    containerStyle= {styles.container}
                    labelStyle = {styles.label}
                    label = "Correo electrónico"
                    placeholder ="example@outlook.com"
                    keyboardType = "email-address"
                    onChangeText={this.changeContent}
                    value={this.state.email}
                />             
                <Button 
                    titleStyle = {styles.titleButton}
                    title = "Registrar"                
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
export default EditPetition ;