import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component{
    handleClickAdmin = () =>{
        this.props.navigation.navigate("menu");
        console.log(this.props.navigation.navigate("menu"))
    }
    render(){
        return (
            <SafeAreaView>
                <LinearGradient
                colors ={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.header}>
                    <View>
                    <Text style={styles.text}>El Redentor GDL</Text>
                    < Button 
                          icon={
                            <Icon
                              name="user"
                              size={15}
                              color="white"
                            />
                          }
                          onPress={this.handleClickAdmin}
                    />
                    </View>
                </LinearGradient>
                <View style={styles.container}>
                <Image 
                style = {styles.img}
                source ={ require('../../assets/logo.png')}
                />
                </View>
                <View style={styles.container}>
                <Image
                    style = {styles.img}
                    source ={ require('../../assets/pastor.jpg')}
                />                                
                </View>
                <Text style={styles.text2}>Pastor Francisco Vázquez</Text>
                <Text style={styles.text2}>Llama al 331183920</Text>
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
    text2:{        
        fontSize:20,
        fontFamily:'open-sans',
        textAlign:'center',
    },
    img:{
        marginTop: 20,
        resizeMode:'contain',
        width: 120,
        height: 160,
        
    },
    container:{
        flexDirection:'row',
        justifyContent: 'center',
        backgroundColor: 'white',

    }

})


export default Header;

