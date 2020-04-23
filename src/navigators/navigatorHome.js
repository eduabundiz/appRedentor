import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../header/Header';

const Stack = createStackNavigator();
function NavigatorHeader(){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "inicio" component ={Header} />
        </Stack.Navigator>
    )

}

export default NavigatorHeader;