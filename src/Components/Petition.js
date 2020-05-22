
import React ,{Component} from 'react';
import { Text, View,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function selectPetition(props){
    
}

function Peticiones(props) {
    return(
        
    <LinearGradient 
    colors={['white', '#FAD200', '#FAD200']}
    style={styles.container}
    onPress={selectPetition(props)}
    >
     {/* <View style={styles.container}> */}
        <View style={{backgroundColor:'transparent'}}>
            <Text style={styles.id}>id = {props.idPeticion}</Text>
        </View>
        
        <View style={styles.up}>
            <View style={styles.left}>   
                <Text style={styles.category}>{props.Nombre}</Text>            
            </View> 
            <View style={styles.right}>
                <View style={styles.rightUp}>
                    <Text style={styles.name}>{props.Nombre}</Text>   
                    <Text >-</Text>  
                    <Text style={styles.place}>{props.ciudad}</Text>                   
                </View>    
                <Text style={styles.date}>{props.fechaSubida}</Text>             
            </View>  
        </View>    

        <View style={styles.down} >
            <Text style={styles.text}>{props.peticion}</Text>                     
        </View>
    {/* </View> */}
    </LinearGradient>
    
    );
};

const styles = StyleSheet.create({
    container:{        
        marginBottom:20,
        borderRadius: 10,
        backgroundColor: '#FAD200', 
        flexWrap: "wrap" ,
        minHeight:80,
        borderColor:'gray',
        borderWidth:2,
        padding:2,
        maxHeight:150
    },
    id:{                
        borderRadius:100,
        padding:5,
        textAlign:'left',
        fontSize:16,
        color:'purple',
        fontWeight:'700',
        marginLeft:20
        
    },  
    up:{
        flexDirection:'row',
        justifyContent: "space-between",
        
    },
    left:{
        alignSelf: "center",
        justifyContent:"center",
        maxWidth:'70%'
    },
    category:{
        fontSize: 24,        
        fontFamily:'open-sans',
        fontWeight: '900',        
        marginHorizontal: 5,
    },
    right:{
               
        justifyContent: "flex-end",
        maxWidth:"70%"
        
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
        color:"black"
    },

})

export default Peticiones;
