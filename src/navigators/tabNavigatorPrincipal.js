import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../admin/navigationAdmin';
import ShowPetition from '../Components/showPetition';
import AddPetition from '../admin/menuAdmin';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="home"
            tabBarOptions={{
            activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                tabBarLabel: 'Home',

            }}
            />
            <Tab.Screen
            name="Petitions"
            component={ShowPetition}
            options={{
                tabBarLabel: 'peticiones',

            }}
            />
                        <Tab.Screen
            name="Agregar Peticion"
            component={AddPetition}
            options={{
                tabBarLabel: 'Agregar',

            }}
            />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default MyTabs;