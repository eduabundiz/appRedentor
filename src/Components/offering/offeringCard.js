import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import Card from '../card';

class OfferingCard extends Component{
    
    render(){
        
        return(
            <View style = {styles.view}>
                <Card 
                    title="¿Cómo Ofrendar?"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e"
                />
                <Input 
                label="Cantidad a donar"
                placeholder="$2,000"
                containerStyle={styles.containerInput}
                labelStyle=""
                keyboardType="number-pad"
                />
                <CreditCardInput 
                />
                <Button 
                    title="Donate"
                    buttonStyle={styles.button}
                    containerStyle={styles.btncontainer}
                    color ="#FFA900"
                    titleStyle={styles.tp}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        
    },
    containerInput:{
        marginVertical: 50
    },
    labelInput:{

    },
    button:{        
        backgroundColor: "yellow",
        textAlign:"center",
        marginTop:20,
        
    },
    btncontainer:{
        
    },
    tp:{
        color:"black",
        fontSize:20,
        textTransform:"uppercase",        
        textAlign:"center"    
    }
})
export default OfferingCard;