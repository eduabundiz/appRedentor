import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuAdmin from './menuAdmin';
import AddPetition from './petitions/addPetition';
import MenuPetition from './petitions/menuPetitions';
import ShowPetition from '../Components/showPetition';
import Home from '../header/Header';
import SearchPetition from './petitions/SearchPetition';
import Edit from './petitions/editPetition';
import Delete from './petitions/deletePetition';

import MenuNotice from './notice/menuNotice';
import AddNotice from './notice/addNotice';
import SearchNotice from './notice/SearchNotice';
import EditNotice from './notice/editNotice';
import DeleteNotice from './notice/deleteNotice';

const Stack = createStackNavigator();
function NavigationAdmin() {
    return (      
        <Stack.Navigator
            initialRouteName = "home"
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="menu" component={MenuAdmin} />
          <Stack.Screen name="menuPetition" component={MenuPetition} />
          <Stack.Screen name="addPetition" component={AddPetition} />
          <Stack.Screen name="show" component={ShowPetition} />
          <Stack.Screen name="search" component={SearchPetition} />
          <Stack.Screen name="edit" component={Edit} />
          <Stack.Screen name="delete" component={Delete} />
          
          <Stack.Screen name="menuNotice" component={MenuNotice} />
          <Stack.Screen name="addNotice" component={AddNotice} />
          <Stack.Screen name="searchNotice" component={SearchNotice} />
          <Stack.Screen name="editNotice" component={EditNotice} />
          <Stack.Screen name="deleteNotice" component={DeleteNotice} />
        </Stack.Navigator>
      
    );
  }
  
  export default NavigationAdmin;