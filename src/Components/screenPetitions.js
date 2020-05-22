import React from 'react';
import {View,StyleSheet,Button,Text,ScrollView} from 'react-native'
import ShowPetitions from './showPetition';
class ScreenPetitions extends React.Component{

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.top}>
                    <Text style={styles.title}>Peticiones</Text>
                    </View>
                    <View style={styles.main}>
                        <ShowPetitions />
                    </View>
                    <View style={styles.listButtons}>
                        <Button 
                        title="agregar"
                        color="green"
                        style={styles.button}
                        />
                        <Button 
                        title="modificar"
                        style={styles.button}
                        />
                        <Button 
                        title="eliminar"
                        color="black"
                        styleTitle={{color:'white'}}
                        style={styles.button}
                        />
                    </View>
                </View>
            </ScrollView>            
        )
    }
}

const styles = StyleSheet.create({
    button:{
        marginHorizontal:20
    },  
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    listButtons:{
        flex: 1,        
        
        flexDirection:'row',
        justifyContent:'space-around',
        margin:10

    },
    main:{
        flex:8,        
    }, 
    title:{
        fontSize:36,
        marginTop:10,
        fontWeight:'700',        
    },
    top:{        
        flex:1,
        
    }
})

export default ScreenPetitions;