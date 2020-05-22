
import React ,{Component} from 'react';
import { Text, View,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Card from './card';

function selectNotice(props){
    
}

function Notice(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.id}>id = {props.idNotice}</Text>
            <Card 
                title= {props.title}
                
                content={props.content}
                
            />
        </View>

    
    );
};

const styles = StyleSheet.create({
    container:{               
       backgroundColor:'purple',
       padding:0,       
       borderRadius:15,
       marginBottom:10,     
       paddingBottom:0  
    },
    id:{                
        borderRadius:100,
        paddingTop:5,
        textAlign:'center',
        fontSize:16,
        color:'white',
        fontWeight:'700',        
        
    }

})

export default Notice;
