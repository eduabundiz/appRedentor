import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../admin/navigationAdmin';
import ShowPetition from '../Components/showPetition';
import ShowNotices from '../Components/showNotices';
import OfferingCard from '../Components/offering/offeringCard';
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
            name="notices"
            component={ShowNotices}
            options={{
                tabBarLabel: 'Avisos',

            }}
            />
            <Tab.Screen
            name="offering"
            component={OfferingCard}
            options={{
                tabBarLabel: 'Ofrendas',

            }}
            />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default MyTabs;