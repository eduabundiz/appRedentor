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
import Card from '../Components/card';

class Header extends Component{
    handleClickAdmin = () =>{
        this.props.navigation.navigate("menu");
        console.log(this.props.navigation.navigate("menu"))
    }
    render(){
        return (
            
            <View style={styles.containerAll}>
                <View style={{flex:1}}>
                    <LinearGradient
                    colors ={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.header,{flex:1}}>
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
                </View>
                <View style={styles.main}>
                    <View style={styles.container}>
                        <Image 
                        style = {styles.img}
                        source ={ require('../../assets/logo.png')}
                        />
                    </View>
                    <View style={styles.container}>
                    <Card 
                        title="Información acerca de la iglesa"
                        content="Type herLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
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
                </View>
                <View style={{flex:3}}>

                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({    
    containerAll:{
        flex: 1,
        backgroundColor:'white'
    }, 
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

    },
    main:{
        flex:6,
        alignItems:"center"
    }

})


export default Header;

