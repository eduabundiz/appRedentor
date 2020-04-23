import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Petitions from '../Components/Petition';

const Stack = createStackNavigator();
function NavigatorPetition(){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "petitions" component ={Petitions} />
        </Stack.Navigator>
    )

}

export default NavigatorPetition;