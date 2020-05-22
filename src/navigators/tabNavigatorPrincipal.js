import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../admin/navigationAdmin';
import ShowPetition from '../Components/showPetition';
import ShowNotices from '../Components/showNotices';
import OfferingCard from '../Components/offering/offeringCard';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="home"
            tabBarOptions={{
            activeTintColor: 'white',
            inactiveBackgroundColor:'#3259C3',
            inactiveTintColor:'#e1e1e1',
            activeBackgroundColor:'#35487A'
            }}
        >
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <IconAwesome name="home" color={color} size={size} />
                  ),
            }}
            />
            <Tab.Screen
            name="Petitions"
            component={ShowPetition}
            options={{
                tabBarLabel: 'peticiones',
                tabBarIcon: ({ color, size }) => (
                 <Icon5 name="praying-hands" color={color} size={size} />
          ),
            }}
            />
            <Tab.Screen
            name="notices"
            component={ShowNotices}
            options={{
                tabBarLabel: 'Avisos',
                tabBarIcon: ({ color, size }) => (
                    <IconMaterial name="notifications-active" color={color} size={size} />
                  ),
            }}
            />
            <Tab.Screen
            name="offering"
            component={OfferingCard}
            options={{
                tabBarLabel: 'Ofrendas',
                tabBarIcon: ({ color, size }) => (
                    <Icon5 name="donate" color={color} size={size} />
                  ),
            }}
            />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default MyTabs;