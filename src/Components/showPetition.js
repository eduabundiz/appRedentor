import React,{Component} from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import { set } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import Petition from './Petition';
class ShowPetition extends Component{
    state ={
        name:'', email:'', city: '',
        category:'',date:'',petition:'',
        arreglo:[]
    }
    keyExtractor = item =>item.idPeticion.toString()
    renderItem = ({item}) =>{
        return(
            <Petition {...item}/>
        )
    }
    EmptyComponent = () =>{
        return(<Text>Cargando elementos</Text>)
    }
    async componentDidMount(){  //async porque tendremos funciones asyncronas dentro
         
        const response = await fetch('https://unshorn-flares.000webhostapp.com/fecthPetitition.php') //Devuelve promesa
        const json = await response.json() //Parsear el json //.then para que eso se realiza después de la promesa 
        console.log(json)
        this.setState({
            arreglo:json    //El arreglo de los datos lo actualizamos con la información reciboda            
        })
        // await((json)=>{
        //     this.setState({
        //         arreglo:json    //El arreglo de los datos lo actualizamos con la información reciboda
        //     })             
        //   })


    }
    changeArray = (array) =>{
        this.setState({
            arreglo:Array
        })
    }  
    handlee = () =>{console.log(this.state.arreglo)}
    
    render(){
        return(            
            
                
            <FlatList                                                 
                    data ={this.state.arreglo}
                    ListEmptyComponent = {this.EmptyComponent}                                        
                    renderItem = {this.renderItem}
                    keyExtractor ={this.keyExtractor}
            />
                    
        )
    }   
}

export default ShowPetition;