/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Header extends Component{
    render(){
        return (
            <SafeAreaView>
                <LinearGradient
                colors ={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.header}>
                    <Text style={styles.text}>El Redentor GDL</Text>
                </LinearGradient>
                <View style={styles.container}>
                <Image 
                style = {styles.img}
                source ={ require('../../assets/logo.png')}
                />
                </View>
                <View>
                <Image
                    style = {styles.img}
                    source ={ require('../../assets/pastor.jpg')}
                />
                <Text>Pastor Francisco Vázquez</Text>
                <Text>Llama al 331183920</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        marginTop:10,
        padding:10,
        alignSelf:"center",
        width: "100%",

    },
    text:{
        color:'yellow',
        fontSize:24,
        fontFamily:'open-sans',
        textAlign:'center',
    },
    img:{
        marginTop: 20,
        width: 200,
        height: 200,
        
    },
    container:{
        flexDirection:'row',
        justifyContent: 'center',
        backgroundColor: 'white',

    }

})


export default Header;

