import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAdmin from './menuAdmin';
import AddPetition from './petitions/addPetition';
import ShowPetition from '../Components/showPetition';
import Home from '../header/Header';

const Stack = createStackNavigator();
function NavigationAdmin() {
    return (      
        <Stack.Navigator
            initialRouteName = "home"
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="menu" component={MenuAdmin} />
          <Stack.Screen name="add" component={AddPetition} />
          <Stack.Screen name="show" component={ShowPetition} />
        </Stack.Navigator>
      
    );
  }
  
  export default NavigationAdmin;