import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet } from 'react-native';
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
          <Stack.Screen name="home" component={Home} 
          options={{headerMode: 'none', headerShown: false}}
          />
          <Stack.Screen name="menu" component={MenuAdmin}
          options={{
            title: 'Menu Administrador',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}
          />
          <Stack.Screen name="menuPetition" component={MenuPetition} 
          options={{
            title: 'Menu de Peticiones',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }} />
          <Stack.Screen name="addPetition" component={AddPetition} 
          options={{
            title: 'Agregar Petición',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="show" component={ShowPetition}  
          options={{
            title: 'Peticiones',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="search" component={SearchPetition}  
          options={{
            title: 'Buscar Petición',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="edit" component={Edit}  
          options={{
            title: 'Editar Petición',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="delete" component={Delete} 
          options={{
            title: 'Eliminar Petición',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          
          <Stack.Screen name="menuNotice" component={MenuNotice} 
          options={{
            title: 'Menú de avisos',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="addNotice" component={AddNotice} 
          options={{
            title: 'Agregar Aviso',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="searchNotice" component={SearchNotice} 
          options={{
            title: 'Buscar Aviso a modificar',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="editNotice" component={EditNotice} 
          options={{
            title: 'Editar Aviso',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
          <Stack.Screen name="deleteNotice" component={DeleteNotice} 
          options={{
            title: 'Eliminar aviso',
            headerStyle: styles.header,
            headerTintColor: styles.tint,
            headerTitleStyle: styles.title,
          }}/>
        </Stack.Navigator>
      
    );
  }
  
  const styles = StyleSheet.create({
    header:{
      backgroundColor: '#35487A'
    },
    tint:{

    },
    title:{
      color:'white',
      fontSize:24,
      textAlign:'center'
    }
  })

  export default NavigationAdmin;