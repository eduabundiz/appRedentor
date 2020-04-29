import React,{Component} from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import { set } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import Petition from './Petition';
class ShowPetition extends Component{
    state ={
        name:'', email:'', city: '',
        category:'',date:'',petition:'',
        arreglo:{}
    }
    keyExtractor = item =>item.idPeticion.toString()
    renderItem = ({item}) =>{
        return(
            <Petition {...item}/>
        )
    }
    async componentDidMount(){
        const response = await fetch('https://unshorn-flares.000webhostapp.com/fecthPetitition.php')
        .then((response) => response.json())
        .then((json)=>{
            this.setState({
                arreglo:json
            })            
          })
        .then(()=>{console.log(this.state.arreglo)})
          .catch(function(error) {
          console.log(error.message);
           
            throw error;
          });
                
        // const data =         
        // console.log(data)
        // const jason = data.json()
        // request.responseText
    // const {data} = await query.json();          
        
    }
    changeArray = (array) =>{
        this.setState({
            arreglo:Array
        })
    }  
    handlee = () =>{console.log(this.state.arreglo)}
    
    render(){
        return(
            <ScrollView>
            <View>
                <Text>{this.name}</Text>
                <Button 
                    title="press"
                    onPress={this.handlee}
                />
                <FlatList 
                        
                        
                        data ={this.state.arreglo}
                        ListEmptyComponent = {()=><Text>Vacio</Text>}                                        
                        renderItem = {this.renderItem}
                        keyExtractor ={this.keyExtractor}
                />
            </View>
            </ScrollView>
        )
    }   
}

export default ShowPetition;