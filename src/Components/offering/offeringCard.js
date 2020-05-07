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
        justifyContent: "flex-end",
        textAlign:"center"
    },
    btncontainer:{
        borderColor: "black",
        borderWidth: 3
    },
    tp:{
        color:"black",
        fontSize:20,
        textTransform:"uppercase",            
    }
})
export default OfferingCard;