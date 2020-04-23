
import React ,{Component} from 'react';
import { Text, View,StyleSheet} from 'react-native';




function Peticiones(props) {
    return(
    
    <View style={styles.container}>
        <View style={styles.up}>
            <View style={styles.left}>   
                <Text style={styles.category}>Category</Text>            
            </View> 
            <View style={styles.right}>
                <View style={styles.rightUp}>
                    <Text style={styles.name}>Name</Text>   
                    <Text style={styles.place}>place</Text>                   
                </View>    
                <Text style={styles.date}>date</Text>             
            </View>  
        </View>          
        <View style={styles.down} >
            <Text style={styles.text}>loremipsumafdsf   fs df 
            dfasdfasdfdskfmsdlkfaslicbes qunasdf df dfsf f</Text>                     
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        
        backgroundColor: 'rgb(23,32,138)',        
    },
    up:{
        justifyContent: 'space-between',
        resizeMode:'contain'
    },
    left:{
        
    },
    category:{
        fontSize: 16,
        fontFamily:'open-sans'
    },
    right:{
        justifyContent: 'flex-end'
    },
    rightUp:{
        justifyContent: 'space-between',
    },
    name:{
        fontSize: 12,
        color: 'gray',
    },
    place:{
        fontSize: 12,
        color: 'gray',

    },
    date:{
        fontSize: 12,
        color: 'gray',
    },
    down:{
        
    },
    text:{
        
    },

})

export default Peticiones;
