
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
                    <Text >-</Text>  
                    <Text style={styles.place}>place</Text>                   
                </View>    
                <Text style={styles.date}>date</Text>             
            </View>  
        </View>          
        <View style={styles.down} >
            <Text style={styles.text}>loremipsumafdsf   fs df 
            dfasdfasdfdskf msdlkfaslicbes qunasdf df dfsf f</Text>                     
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container:{        
        marginBottom:20,
        borderRadius: 10,
        backgroundColor: 'rgb(23,32,138)', 
        flexWrap: "wrap" 
    },
    up:{
        flexDirection:'row',
        justifyContent: "space-between",
        
    },
    left:{
        alignSelf: "center",
        justifyContent:"center"
    },
    category:{
        fontSize: 26,        
        fontFamily:'open-sans',
        fontWeight:"900",
        marginHorizontal: 5,
    },
    right:{
               
        justifyContent: "flex-end",
        
    },
    rightUp:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    name:{
        fontSize: 12,
        color: 'gray',
        marginHorizontal: 5,
    },
    place:{
        fontSize: 12,
        color: 'gray',
        marginHorizontal: 5,

    },
    date:{
        fontSize: 12,
        color: 'gray',
        textAlign: "right"
    },
    down:{
        
    },
    text:{
        color:"white"
    },

})

export default Peticiones;
