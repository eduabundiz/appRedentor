import React,{Component} from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import { set } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import Notice from './notice';
class ShowNotices extends Component{
    state ={
        id:'',
        title:'',
        content:'',
        arreglo:[]
    }
    keyExtractor = item =>item.idNotice.toString()
    renderItem = ({item}) =>{
        return(
            <Notice {...item}/>
        )
    }
    EmptyComponent = () =>{
        return(<Text>Cargando elementos</Text>)
    }
    async componentDidMount(){  //async porque tendremos funciones asyncronas dentro
         
        const response = await fetch('https://unshorn-flares.000webhostapp.com/fetchNotices.php') //Devuelve promesa
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

export default ShowNotices;